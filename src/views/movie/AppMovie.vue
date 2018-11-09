<template>
    <div id="movie">
        <app-movie-nav></app-movie-nav>
        <router-view class="view"></router-view>
        <app-footer></app-footer>
    </div>
    
</template>
<script>
import AppMovieNav from './AppMovieNav';
import HotMovie from './HotMovie';
import AppFooter from '@c/layout/AppFooter';
export default {
    name : 'movie',
    components:{
        AppMovieNav,
        AppFooter,
        HotMovie,
    }
}
</script>
<style lang="scss">
    .view{
        margin-top: 1.173333rem;
        height: 100%;
    }
    #movie{
        overflow: hidden;
        height: 100%;
    }
</style>
