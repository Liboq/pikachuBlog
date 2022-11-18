import request from "../utils/request"
export const getAllUser= () => {
    return request.get('/user/getAllUser')
}