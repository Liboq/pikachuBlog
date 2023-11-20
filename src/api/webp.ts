import request from '../utils/request';
type WebpData = {
  userId: string;
  data: string;
  name: string;
};
export const toWebp = (data: WebpData) => {
  return request.post('/webp/toWebp', data);
};
export const getUserWebp = (userId: string):any => {
  return request.post('/webp/getUserWebp', { userId });
};
export const delOneWebp = (id: string) => {
  return request.post('/webp/delWebp', { id });
};
