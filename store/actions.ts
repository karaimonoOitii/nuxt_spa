import { userInfo } from '@/interface/userInfo';
import axios from 'axios';

// url
import { baseUrl } from '@/url';

export default {
    // アカウント作成
    async createAccount(commit: any, user: userInfo) {
        try {
            const param: userInfo = {
                userId: user.userId,
                passWord: user.passWord
            };

            await axios.post(baseUrl, user)
            .then((result) => {
                console.log(result);

                // エラー
                if(result.data.statusCode === 400) {
                } else {
                    
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } catch(err) {
            console.log(err);
        }
    }
}
