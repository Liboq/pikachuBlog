import request from "../utils/request"
export const getAllSwiper= () => {
    return request.get('/swiper/getAllSwiper')
}