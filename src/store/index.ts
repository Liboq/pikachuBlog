import {markdownStore} from './markdown'
import { userStore } from './user'

export default  function mainStore(){
    return {
        markdown:markdownStore(),
        user:userStore()
    }
} 