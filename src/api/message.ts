import request from "../utils/request"
export const getAllMes= () => {
   return request.get('/message/getAllMes')
}
export const addMessage= (data:any) => {
    return request.post('/message/addMessage',data)
 }