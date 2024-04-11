
import { format, formatDistanceToNow } from 'date-fns';
import { en } from 'date-fns/locale';
import {
  ICodeableConcept,
  IAddress,
  IPatient,
  IPractitioner,
  IPractitionerRole, IOrganization,
} from '../domainEntities';

// TODO - create a library out of this ? so we can create Fhir entities and covert them back and fort to Json?
// todo save sub from cognito ?

/**
 * Will create a new Patient json
 * @param email
 * @param cognitoSub
 * @param firstName
 * @param lastName
 */

export const FHIR_TYPES = {
  Patient: 'Patient',
  Location: 'Location',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
};

// Fhir related

/**
 * [
 *     {
 *         "family": "Kuhic920",
 *         "given": [
 *             "Mariel814"
 *         ],
 *         "prefix": [
 *             "Dr."
 *         ]
 *     }
 * ]
 * @param data
 * @returns {*|string}
 */
// todo use here User type
export const getNameFromFhir = (data: IPatient) => {
  if (data) {
    return (
      data.namePrefix +
      ' ' +
      data.nameGiven +
      ' ' +
      data.nameFamily +
      ' ' +
      data.nameSuffix
    ); // temp
  } else {
    console.error('Given patient is empty');
    return '';
  }
};

export const getNameForPractitionerRole = (data: IPractitionerRole) => {
  if (data) {
    if (data.nameText) {
      return data.nameText;
    }
  }
  return '';
};

export const getNameForPractitioner = (data: IPractitioner) => {
  if (data) {
    if (data.nameText) {
      return data.nameText;
    }
    return data.namePrefix + ' ' + data.nameGiven + ' ' + data.nameFamily;
  }
  return '';
};

export const getQualificationForPractitionerRole = (
  data: IPractitionerRole,
) => {
  if (data) {
    return getQualificationDisplay(data?.qualificationService);
  }
  return '';
};

export const getQualificationForPractitioner = (data: IPractitioner) => {
  if (data) {
    return getQualificationDisplay(data?.qualificationMedicalField);
  }
  return '';
};

export const getQualificationForHospital = (data: IOrganization) => {
  if (data) {
    return getQualificationDisplay(data?.qualificationMedicalField);
  }
  return '';
};

export const getQualificationDisplay = (data: ICodeableConcept) => {
  if (data) {
    if (data) {
      return data?.display1;
    }
  }
  return '';
};

/**
 * "identifier": [
 *                     {
 *                         "use": "official",
 *                         "type": {
 *                             "text": "cure.care/description",
 *                             "coding": [
 *                                 {
 *                                     "code": "description",
 *                                     "system": "urn:uuid:cure.care/description",
 *                                     "version": "1"
 *                                 }
 *                             ]
 *                         },
 *                         "value": "Very nice organization it is",
 *                         "system": "urn:uuid:cure.care/description"
 *                     }
 *                 ],
 * @param data
 * @param system
 */
export const getValueFromFhirIdentifier = (
  data: fhirR4.Identifier[],
  system: string,
) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const crtIdentifier: fhirR4.Identifier = data[i];
      const crtSystem = crtIdentifier.system;
      if (crtSystem && crtSystem.includes(system)) {
        return crtIdentifier.value;
      }
    }
  }
  return '';
};


export const getNameIdentifierFromFhir = (data: fhirR4.Identifier[]) => {
  return getValueFromFhirIdentifier(data, 'urn:uuid:cure.care/name');
};

export const getLocale = () => {
  return en; // todo take locale from user profile ??
};

export const getDatePretty = (date?: Date) => {
  if (date) {
    return format(date, 'do MMM yyyy', { locale: getLocale() });
  }
  return '';
};

export const getDateDistanceToNowPretty = (date?: Date) => {
  if (date) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: getLocale(),
    });
  }
  return '';
};

export const getDateInterval = (startDate: Date, endDate: Date) => {
  return (
    startDate.getHours() +
    (startDate.getMinutes() === 0 ? '' : ':' + startDate.getMinutes()) +
    ' - ' +
    endDate.getHours() +
    '' +
    (endDate.getMinutes() === 0 ? '' : ':' + endDate.getMinutes()) +
    ' ' +
    (endDate.getHours() < 12 ? 'am' : 'pm')
  );
};

export const getDateIntervalMonthsYears = (start?: number, end?: number) => {
  let result = '';
  if (start) {
    result = format(new Date(start), 'MMM yyyy - ', { locale: getLocale() });
  }
  if (end) {
    result += format(new Date(end), 'MMM yyyy', { locale: getLocale() });
  }
  return result;
};

export const getDateIntervalPretty = (
  start?: Date,
  end?: Date,
  showYear = false,
) => {
  if (start && end) {
    let yearString: string = showYear ? ' yyyy' : '';
    return (
      format(start, 'do MMM, haaa' + yearString, { locale: getLocale() }) +
      format(end, ' - do MMM, haaa' + yearString, { locale: getLocale() })
    );
  }

  if (start && !end) {
    let yearString: string = showYear ? ' yyyy' : '';
    return (
      format(start, 'do MMM, haaa - ' + yearString, { locale: getLocale() })
    );
  }

  if (!start && end) {
    let yearString: string = showYear ? ' yyyy' : '';
    return (
      format(end, '- do MMM, haaa ' + yearString, { locale: getLocale() })
    );
  }
  return '';
};

export const convertToDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export const getHoursIntervalPretty = (start?: Date, end?: Date) => {
  if (start && end) {
    return (
      format(start, 'haaa', { locale: getLocale() }) +
      format(end, ' - haaa (', { locale: getLocale() }) +
      getDateDistanceToNowPretty(start) +
      ')'
    );
  }
  return '';
};

