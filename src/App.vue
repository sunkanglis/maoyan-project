<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from '@c/layout/AppHeader';
import AppMovie from '@views/movie/AppMovie';
export default {
  name:'app',
  components:{
    AppHeader,
    AppMovie,
  }
}
</script>


<style lang="scss">
  #app{
    overflow: hidden;
    height: 100%;
  }
  main{
     margin-top: 1.346667rem;
     height: 100%;
  }
</style>
