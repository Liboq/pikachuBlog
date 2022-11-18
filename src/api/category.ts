import request from "../utils/request"
export const getAllCategory= () => {
    return request.get('/category/getAll')
}