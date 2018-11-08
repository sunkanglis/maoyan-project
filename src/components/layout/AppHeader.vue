<template>
    <header class="app-header">
        <h1 class="header-content">
            <i @click='back' class="fa fa-angle-left fa-2x" v-if="isShow"></i>
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    data(){
        return {
            title : "",
            isShow : false,
            from:'movie',
        }
    },
    created(){
        // 全局路由钩子
        this.title =this.createTitle().title;
        this.isShow = this.createTitle().isShow;
        this.$router.beforeEach((to,from,next)=>{
            this.from = from.name;
            this.title =this.createTitle(to).title;
            this.isShow = this.createTitle(to).isShow;
            next();
        })
        
    },
    methods :{
        createTitle(to){
            let _to = to || this.$route;
            switch(_to.name){
                case 'cinema' :return {title:'影院',isShow : false};
                case 'mine' : return {title:'猫眼电影',isShow : true}
                case 'login' : return {title:'猫眼电影',isShow : true}
                default: return {title:'猫眼电影',isShow:false};
            }
        },
        back(){
            this.$router.push({name:this.from});
        }
    }
}
</script>

<style lang="scss">
    @import '../../css/particles/variable';
    .app-header{
        position: fixed;
        width: 100%;
        overflow: hidden;
        .header-content{
        height: 1.346667rem;
        background-color: $base-bg-color;
        width: 100%;
        color: white;
        border-bottom: 1px solid #e54847;
        font-size: .48rem;
        text-align: center;
        line-height: 1.346667rem;
        i{
            position: absolute;
            left: .56rem;
            top: .16rem;
        }
    }
    }
    
</style>
