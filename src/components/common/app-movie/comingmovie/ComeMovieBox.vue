<template>
    <div class="coming-movie-box">
        <p>{{date}}</p>
        <hot-movie-item v-for="film in films" :key='film.id'
            v-if='film.comingTitle == date' :info="film"
        ></hot-movie-item>
    </div>
</template>
<script>
import HotMovieItem from '../HotMovieItem'
export default {
    props:['date','films'],
    components:{
        HotMovieItem
    }
    
}
</script>
<style lang="scss">
    .coming-movie-box{
        p{
            padding: .32rem .4rem 0 .4rem;
            margin: 0;
            font-size: 14px;
            color: #333;
        }
    }
</style>