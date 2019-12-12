import { userInfo } from '@/interface/userInfo';
export default {
    AUTHED_USER: (state: any, data: userInfo) => {
        state.authUser = data // 入力したemailとpasswordがここに入る
    },
}