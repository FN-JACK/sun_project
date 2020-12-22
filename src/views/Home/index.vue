<template>
  <div>
    <Nav></Nav>
    <Banner></Banner>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Banner from './Banner'
import Brand from './Brand'
import Floor from './Floor'
import Like from './Like'
import Nav from './Nav'
import Rank from './Rank'
import Recommend from './Recommend'
export default {
  name: 'Home',
  components:{
    Banner,
    Brand,
    Like,
    Nav,
    Rank,
    Recommend,
    Floor
  }
}
</script>

<style lang="less" scoped>

</style>
