import request from "../utils/request"
export const getRightAll= () => {
   return request.get('/markdown/getRightAll')
}