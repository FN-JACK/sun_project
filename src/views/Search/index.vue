<template>
  <div>
    <h1>Search组件</h1>
    <h3>params:{{$route.params.keyword}}</h3>
    <h3>query:{{$route.query.keyword1}}</h3>

  </div>
  
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style lang="less" scoped>

</style>
