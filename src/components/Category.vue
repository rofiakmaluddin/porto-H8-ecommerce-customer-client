<template>
  <div class="category text-left p-3">
    <h5>Categories:</h5>
    <ul>
      <li @click.prevent="chooseCategory(false)"><a class="black" href="">All Categories</a></li>
      <!-- <li
      v-for="(category, index) in categories"
      :key="index"
      @click.prevent="chooseCategory(category)"
      ><a class="black" href="">{{ category }}</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .category{
    width: 13em;
    background-color: lightgrey;
    height: 100%;
    overflow: auto;
  }
</style>
