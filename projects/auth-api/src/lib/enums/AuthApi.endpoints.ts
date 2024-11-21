export class AuthEndpoint {
  static LOGIN = '/api/v1/auth/signin';
  static REGISTER = '/api/v1/auth/signup';
  static DELETE_ME = '/api/v1/auth/deleteMe';
  static EDIT_PROFILE = '/api/v1/auth/editProfile';
  static CHANGE_PASSWORD = '/api/v1/auth/changePassword';
  static FORGOT_PASSWORD = '/api/v1/auth/forgotPassword';
  static VERIFY_CODE = '/api/v1/auth/verifyResetCode';
  static RESET_PASSWORD = '/api/v1/auth/resetPassword';
  static USER_INFO = '/api/v1/auth/profileData';
  static LOG_OUT = '/api/v1/auth/logout';
}
