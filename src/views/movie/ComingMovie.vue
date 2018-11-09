<template>
    <section class="coming-movie ">
        <div>
            <div class="most-expected">
            <p class="title">近期最受期待</p>
            <most-ep-wrapper></most-ep-wrapper>
            </div>
            <come-movie-wrap ref='comingMov'></come-movie-wrap>
        </div>
        
    </section>
</template>
<script>
import MostEpWrapper from '@c/common/app-movie/MostEpWrapper'
import ComeMovieWrap from '@c/common/app-movie/ComeMovieWrap'
import scroll from '@util/scroll';
export default {
    components:{
        MostEpWrapper,
        ComeMovieWrap
    },
    mounted(){
        this.scroll = scroll({
            el : this.$el,
            handler: this.$refs.comingMov.getFilms.bind(this.$refs.comingMovie),
        })
    }
}
</script>
<style lang="scss">
    .most-expected{
        height: 5.76rem;
        padding: .32rem .4rem;
        border-bottom: .266667rem solid #f5f5f5;
        .title{
            margin-bottom: .32rem;
        }
    }

</style>

