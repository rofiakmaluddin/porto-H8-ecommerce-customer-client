<template>
  <div class="listContainerWishlist">
    <ItemWishlist />
  </div>
</template>

<script>
import ItemWishlist from './ItemWishlist'
export default {
  components: {
    ItemWishlist
  }
}
</script>

<style>
  .listContainerWishlist{
    display: flex;
    height: 700px;
  }
</style>
