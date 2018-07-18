<template>
  <div>
    Login Page
    <form @submit.prevent="login">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p v-if="token" class="error">{{ token }}</p>
      <p>Username: <input v-model="formUsername" type="text" name="username" ></p>
      <p>Password: <input v-model="formPassword" type="password" name="password" ></p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import {login} from '../api/login'

  export default {
    data() {
      return {
        formError: null,
        formUsername: '',
        formPassword: '',
        token: ''
      }
    },
    methods: {
      async login() {
        const auth_data = {
          username: this.formUsername,
          password: this.formPassword
        }
        login(this, auth_data, '/')
//        try {
//          await this.$store.dispatch('login', auth_data)
//        } catch (e) {
//          this.formError = e.msg
//        }
      }
    }
  }
</script>

<style>
</style>
