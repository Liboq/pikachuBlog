import request from "../utils/request"
export const getRightAll= (params:any) => {
   return request.post('/markdown/getRightAll',params)
}
export const getOneMd = ((parmas:any)=>{

   
   return request.post('/markdown/getOneMd',parmas)
})