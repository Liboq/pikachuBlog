import request from "../utils/request"
export const getRightAll= (params:any):any => {
   return request.post('/markdown/getRightAll',params)
}
export const getOneMd = ((parmas:any):any=>{
   return request.post('/markdown/getOneMd',parmas)
})
export const getAll= ():any => {
   return request.get('/markdown/getAll')
}