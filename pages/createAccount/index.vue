<template>
  <div class="container">
    <div>
      <h1 class="title">
        アカウント作成
      </h1>
      <Form ref="form" />
      <div class="links">
        <a
          target="_blank"
          class="button--green"
          @click="createAccount()"
        >
          アカウント作成
        </a>
        <br />
        <nuxt-link to="/">
          ログインへ
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// module
import { Vue, Component } from 'vue-property-decorator';
// interface
import { userInfo } from '@/interface/userInfo';
// Component
import Form from '@/components/Form.vue';

@Component({
    components: {
        Form,
    },
})
export default class index extends Vue {
  $refs!: {
    form: Form,
  }
  
  private async createAccount() {
      try {
          await this.$store.dispatch('createAccount', this.$refs.form.user);
      } catch(err) {
          console.log(err);
      }
  }
}
</script>