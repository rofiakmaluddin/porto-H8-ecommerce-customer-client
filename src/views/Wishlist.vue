<template>
  <div class="wishlist">
    <Navbar />
    <ListContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import ListContainer from '@/components/ListContainer'
export default {
  name: 'Wishlist',
  components: {
    Navbar,
    ListContainer
  }
}
</script>

<style>
  .wishlist{
    height: 100%;
    width: 100%;
  }
</style>
