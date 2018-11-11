<template>
    <div class="coming-movie-wrap">
        <div>
             <come-movie-box v-for="(date,i) in dates" :key="i" :date='date' :films="films"></come-movie-box>
        </div>
       
    </div>
</template>
<script>
import ComeMovieBox from './ComeMovieBox'
export default {
    data(){
        return {
            dates:[],
            movieIds:[],
            num:0,
            films:[],
        }
    },
    async created(){
        let result = await this.$http({
            url:'/my/ajax/comingList',
            params:{
                ci:'1',
                token:'',
                limit:'10',
            }
        })
        this.movieIds = result.movieIds;
        this.getFilms();
    },
    computed:{
        Idlist(){
            var arr1 = [];
            for(var i=0;i<this.movieIds.length;i=i+10){
                var arr2 =  this.movieIds;
                arr1.push(arr2.slice(i,i+10));
            }
            return arr1;
        },

    },
    methods:{
        async getFilms(){
            let result = await this.$http({
                url:'/my/ajax/morecomingList',
                params:{
                    ci:'1',
                    token:'',
                    limit:'10',
                    movieIds:this.Idlist[this.num].join(',')
                }
            })
            this.num++
            this.films = this.films.concat(result.coming);
            var set = new Set();
            this.films.forEach(element => {
                set.add(element.comingTitle)
            });
            this.dates = Array.from(set);
        }
    },
    components:{
        ComeMovieBox
    }
}
</script>
<style lang="scss">
    
</style>

