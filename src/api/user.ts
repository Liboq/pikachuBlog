import request from '../utils/request';
export const getAllUser = () => {
  return request.get('/user/getAllUser');
};
type LoginData = {
  userName: string;
  password: string;
};
type Result = {
  message: string;
  status: number;
  data: any;
  token: string;
};
export const login = (data: LoginData) => {
  return request.post('/user/login', data);
};
export const isVip = (userId: string) => {
  return request.post('/user/isVip', { userId });
};
