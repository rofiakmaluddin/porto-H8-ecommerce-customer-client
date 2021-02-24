<template>
  <div class="listContainer">
    <Category />
    <Item />
  </div>
</template>

<script>
import Category from './Category'
import Item from './Item'
export default {
  components: {
    Category,
    Item
  }
}
</script>

<style>
  .listContainer{
    display: flex;
    height: 700px;
  }
</style>
