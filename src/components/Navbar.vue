<template>
  <div class="navbar">
    <div class="leftNavbar pr-0 pt-2 pb-2 pl-3">
      <a @click.prevent="goToHome" href="">
        <img src="../assets/Store-Logo.png" alt="store logo">
      </a>
    </div>
    <div class="centerNavbar">
      <ul class="p-0 mr-3 mb-0">
        <li @click.prevent="goToWishlist"><a href="">Wishlist</a></li> | <li><a @click.prevent="goToCart" href="">Cart</a></li> | <li><a href="">History</a></li>
      </ul>
    </div>
    <div class="rightNavbar pr-3">
      <div @click.prevent="logout"><a href="">Logout</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goToWishlist () {
      this.$router.push('/wishlist')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .leftNavbar img{
    height: 50px;
  }
  .centerNavbar li{
    display: inline;
    list-style-type: none;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    background-color: lightgrey;
  }
</style>
