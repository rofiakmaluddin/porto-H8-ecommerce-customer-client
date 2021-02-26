import axios from '../api/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    categories: [],
    products: [],
    chosenCategory: 'All Categories',
    productsInCart: [],
    productsInWishlist: []
  },
  mutations: {
    setErrors (state, payload) {
      state.errors = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setChosenCategory (state, payload) {
      state.chosenCategory = payload
    },
    setProductsInCart (state, payload) {
      state.productsInCart = payload
    },
    setproductsInWishlist (state, payload) {
      state.productsInWishlist = payload
    }
  },
  actions: {
    register ({ commit }, payload) {
      axios({
        method: 'POST',
        url: 'register',
        data: payload
      }).then(({ data }) => {
        console.log(data, 'data register <<<<<<<')
        router.push('/login')
      }).catch(err => {
        console.log(err, 'error register <<<<<<<')
      })
    },
    login ({ commit }, payload) {
      axios({
        method: 'POST',
        url: 'loginCustomer',
        data: payload
      }).then(({ data }) => {
        console.log(data, 'data login <<<<<<<')
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      }).catch(err => {
        console.log(err, 'error login <<<<<<<')
      })
    },
    fetchAllProduct (context, chosenCategory) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('setCategories', [])
        const categoriesTemp = []
        data.forEach(e => {
          if (categoriesTemp.length === 0) {
            categoriesTemp.push(e.category)
          } else {
            let flag = false
            for (let i = 0; i < categoriesTemp.length; i++) {
              if (categoriesTemp[i].toLowerCase() === e.category.toLowerCase()) {
                flag = true
              }
            }
            if (!flag) {
              categoriesTemp.push(e.category)
            }
          }
        })
        context.commit('setCategories', categoriesTemp)
        console.log(context.state.categories, '>>> category yg ada')
        context.commit('setProducts', [])
        let productsTemp
        console.log(chosenCategory, '>>> chosenCategory')
        if (!chosenCategory) {
          console.log('masuk !false')
          productsTemp = data
          context.commit('setChosenCategory', 'All Category')
        } else {
          productsTemp = data.filter(e => e.category.toLowerCase() === chosenCategory.toLowerCase())
          context.commit('setChosenCategory', chosenCategory)
        }
        productsTemp.forEach(e => {
          e.price = e.price.toString().split('').reverse()
          const arrResult = []
          let arrTemp = []
          for (let i = 0; i < e.price.length; i++) {
            if (i % 3 !== 0) {
              arrTemp.push(e.price[i])
            } else {
              // arrTemp.reverse()
              if (arrTemp.length !== 0) {
                arrResult.push(arrTemp)
              }
              arrTemp = []
              arrTemp.push(e.price[i])
            }
          }
          if (arrTemp.length !== 0) {
            arrResult.push(arrTemp)
          }
          for (let j = 0; j < arrResult.length; j++) {
            arrResult[j].reverse()
          }
          arrResult.reverse()
          for (let k = 0; k < arrResult.length; k++) {
            arrResult[k] = arrResult[k].join('')
          }
          e.price = 'Rp. ' + arrResult.join('.') + ',00'
        })
        context.commit('setProducts', productsTemp)
        console.log(context.state.products, '>>> products by category')
      }).catch(err => {
        console.log(err)
      })
    },
    addProductToCart ({ commit }, payload) {
      const ProductId = payload
      axios({
        method: 'POST',
        url: 'carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: { ProductId }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchAllProductInCart (context, chosenCategory) {
      axios({
        method: 'GET',
        url: 'carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data, 'cart data <<<<')
        context.commit('setProductsInCart', [])
        let productsTemp
        if (!chosenCategory) {
          productsTemp = data
          context.commit('setChosenCategory', 'All Category')
        }
        productsTemp.forEach(e => {
          e.Product.price = e.Product.price.toString().split('').reverse()
          const arrResult = []
          let arrTemp = []
          for (let i = 0; i < e.Product.price.length; i++) {
            if (i % 3 !== 0) {
              arrTemp.push(e.Product.price[i])
            } else {
              // arrTemp.reverse()
              if (arrTemp.length !== 0) {
                arrResult.push(arrTemp)
              }
              arrTemp = []
              arrTemp.push(e.Product.price[i])
            }
          }
          if (arrTemp.length !== 0) {
            arrResult.push(arrTemp)
          }
          for (let j = 0; j < arrResult.length; j++) {
            arrResult[j].reverse()
          }
          arrResult.reverse()
          for (let k = 0; k < arrResult.length; k++) {
            arrResult[k] = arrResult[k].join('')
          }
          e.Product.price = 'Rp. ' + arrResult.join('.') + ',00'
        })
        context.commit('setProductsInCart', productsTemp)
      }).catch(err => {
        console.log(err)
      })
    },
    removeCart ({ commit }, payload) {
      axios({
        method: 'DELETE',
        url: `/carts/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    updateQuantity ({ commit }, payload) {
      const { id, status, ProductId } = payload
      axios({
        method: 'PATCH',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status,
          ProductId
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    addProductToWishlist ({ commit }, payload) {
      const ProductId = payload
      axios({
        method: 'POST',
        url: 'wishlists',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: { ProductId }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchAllProductInWishlist (context, chosenCategory) {
      axios({
        method: 'GET',
        url: 'wishlists',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data, 'wishlist data <<<<')
        context.commit('setproductsInWishlist', [])
        let productsTemp
        if (!chosenCategory) {
          productsTemp = data
          context.commit('setChosenCategory', 'All Category')
        }
        productsTemp.forEach(e => {
          e.Product.price = e.Product.price.toString().split('').reverse()
          const arrResult = []
          let arrTemp = []
          for (let i = 0; i < e.Product.price.length; i++) {
            if (i % 3 !== 0) {
              arrTemp.push(e.Product.price[i])
            } else {
              // arrTemp.reverse()
              if (arrTemp.length !== 0) {
                arrResult.push(arrTemp)
              }
              arrTemp = []
              arrTemp.push(e.Product.price[i])
            }
          }
          if (arrTemp.length !== 0) {
            arrResult.push(arrTemp)
          }
          for (let j = 0; j < arrResult.length; j++) {
            arrResult[j].reverse()
          }
          arrResult.reverse()
          for (let k = 0; k < arrResult.length; k++) {
            arrResult[k] = arrResult[k].join('')
          }
          e.Product.price = 'Rp. ' + arrResult.join('.') + ',00'
        })
        context.commit('setproductsInWishlist', productsTemp)
      }).catch(err => {
        console.log(err)
      })
    },
    removeWishlist ({ commit }, payload) {
      axios({
        method: 'DELETE',
        url: `wishlists/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
