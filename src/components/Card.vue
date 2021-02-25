<template>
  <div class="cardContainer">
    <div
    class="card m-3 shadow-lg"
    style="width: 15rem;"
    v-for="product in products"
    :key="product.id"
    >
      <img :src="product.img_url" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <div class="card-text">
          <b>{{ product.price }}</b>
          <div class="m-1">Stock : {{ product.stock }}</div>
        </div>
        <a @click.prevent="addToCart(product.id)" href="#" class="btn btn-primary">Add to Cart</a> <a @click.prevent="addToWishlist(product.id)" href="#" class="btn btn-success">Love it</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToWishlist (ProductId) {
      this.$store.dispatch('addProductToWishlist', ProductId)
    },
    addToCart (ProductId) {
      this.$store.dispatch('addProductToCart', ProductId)
      this.$store.dispatch('fetchAllProduct', false)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchAllProduct', false)
  }
}
</script>

<style>
  .cardContainer{
    display: flex;
    flex-wrap: wrap
  }
  .card{
    display: flex;
    justify-content: space-around;
  }
</style>
