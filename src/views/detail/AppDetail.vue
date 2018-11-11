<template>
    <div class="movie-detail">
        <div ref="root" class="wraper">
        <div>
        <div class="movie-header">
            <div class="movie-background" :style="{backgroundImage:'url('+ bg +')'}"></div>
            <div class="movie-filter"></div>
            <div class="movie-container" >
                <div class="img">
                    <img :src="movieimg" alt="">
                </div>
                <div class="content">
                    <div class="name text-ellipsis">{{detail.nm}}</div>
                    <div class="ename text-ellipsis">{{detail.enm}}</div>
                    <div class="wish-num text-ellipsis"><span>{{detail.wish}}</span>人想看</div>
                    <div class="common text-ellipsis">{{detail.cat}}</div>
                    <div class="common text-ellipsis">{{detail.src}}/{{detail.dur}}分钟</div>
                    <div class="common text-ellipsis">{{detail.pubDesc}}</div>
                </div>
            </div>
        </div>
        <div style="background: #fff;
            height:1.36rem;
            padding: .4rem .4rem 0;">
            <span class="preferential">特惠购票</span>
        </div>
        
        <div class="story">
            <div :class="boolen? 'story-description-false' :'story-description-true'">{{detail.dra}}</div>
            <div class="text-expander-button" >
                <i class="fa fa-2x" :class="boolen? 'fa-angle-down':'fa-angle-up'" @click='boolen = !boolen'></i>
            </div>
        </div>
        <div class="actor">
            <ul class="actor-list">
                <li >
                    <img src="http://p0.meituan.net/moviemachine/231e87d37ebd5e191899e2210619b2dd41945.jpg@130w_180h.webp" alt="">
                    <span class="person-name">鲁本·弗雷斯彻</span>
                    <span class="person-roles">导演</span>
                </li>
            </ul>
            <div class="allRoles">
                全体演职人员
                <i class="fa fa-angle-right fa-2x"></i>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import scroll from '@util/scroll'
export default {
    props:['id'],
    data(){
        return {
            boolen:true,
            detail:{},
            roles:[
                {src:''}
            ]
        }
    },
    computed:{
        bg(){
            if(this.detail.img){
                return this.detail.img.replace(/w\.h/,'177.249');
            }
        },
        movieimg(){
             if(this.detail.img){
                return this.detail.img.replace(/\/w.h\//,'/');+'@177w_249h.webp';
            }
        }

    },
    async created(){
        let result = await this.$http({
            url:'/my/ajax/detailmovie',
            params:{
                movieId : this.id
            }
        })
        this.detail = result.detailMovie;
    },
    mounted(){
        this.scroll = scroll({
            el:this.$refs.root,
            
        })
    }
}
</script>
<style lang="scss">
    .movie-detail{
        background-color: rgb(247, 245, 245);
        width: 100%;
        height: 100%;
        overflow: hidden;
        .wraper{height: 100%;}
        .movie-header{
            height: 4.88rem;
            padding: .4rem;
            position: relative;
           .movie-background{
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            z-index: 0;
            position: absolute;
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: 40%;
           }
           .movie-filter{
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                position: absolute;
                background-color: #40454d;
                opacity: .85;
           }
           .movie-container{
               z-index: 10;
               position: absolute;
               display: flex;
               .img{
                   img{
                       width: 2.906667rem;
                       height: 4.053333rem;
                       border: solid 1px #f0f2f3;
                   }
               }
               .content{
                   width: 5.866667rem;
                   color: #C4C5C7;
                   margin-left: .4rem;
                   .text-ellipsis {
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                   .name{
                       color: #fff;
                       font-size: 17px;
                       margin-bottom: .053333rem;
                       margin-top: .053333rem;
                   }
                   .ename{
                       font-size: .32rem
                   }
                   .wish-num{
                       margin: .133333rem 0;
                       font-size: .4rem;
                       color: #ff9900;
                       span{
                           font-size: .453333rem;
                       }
                   }
                   .common{
                       font-size: .32rem;
                       margin: .08rem 0;
                   }

               }
           }
        }
        .preferential{
            display: block;
            height: .96rem;
            background-color: rgb(229,72,71);
            width: 100%;
            border-radius: .106667rem;
            padding: .213333rem;
            font-size: .426667rem;
            color: #fff;
            text-align: center;
        }
        .story{
            background: #fff;
            // height: auto;
            padding: .3rem .4rem 0;
            margin-bottom: .266667rem;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            .story-description-false{
                color: #555;
                font-size: .4rem;
                height: 1.546667rem;
                overflow: hidden;
            }
            .story-description-true{
                color: #555;
                font-size: .4rem;
                overflow: hidden;
            }
            .text-expander-button{
                margin-top: .213333rem;
                height: .586667rem;
                width: 100%;
                position: relative;
                i{
                   color: #aaa;
                   position: absolute;
                   bottom: 0;
                   left: 162px;
                }
            }
            
        }
        .actor{
            width: 100%;
            height: 5.52rem;
            margin: .266667rem 0;
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            background: #fff;
            .actor-list{
                width: 100%;
                height: 4.32rem;
                padding: .4rem 0 .133333rem .4rem;
                background-color: #fff;
                li{
                    width: 1.733333rem;
                    height: 3.626667rem;
                    img{
                        margin: .053333rem .053333rem .053333rem 0;
                    }
                    span{
                        display: block;
                        font-size: .32rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        // width: .48rem;
                        text-align: center;
                        margin: .133333rem 0;
                    }
                    .person-roles{
                        color: #999;
                    }
                }
            }
            .allRoles{
                width: 100%;
                height: 1.146667rem;
                padding: 0 .4rem;
                line-height: 1.146667rem;
                border-top: 1px solid #e5e5e5;
                color: #bbb;
                position: relative;
                i{
                    position: absolute;
                    right: .533333rem;
                    top: .16rem;
                    color: #aaa;
                }
            }
        }
    }
</style>


