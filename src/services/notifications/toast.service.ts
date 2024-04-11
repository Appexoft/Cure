class ToastService {
  init = (intl, toast) => {
    this.intl = intl;
    this.toast = toast;
  };

  displayCodeResentSuccessfully = () => {
    this.displaySuccessMsg('auth:codeResentSuccessfully');
  };

  displayCodeSentSuccessfully = () => {
    this.displaySuccessMsg('auth:codeSentSuccessfully');
  };

  displayUploadSuccess = () => {
    this.displaySuccessMsg('common:toast:uploadSuccess');
  };

  displayEmailNotVerified = () => {
    this.displaySuccessMsg('auth:signIn:emailNotVerified');
  };

  displayWarningMsg = (msgKey) => {
    this.toast.show(this.intl(msgKey), {
      type: 'warning',
      placement: 'bottom',
      offsetBottom: 300,
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
  };

  displaySuccessMsg = (msgKey) => {
    this.toast.show(this.intl(msgKey), {
      type: 'success',
      placement: 'bottom',
      offsetBottom: 300,
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
  };

  displayErrorMsg = (msgKey) => {
    this.toast.show(this.intl(msgKey), {
      type: 'error',
      placement: 'top',
      offsetTop: 100,
      duration: 4000,
      offset: 30,
      animationType: 'slide-in',
    });
  };
}

export default ToastService;
