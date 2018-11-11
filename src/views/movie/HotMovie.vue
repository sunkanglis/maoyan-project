<template>
    <section class="hot-movie">
        <div ref='root' class="hot-movie-wrapper">
            <div  class="hot-movie-list" id="container">
                <hot-movie-item v-for="film in films" :key="film.id" :info='film'></hot-movie-item>
                <div style="height:150px"></div>
            </div>
        </div>
    </section>
</template>
<script>
import HotMovieItem from '@c/common/app-movie/HotMovieItem';
import scroll from '@util/scroll';
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            movieIds:[],
            films :[],
            num :0,
            hasMore: true
        }
    },
    components:{
        HotMovieItem
    },
    computed:{
        Idlist(){
            var arr1 = [];
            for(var i=0;i<this.movieIds.length;i=i+10){
                var arr2 =  this.movieIds;
                arr1.push(arr2.slice(i,i+10));
            }
            return arr1;
        }
    },
    async created(){
        let results = await this.$http({
            url : '/my/ajax/movieOnInfoList',
            params:{
                token:''
            }
        })
        this.movieIds = results.movieIds;
        this.getFilms();
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
    methods:{
        async getFilms(){// 加载的主要逻辑
            if(!this.hasMore) {
                if (this.instance) this.instance.close()
                    this.instance = Toast({
                        message: '没有更多了...',
                        position: 'bottom'
                    })
                return false;
            }
            var result = await this.$http({
                url:'/my/ajax/moreComingList',
                params:{
                    token:'',
                    movieIds : this.Idlist[this.num].join(',')
                }
            })
            
            if(this.num == this.Idlist.length-1){
                this.hasMore = false;
            }else{
                this.num++;
            }
            this.films = this.films.concat(result.coming);
        }
    },
    mounted(){
        this.scroll = scroll({
            el : this.$refs.root,
            handler: this.getFilms.bind(this),
        })
    }
}
</script>
<style lang="scss">
    .hot-movie-wrapper{
        height: 100%;
        overflow: hidden;
    }
</style>


