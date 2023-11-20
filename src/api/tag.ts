import request from "../utils/request"
export const getAllTag= ():any => {
    return request.get('/tip/getAll')
}