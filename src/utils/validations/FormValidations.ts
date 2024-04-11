/**
 * IMPORTANT - All the validations should return TRUE in case they are fine, or FALSE in case not.
 * The validationMsg is set per TextInputHealer! Very importaant
 */

export const validatePassword = (pw: string) => {
  return (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    pw.length >= 8
  );
};

export const validateNewPassword = (
  newPassword: string,
  newPasswordAgain: string,
) => {
  if (newPasswordAgain && newPassword !== newPasswordAgain) {
    console.error(
      'Validation: Invalid new password, does not match existing pass',
      newPassword,
    );
    return false;
  }
  return true;
};

export const validateEmail = (value: string) => {
  const valueTrimmed = value.trim();
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    valueTrimmed,
  );
};

export const validateUrl = (value: string) => {
  if (!value) {
    return 'Please enter a valid url';
  }
  const valueTrimmed = value.trim();
  // eslint-disable-next-line max-len
  const regexTest =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
      valueTrimmed,
    );
  if (!regexTest) {
    console.error('Validation: Invalid url', value);
    return false;
  }
  return true;
};

/**
 * We should return true in case everything its ok
 * @param value
 * @param length
 * @returns {string}
 */
export const validateValue = (value: string | any[], length: number) => {
  if (!value) {
    console.error('Validation: Invalid given value', value);
    return false;
  } else if (value.length < length) {
    console.error('Validation: Invalid length of the value', value);
    return false;
  }
  return true;
};

export const validatePhoneNumber = (value: string, allowNull: boolean) => {
  const regexTest = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(value);
  if (!value) {
    if (allowNull) {
      return true;
    }

    console.error('Validation: Invalid phone number, it is null', value);
    return false;
  } else if (!regexTest) {
    console.error(
      'Validation: Invalid phone number, does not pass regex',
      value,
    );
    return false;
  }
  return true;
};
