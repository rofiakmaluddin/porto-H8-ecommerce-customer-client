<template>
  <div id="loginPage" style="max-width:25em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <div class="imgLogin m-3"><img src="../assets/Store-Logo.png" alt=""></div>
    <h2>Login</h2>
    <p>Don't have an account? <a @click.prevent="goToRegister" href="">register here</a></p>
    <div v-if="errors.length !== 0" class="alert alert-danger" role="alert">
      {{ errors }}
    </div>
    <form class="loginForm" @submit.prevent="login">
      <div class="form-floating mb-2">
        <input v-model="email" type="email" class="form-control" placeholder="name@mail.com">
        <label class="m-2">Email address</label>
      </div>
      <div class="form-floating mb-2">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <label class="m-2">Password</label>
      </div>
      <button style="width:5em;" class="btn btn-success" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
    goToRegister () {
      this.$router.push('/register')
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    }
  }
}
</script>

<style>
  .imgLogin img{
    width: 21em;
  }
</style>
