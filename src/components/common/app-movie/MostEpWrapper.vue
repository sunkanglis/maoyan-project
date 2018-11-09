<template>
   <div class="wrapper">
        <ul>
            <most-ep-item tag='li' v-for='film in films' :key='film.id' :info='film'></most-ep-item>
        </ul>
    </div>
</template>
<script>
import MostEpItem from './MostEpItem'
import BetterScroll from 'better-scroll'
export default {
    data(){
        return {
            films:[],
            offset:0
        }
    },
    created(){
        this.getFilms()
    },
    methods:{
        async getFilms(){
            let result = await this.$http({
                url:'/my/ajax/mostExpected',
                params:{
                    ci:'1',
                    limit:'10',
                    offset:this.offset,
                    token:''
                }
            })
            this.offset++;
            this.films = this.films.concat(result.coming)
        }
    },
    mounted(){
        new BetterScroll(this.$el,{
            scrollX :true,
        })
    },
    components:{
        MostEpItem
    }
}
</script>
<style lang="scss">
    .wrapper{
        height: 4.293333rem;
        width:100%;
        overflow: scroll;
        white-space: nowrap;
        ul{
            height: 100%;
            display: flex;
            float: left;
            // most-ep-item{
                
            // }
        }
    }
</style>


