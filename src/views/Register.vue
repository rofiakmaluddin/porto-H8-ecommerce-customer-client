<template>
  <div id="registerPage" style="max-width:25em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <div class="imgRegister m-3"><img src="../assets/Store-Logo.png" alt=""></div>
    <h2>Register</h2>
    <p>Have an account? <a @click.prevent="goToLogin" href="">login here</a></p>
    <div v-if="errors.length !== 0" class="alert alert-danger" role="alert">
      {{ errors }}
    </div>
    <form class="registerForm" @submit.prevent="register">
      <div class="form-floating mb-2">
        <input v-model="email" type="email" class="form-control" placeholder="name@mail.com">
        <label class="m-2">Email address</label>
      </div>
      <div class="form-floating mb-2">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <label class="m-2">Password</label>
      </div>
      <button style="width:6em;" class="btn btn-success" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
    },
    goToLogin () {
      this.$router.push('/login')
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
  .imgRegister img{
    width: 21em;
  }
</style>
