<template>
  <div class="wishlist">
    <Navbar />
    <ListContainerWishlist />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import ListContainerWishlist from '@/components/ListContainerWishlist'
export default {
  name: 'Wishlist',
  components: {
    Navbar,
    ListContainerWishlist
  }
}
</script>

<style>
  .wishlist{
    height: 100%;
    width: 100%;
  }
</style>
