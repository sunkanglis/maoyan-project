<template>
    <div class="result-item">
        <div class="item">
            <div class="info">
                <p class="name-price">
                    <span class="name one-line">{{item.nm}}</span>
                    <span class="sell-price">
                        <span class="price">{{item.sellPrice}}</span>
                        元起
                    </span>
                </p>
                <p class="address one-line">{{item.addr}}</p>
                <p class="feature-tags">
                    <span v-if="item.sell">座</span>
                    <span v-if="item.allowRefund == 1">退</span>
                    <span v-if="item.endorse == 1">改签</span>
                    <span v-if="item.hallType" 
                        v-for="(hall,i) in item.hallType" :key="i"
                    >{{hall}}</span>    
                    <span class="featrue" v-if="item.snack == 1">小吃</span>
                    <span class="featrue" v-if="item.vipDesc">折扣卡</span>
                </p>
            </div>
            <div class="distance">{{item.distance}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>
<style lang="scss">
    
    .result-item{
        width: 100%;
        padding: .4rem .4rem 0 .4rem;
        .item{
            width: 100%;
            border-bottom: 1px solid rgb(230, 230, 230);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: .4rem;
            .one-line{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .info{
                flex: 1;
                overflow: hidden;
                .name-price{
                    font-size: .426667rem;
                    color: #000;
                    margin-bottom: .16rem;
                    display: flex;
                    .sell-price{
                        font-size: .293333rem;
                        color: #999;
                        white-space: nowrap;
                        margin-left: .266667rem;
                        .price{
                            font-size: .453333rem;
                            color: #ef4238;
                        }
                    }
                }
                .address{
                    font-size: .346667rem;
                     color: #999;
                }
                .feature-tags{
                    margin-top: .186667rem;
                    span{
                        border: 1px solid #589daf;
                        color: #589daf;
                        position: relative;
                        display: inline-block;
                        padding: 0 .08rem;
                        height: .453333rem;
                        line-height: .453333rem;
                        border-radius: .053333rem;
                        font-size: .32rem;
                        margin-left: .106667rem;
                    }
                    .featrue{
                        color: #f90;
                        border-color: #f90;
                    }
                }
            }
            .distance{
                font-size: .346667rem;
                color: #999;
            }
        }
    }
</style>


