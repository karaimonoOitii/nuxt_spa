<template>
  <div class="container">
    <div>
      <h1 class="title">
        ログイン
      </h1>
      <Form />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          ログイン
        </a>
        <br />
        <nuxt-link to="/createAccount">
          アカウント作成
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Form from '@/components/Form.vue';

@Component({
  components: {
    Form,
  },
})
export default class index extends Vue {
}
</script>
