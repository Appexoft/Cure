import ROUTES from 'src/utils/routes';

export type DoctorParamList = {
  [ROUTES.ApplyAsDoctor_Intro]: undefined;
  [ROUTES.ApplyAsDoctor_Wizzard]: undefined;
  [ROUTES.ApplyAsDoctor_PersonalDetails]: undefined;
  [ROUTES.ApplyAsDoctor_Profession]: undefined;
  [ROUTES.ApplyAsDoctor_Education]: undefined;
  [ROUTES.ApplyAsDoctor_EmploymentType]: undefined;
  [ROUTES.ApplyAsDoctor_KYC]: undefined;
  [ROUTES.ApplyAsDoctor_Services]: undefined;
  [ROUTES.ApplyAsDoctor_InviteOthers]: undefined;
  [ROUTES.Gender]: undefined;
};

export interface Entry {
  name?: string;
  issuingOrg?: string;
  fieldOfStudy?: string;
  expireDate?: Date;
  university?: string;
  completionDate?: Date;
  degree?: string;
}
