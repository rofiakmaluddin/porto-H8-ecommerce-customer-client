<template>
  <div class="navbar">
    <div class="leftNavbar pr-0 pt-2 pb-2 pl-3">
      <a href="">
        <img src="../assets/Store-Logo.png" alt="store logo">
      </a>
    </div>
    <div class="centerNavbar">
      <ul class="p-0 mr-3 mb-0">
        <li><a href="">Wishlist</a></li> | <li><a href="">Cart</a></li> | <li><a href="">History</a></li>
      </ul>
    </div>
    <div class="rightNavbar pr-3">
      <div><a href="">Logout</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
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
