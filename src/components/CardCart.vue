<template>
  <div class="cardContainerCart">
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
          <div class="m-1">Quantity : {{ product.quantity }}</div>
        </div>
        <a @click.prevent="updateQuantity(product.id, product.ProductId, true)" href="#" class="btn btn-success">+</a> <a @click.prevent="updateQuantity(product.id, product.ProductId, false)" href="#" class="btn btn-warning">-</a> <a @click.prevent="removeCart(product.id)" href="#" class="btn btn-danger">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.productsInCart
    }
  },
  created () {
    this.$store.dispatch('fetchAllProductInCart', false)
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
      this.$store.dispatch('fetchAllProductInCart', false)
    },
    updateQuantity (id, ProductId, status) {
      this.$store.dispatch('updateQuantity', {
        id,
        ProductId,
        status
      })
      this.$store.dispatch('fetchAllProductInCart', false)
    }
  }
}
</script>

<style>
  .cardContainerCart{
    display: flex;
    flex-wrap: wrap
  }
  .card{
    display: flex;
    justify-content: space-around;
  }
</style>
