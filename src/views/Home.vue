<template>
  <div class="home">
    <Navbar />
    <Banner />
    <ListContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import ListContainer from '@/components/ListContainer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    ListContainer
  }
}
</script>

<style>
  .home{
    height: 100%;
    width: 100%;
  }
</style>
