<template>
  <div class="items p-3">
    <CardWishlist />
  </div>
</template>

<script>
import CardWishlist from '@/components/CardWishlist'
export default {
  components: {
    CardWishlist
  }
}
</script>

<style>
  .items{
    width: 100%;
    /* background-color: lightpink; */
    overflow: auto;
  }
</style>
