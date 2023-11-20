import request from "../utils/request"
export const getAllSwiper= ():any => {
    return request.get('/swiper/getAllSwiper')
}