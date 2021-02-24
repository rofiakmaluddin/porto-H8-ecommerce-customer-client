<template>
  <div class="home">
    <Navbar />
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
export default {
  name: 'Home',
  components: {
    Navbar,
    Banner
  }
}
</script>

<style>
  #home{
    height: 100%;
    width: 100%;
  }
</style>
