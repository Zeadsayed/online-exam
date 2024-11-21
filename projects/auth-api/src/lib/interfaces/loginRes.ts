export interface Res {
  message: string;
  token: string;
  userEmail: string;
}
export interface APIRes {
  message: string;
  token: string;
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
  };
}
