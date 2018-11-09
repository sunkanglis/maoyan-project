<template>
    <div class="movie-detail">
        <div class="movie-header">
            <div class="movie-background" style="background-image: url(http://p0.meituan.net/177.249/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg);"></div>
            <div class="movie-filter"></div>
            <div class="movie-container" >
                <div class="img">
                    <img src="//p1.meituan.net/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg@177w_249h.webp" alt="">
                </div>
                <div class="content">
                    <div class="name text-ellipsis">毒液：致命守护者</div>
                    <div class="ename text-ellipsis">Vemosn</div>
                    <div class="wish-num text-ellipsis"><span>391725</span>人想看</div>
                    <div class="common text-ellipsis">动作,惊悚,科幻</div>
                    <div class="common text-ellipsis">美国/107分钟</div>
                    <div class="common text-ellipsis">2018-11-09大陆上映</div>
                </div>
            </div>
        </div>
        <div style="background: #fff;
            height:1.36rem;
            padding: .4rem .4rem 0;">
            <span class="preferential">特惠购票</span>
        </div>
        
        <div class="story">
            
        </div>
    </div>
   
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .movie-detail{
        background-color: rgb(247, 245, 245);
        width: 100%;
        height: 100%;
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
                       margin-top: .266667rem;
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
            height: 80px;
            padding: .4rem .4rem 0;
            margin-bottom: .266667rem;
            
        }
    }
</style>


