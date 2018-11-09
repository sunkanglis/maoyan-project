<template>
    <li class="expected-item">
        <div class="default-img-bg">
            <img :src="info.img | tochange170">
            <span class="wish"><span class="wish-num">{{info.wish}}</span>人想看</span>
            <div class="toggle-wish" >
                <span></span>
            </div>
        </div>
        <h5 class="name line-ellipsis">{{info.nm}}</h5>
        <p class="date">{{info.comingTitle}}</p>
    </li>
</template>
<script>
export default {
    props:['info'],
}
</script>
<style lang="scss">
    .expected-item{
        width: 2.266667rem;
        overflow: hidden;
        margin-right: .4rem;
        .default-img-bg{
            width: 2.266667rem;
            height: 3.066667rem;
            position: relative;
            margin-bottom: .16rem;
            img{
                width: 2.266667rem;
                height: 3.066667rem;
            }
        }
        .wish{
            position: absolute;
            left: .106667rem;
            bottom: .053333rem;
            color: #faaf00;
            font-size: .293333rem;
            font-weight: 600;
        }
        .toggle-wish{
            width: 28px;
            line-height: 28px;
            background: rgba(61,63,71,.6);
            text-align: center;
            border-bottom-right-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            span{
               display: inline-block;
                width: 10px;
                height: 10px;
                background-size: 100%;
                background-repeat: no-repeat;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=)
            }
        }
        .name{
            margin: 0 0 .08rem;
            font-size: .346667rem;
            color: #222;
            font-weight: 700;
        }
        .line-ellipsis{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .date{
            margin: 0;
            font-size: .32rem;
            color: #999;
        }
    }
</style>
