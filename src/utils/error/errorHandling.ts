import { SetStateAction } from 'react';
import { TFunction } from 'react-i18next';

export const AUTH_ERROR_CODE_MISMATCH = 'CodeMismatchException';
export const AUTH_ERROR_CODE_EXPIRED = 'ExpiredCodeException';
export const AUTH_ERROR_CODE_LIMIT_EXCEEDED = 'LimitExceededException';
export const AUTH_ERROR_CODE_USER_NOT_FOUND = 'UserNotFoundException';
export const AUTH_ERROR_CODE_TOO_MANY_REQUESTS = 'TooManyRequestsException';
export const AUTH_ERROR_CODE_TOO_MANY_FAILED_ATTEMPTS =
  'TooManyFailedAttemptsException';

export const AUTH_ERROR_SIGNUP_INVALID_PASS = 'InvalidPasswordException';
export const AUTH_ERROR_SIGNUP_TOO_MANY_REQUESTS = 'TooManyRequestsException';
export const AUTH_ERROR_SIGNUP_USER_EXISTS = 'UsernameExistsException';
export const AUTH_ERROR_SIGNUP_NOT_AUTHORIZED = 'NotAuthorizedException';
export const AUTH_ERROR_SIGNUP_INVALID_PARAMETER = 'InvalidParameterException';
export const AUTH_ERROR_SIGNUP_FAILED_CODE_DELIVERY =
  'CodeDeliveryFailureException';

export const AUTH_ERROR_TOO_MANY_REQUESTS = 'TooManyRequestsException';
export const AUTH_ERROR_NOT_AUTHORIZED = 'NotAuthorizedException';
export const AUTH_ERROR_INVALID_PARAMETER = 'InvalidParameterException';
export const AUTH_ERROR_FAILED_CODE_DELIVERY = 'CodeDeliveryFailureException';
export const AUTH_ERROR_USER_NOT_CONFIRMED = 'UserNotConfirmedException';
export const AUTH_ERROR_PASSWORD_RESET_REQUIRED =
  'PasswordResetRequiredException';

export const AUTH_ERROR_NEW_PASSWORD_REQUIRED = 'NEW_PASSWORD_REQUIRED';
export const AUTH_ERROR_NOT_CONFIRMED_EXCEPTION = 'UserNotConfirmedException';

export const AUTH_SUCCESS = 'SUCCESS';

export const handleConfirmEmailErrors = (
  e: { code: string },
  setError: {
    (value: SetStateAction<undefined>): void;
    (value: SetStateAction<undefined>): void;
    (arg0: any): void;
  },
  t: TFunction<'translation', undefined>,
) => {
  if (e && e.code) {
    switch (e.code) {
      case AUTH_ERROR_CODE_MISMATCH:
        setError(t('validation:confirmEmail:invalidCode'));
        break;
      case AUTH_ERROR_CODE_EXPIRED:
        setError(t('validation:confirmEmail:codeExpired'));
        break;
      case AUTH_ERROR_CODE_LIMIT_EXCEEDED:
        setError(t('validation:confirmEmail:codeLimitExceeded'));
        break;
      case AUTH_ERROR_CODE_USER_NOT_FOUND:
        setError(t('validation:confirmEmail:codeUserNotFound'));
        break;
      case AUTH_ERROR_CODE_TOO_MANY_REQUESTS:
        setError(t('validation:confirmEmail:codeRequestsExceeded'));
        break;
      case AUTH_ERROR_CODE_TOO_MANY_FAILED_ATTEMPTS:
        setError(t('validation:confirmEmail:codeFailedAttemptsExceeded'));
        break;
      default:
        console.error(
          'Confirm code error [' +
            e.code +
            '] not handled, setting generic error',
        );
        setError(t('validation:confirmEmail:invalidCodeGeneric'));
        break;
    }
  }
};

export const handleSignUpErrors = (
  e: { code: string },
  setError: { (value: SetStateAction<boolean>): void; (arg0: any): void },
  t: TFunction<'translation', undefined>,
) => {
  if (e && e.code) {
    switch (e.code) {
      case AUTH_ERROR_SIGNUP_INVALID_PASS:
        setError(t('auth:signup:invalidPass'));
        break;
      case AUTH_ERROR_SIGNUP_TOO_MANY_REQUESTS:
        setError(t('auth:common:tooManyRequests'));
        break;
      case AUTH_ERROR_SIGNUP_USER_EXISTS:
        setError(t('auth:signup:userExists'));
        break;
      case AUTH_ERROR_SIGNUP_NOT_AUTHORIZED:
        setError(t('auth:common:notAuthorized'));
        break;
      case AUTH_ERROR_SIGNUP_INVALID_PARAMETER:
        setError(t('auth:common:invalidParameter'));
        break;
      case AUTH_ERROR_SIGNUP_FAILED_CODE_DELIVERY:
        setError(t('auth:common:failedSendingCode'));
        break;
      default:
        console.error(
          'Signup error code [' +
            e.code +
            '] not handled, setting generic error',
        );
        setError(t('auth:signup:invalidGeneric'));
        break;
    }
  }
};

export const handleResendCodeErrors = (
  e: { code: string },
  setError: {
    (value: SetStateAction<undefined>): void;
    (value: SetStateAction<undefined>): void;
    (arg0: any): void;
  },
  t: TFunction<'translation', undefined>,
) => {
  if (e && e.code) {
    switch (e.code) {
      case AUTH_ERROR_FAILED_CODE_DELIVERY:
        setError(t('auth:common:failedSendingCode'));
        break;
      case AUTH_ERROR_TOO_MANY_REQUESTS:
        setError(t('auth:common:tooManyRequests'));
        break;
      case AUTH_ERROR_CODE_LIMIT_EXCEEDED:
        setError(t('auth:common:tooManyCodes'));
        break;
      case AUTH_ERROR_NOT_AUTHORIZED:
        setError(t('auth:common:notAuthorized'));
        break;
      case AUTH_ERROR_INVALID_PARAMETER:
        setError(t('auth:common:invalidParameter'));
        break;

      default:
        console.error(
          'Resend error code [' +
            e.code +
            '] not handled, setting generic error',
        );
        setError(t('auth:common:invalidGeneric'));
        break;
    }
  }
};