export const getAppointmentDatePretty = (resource: fhirR4.Appointment) => {
  if (resource && resource.start && resource.end) {
    const start: Date = new Date(resource.start);
    const end: Date = new Date(resource.end);

    if (start && end) {
      if (start.getDay() === end.getDay()) {
        return getDateIntervalPretty(start, end);
      } else {
        return (
          start.getDay() +
          ' ' +
          start.getHours() +
          ' - ' +
          end.getDay() +
          ' ' +
          end.getHours()
        );
      }
    }
  }
  return '';
};

export const getCodeableConceptDisplay = (
  resource: fhirR4.CodeableConcept[],
) => {
  let codings = [];
  if (resource && resource.length > 0) {
    // todo take into consideration CodeableConcept text?
    resource.forEach((it: fhirR4.CodeableConcept) => {
      if (it && it.coding && it.coding.length > 0) {
        it.coding.forEach((coding) => {
          if (coding && coding.display) {
            codings.push(coding.display);
          }
        });
      }
    });
  }
  return codings.join(', ');
};

export const getParticipantFromAppointment = (
  resource: fhirR4.Appointment,
  resourceType: string,
) => {
  if (resource && resource.participant && resource.participant.length > 0) {
    for (let i = 0; i < resource.participant.length; i++) {
      const crt: fhirR4.AppointmentParticipant = resource.participant[i];
      if (crt.actor && crt.actor.resourceType === resourceType) {
        return crt;
      }
    }
  }
  return null;
};

export const getDoctorFromAppointment = (resource: fhirR4.Appointment) => {
  return getParticipantFromAppointment(resource, FHIR_TYPES.Practitioner);
};

export const getLocationFromAppointment = (resource: fhirR4.Appointment) => {
  return getParticipantFromAppointment(resource, FHIR_TYPES.Location);
};

export const getPatientFromAppointment = (resource: fhirR4.Appointment) => {
  return getParticipantFromAppointment(resource, FHIR_TYPES.Patient);
};

export const getNameInitialsFromFhir = (
  firstName: string,
  lastName: string,
) => {
  if (firstName && lastName) {
    return firstName.charAt(0) + lastName.charAt(0);
  }
  return '';
};


export const getAddressesAsString = (
  data: IAddress,
  showShortAddress = false,
) => {
  if (data != null && data != undefined) {
    if (showShortAddress) {
      return getShortAddressAsString(data);
    } else {
      return getMediumAddressAsString(data);
    }
  }
  return '';
};

export const getMediumAddressAsString = (data: IAddress) => {
  if (data) {
    return `${data.streetName} ${data.number} ${data.additionalDetails}, ${data.city}, ${data.postalCode}, ${data.county}, ${data.country}`;
  }
  return '';
};

export const getShortAddressAsString = (data: IAddress) => {
  if (data) {
    let result = '';
    if(data.city) {
      result = data.city;
    }
    if(data.country) {
      result = result + ", " + data.country;
    }
    return result;
  }
  return '';
};

export const getShortAddressFromFhir = (data: fhirR4.Address) => {
  if (data) {
    let finalName = '';
    const addComma = finalName.length > 0 ? ',' : '';
    finalName = `${finalName} ${addComma} ${data?.line?.join(', ')} ${
      data.city
    }, ${data.country}`;
    return finalName;
  }
  return '';
};

export const getExtensionValue = (ex: any) => {
  if (ex) {
    if (ex.value) {
      return ex.value;
    }
    if (ex.valueInstant) {
      return ex.valueInstant;
    }
    if (ex.valueString) {
      return ex.valueString;
    }
    if (ex.valueBase64Binary) {
      return ex.valueBase64Binary;
    }
    if (ex.valueBoolean) {
      return ex.valueBoolean;
    }
    if (ex.valueCanonical) {
      return ex.valueCanonical;
    }
    if (ex.valueCode) {
      return ex.valueCode;
    }
    if (ex.valueDate) {
      return ex.valueDate;
    }
    if (ex.valueDateTime) {
      return ex.valueDateTime;
    }
    if (ex.valueDecimal) {
      return ex.valueDecimal;
    }
    if (ex.valueId) {
      return ex.valueId;
    }
    if (ex.valueInteger) {
      return ex.valueInteger;
    }
    if (ex.valueInteger64) {
      return ex.valueInteger64;
    }
  }
  return '';
};

export const getExtensionsFromFhir = (data: any) => {
  if (data.meta && data.meta.extension) {
    return data.meta.extension.map((ext: any, index: any) => {
      return `(${ext.url}) = ${getExtensionValue(ext)}`;
    });
  }
  return '';
};

export const getDeceasedFromFhir = (data): any => {
  return data.deceased ? data.deceased : 'unknown';
};

export const getEmailFromFhir = (data: any) => {
  if (data && data.telecom) {
    const { telecom } = data;
    const found = telecom.filter(
      (it: any) => it.system && it.system.includes('email'),
    ); // todo use the correct system code here
    return found.map((it: any) => `${it.value} (${it.use})`).join(', ');
  }
  return '';
};

export const getPhoneNumberFromFhir = (data: any) => {
  if (data && data.telecom) {
    const { telecom } = data;
    const found = telecom.filter(
      (it: any) => it.system && it.system.includes('phone'),
    ); // todo use the correct system code here
    return found.map((it: any) => `${it.value} (${it.use})`).join(', ');
  }
  return '';
};
