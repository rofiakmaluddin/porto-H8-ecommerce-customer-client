<template>
  <div class="cardContainerWishlist">
    <div
    class="card m-3 shadow-lg"
    style="width: 15rem;"
    v-for="product in products"
    :key="product.Product.id"
    >
      <img :src="product.Product.img_url" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product.Product.name }}</h5>
        <div class="card-text">
          <b>{{ product.Product.price }}</b>
          <div class="m-1">Stock : {{ product.Product.stock }}</div>
        </div>
        <a @click.prevent="addToCart(product.Product.id)" href="#" class="btn btn-primary">Add to Cart</a>
        <a @click.prevent="removeWishlist(product.id)" href="#" class="btn btn-danger">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.productsInWishlist
    }
  },
  created () {
    this.$store.dispatch('fetchAllProductInWishlist', false)
  },
  methods: {
    addToCart (ProductId) {
      this.$store.dispatch('addProductToCart', ProductId)
      this.$store.dispatch('fetchAllProduct', false)
    },
    removeWishlist (id) {
      this.$store.dispatch('removeWishlist', id)
      this.$store.dispatch('fetchAllProductInWishlist', false)
    }
  }
}
</script>

<style>
  .cardContainerWishlist{
    display: flex;
    flex-wrap: wrap
  }
  .card{
    display: flex;
    justify-content: space-around;
  }
</style>
