import request from '../utils/request';
export const getAllGollery = () => {
  return request.get('/gollery/getAllGollery');
};
export const getOneGollery = (params: any) => {
  return request.post('/gollery/getOneGollery', params);
};
