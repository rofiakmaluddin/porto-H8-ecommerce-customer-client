<template>
  <div class="items p-3">
    <CardCart />
  </div>
</template>

<script>
import CardCart from '@/components/CardCart'
export default {
  components: {
    CardCart
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
