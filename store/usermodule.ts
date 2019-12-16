import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

import { userInfo, userState } from '@/interface/userInfo';
import axios from 'axios';

// url
import { baseUrl } from '@/url';

@Module({
    name: 'usermodule',
    stateFactory: true,
    namespaced: true,
})

export default class UserModule extends VuexModule {
    // ユーザーのログイン状況フラグ
    authUser: userState = {
        userId: undefined,
    };
  
    @Mutation
    AUTHED_USER(data: userInfo) {
        this.authUser.userId = data.userId;
    }
    
    // アカウント作成
    @Action
    async createAccount(user: userInfo) {
        try {
            const result = await axios.post(baseUrl, user);
            // null check
            if(!result.data) {
                this.AUTHED_USER(user);
                return undefined;
            } else {
                return result;
            }
        } catch(err) {
            console.log(err);
        }
    }
}
