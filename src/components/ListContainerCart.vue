<template>
  <div class="listContainerCart">
    <ItemCart />
  </div>
</template>

<script>
import ItemCart from './ItemCart'
export default {
  components: {
    ItemCart
  }
}
</script>

<style>
  .listContainerCart{
    display: flex;
    height: 700px;
  }
</style>
