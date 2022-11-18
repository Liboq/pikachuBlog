import request from "../utils/request"
export const getAllTag= () => {
    return request.get('/tip/getAll')
}