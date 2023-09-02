export type IAuthSignin = {
  email: string;
  password: string;
};

export type IAuthSigninResponse = {
  token: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
