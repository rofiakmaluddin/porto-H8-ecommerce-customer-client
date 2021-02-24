<template>
  <div class="items p-3">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  components: {
    Card
  }
}
</script>

<style>
  .items{
    width: 100%;
    background-color: lightpink;
    overflow: auto;
  }
</style>
