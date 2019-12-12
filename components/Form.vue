<template>
    <div>
        <input type="text" v-model="user.userId" placeholder="USER ID"><br />
        <input type="password" v-model="user.passWord" placeholder="PASSWORD">
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { userInfo } from '@/interface/userInfo';

@Component
export default class Form extends Vue {
    public user: userInfo = {
        userId: '',
        passWord: ''
    };
}
</script>