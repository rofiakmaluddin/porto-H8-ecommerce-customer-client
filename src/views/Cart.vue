<template>
  <div class="cart">
    <Navbar />
    <ListContainerCart />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import ListContainerCart from '@/components/ListContainerCart'
export default {
  name: 'Cart',
  components: {
    Navbar,
    ListContainerCart
  }
}
</script>

<style>
  .cart{
    height: 100%;
    width: 100%;
  }
</style>
