<template>
    <div id="mine">
        <div class="mine-header">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2857436008,2454994377&fm=26&gp=0.jpg" alt="">
            <div class="userName">{{name}}</div>
        </div>
        <div class="mine-orders">
            <div class="title">我的订单</div>
            <div class="mb-outline-b title-line"></div>
            <div class="list">
                <div class="order-item movie">
                    <div><p>电影</p></div>
                </div>
                <div class="order-item order">
                    <div><p>订单</p></div>
                </div>
            </div>
        </div>
        <div class="mine-tb">
            <div class="item" v-for="tb in tbs" :key="tb.id">
                <span>{{tb.title}}</span>
                <i class="fa  fa-angle-right fa-lg"></i>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from '@c/layout/AppFooter';
export default {
    data(){
        return {
            name : 'name',
            tbs:[
                {id:1,title:'在线观影'},
                {id:2,title:'优惠券'},
                {id:3,title:'折扣卡'},
            ]
        }
    },
   created(){
        this.name = JSON.parse(localStorage.userInfo).phone
    },
    components:{
        AppFooter
    }
}
</script>
<style lang="scss">
@import '../../css/particles/variable' ;
    #mine{
        background-color: #f7f5f5;
        height: 100%;
        .mine-header{
            width: 100%;
            height: 4rem;
            background-color: $base-bg-color;
            text-align: center;
            img{
                display: inline-block;
                margin-top: .8rem;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                border: 3px solid #fff;
            }
            .userName{
                color: #fff;
                margin-top: .266667rem;
                font-size: .373333rem
            }
        }
        .mine-orders{
            width: 100%;
            height: 3.973333rem;
            margin-top: .266667rem;
            background-color: #fff;
            padding: 0 .4rem;
            text-align: center;
            position: relative;
            box-shadow: 0 0 2px rgb(216, 216, 216);
            .title{
                position: relative;
                margin: .346667rem 0 0;
                font-size: .4rem;
                line-height: .56rem;
                height: .56rem;
                color: #333;
                z-index: 9;
                display: inline-block;
                width: 2.133333rem;
                background-color: #fff;
            }
            .title-line{
                position: absolute;
                top: .613333rem;
                left: 50%;
                margin-left: -2.133333rem;
                width: 4.266667rem;
                height: 1px;
                background-size: 1px 1px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
            }
            .list{
                margin-top: .48rem;
                display: flex;
                .order-item{
                    height: 2.586667rem;
                    flex: 1 1;
                    background-repeat: no-repeat;
                    background-position: top;
                    background-size: 1.12rem auto;
                    p{
                        margin-top: 1.413333rem;
                        font-size: .4rem
                    }
                }
                .movie{
                    background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png)
                }
                .order{
                    background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png)
                }
            }
        }
        .mine-tb{
            margin-top: .266667rem;
            background-color: #fff;
            width: 100%;
            height: 3.52rem;
            padding: 0 .4rem;
            box-shadow: 0 0 2px rgb(216, 216, 216);
            .item{
                height: 1.173333rem;
                line-height: 1.173333rem;
                display: flex;
                justify-content: space-between;
                font-size: .4rem;
                color: #333;

                i{
                    margin-top: .4rem;
                    color:#b2b2b2;
                }
                &:nth-of-type(1),&:nth-of-type(2){
                    border-bottom: 0.5px solid rgb(216, 216, 216);
                   
                }
                
            }
        }
    }

</style>

