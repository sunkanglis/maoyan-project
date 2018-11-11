<template>
    <div class="my-cinmea">
        <div class="nav">
            <div class="topbar">
                <span>北京 <i class="fa fa-sort-desc"></i> </span>
                <input type="text">
                <div class="search-tip">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
                    搜影院
                </div>
            </div>
            <div class="toptab">
                <div class="item region" >全城 <i class="fa fa-sort-desc"></i> </div>
                <div class="item brand">品牌 <i class="fa fa-sort-desc"></i> </div>
                <div class="item special">特色 <i class="fa fa-sort-desc"></i> </div>
            </div>
        </div>
        <div class="content" ref="root">
            <ul>
                <cinema-item v-for="cinema in cinemas" :key="cinema.id" :cinema='cinema'></cinema-item>
            </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from '@c/layout/AppFooter';
import CinemaItem from '@c/common/app-cinema/CinemaItem';
import scroll from '@util/scroll';
export default {
    data(){
        return {
            cinemas:[],
            offset:0,
        }
    },
    created(){
        this.getCinmeas()
    },
    methods:{
        async getCinmeas(){
            let result =await this.$http({
                url:'/my/ajax/cinemaList',
                params:{
                    day:'2018-11-10',
                    offset:this.offset,
                    limit:'20',
                    districtId:'-1',
                    lineId:'-1',
                    hallType:'-1',
                    brandId:'-1',
                    serviceId:'-1',
                    areaId:'-1',
                    stationId:'-1',
                    item:'',
                    updateShowDay:'false',
                    reqId:'1541854996471',
                    cityId:'1'
                }
            })
            this.cinemas = this.cinemas.concat(result.cinemas);
            this.offset +=20;
        }
    },
     mounted(){
        this.scroll = scroll({
            el : this.$refs.root,
            handler: this.getCinmeas.bind(this),
        })
    },
    components:{
        AppFooter,
        CinemaItem
    }
}
</script>
<style lang="scss">
    .my-cinmea{
        height: 100%;
        overflow: hidden;
        .nav{
            width: 100%;
            position: fixed;
            z-index: 101;
            .topbar{
                width: 100%;
                height: 1.173333rem;
                background-color: #f5f5f5;
                display: flex;
                align-items: center;
                justify-content: space-around;
                span{
                    font-size: .4rem;
                    color: #666;
                    position: relative;
                    i{
                        position: absolute;
                        top: 1px;
                        left: .906667rem;
                    }
                }
                input{
                    width: 7.466667rem;
                    border-radius: .133333rem;
                    border: .026667rem solid rgb(230, 230, 230); 
                    height: .773333rem;
                    position: relative;
                }
                .search-tip{
                    position: absolute;
                    font-size: .346667rem;
                    color: #b2b2b2;
                    left: 4.933333rem;
                    img{
                        height: .373333rem;
                        width: .373333rem;
                    }
                }
            }
            .toptab{
                width: 100%;
                height: 1.066667rem;
                border-bottom: 1px solid #e8e8e8;
                display: flex;
                align-items: center;
                background-color: #fff;
                .item{
                    flex: 1 1;
                    text-align: center;
                    color: #777;
                    font-size: .346667rem;
                    position: relative;
                    i{
                        position: absolute;
                        top: 1px;
                        left: 2.16rem;
                    }
                }
                .brand::before,.special::before{
                    content: "";
                    display: block;
                    position: absolute;
                    height: 20px;
                    top: 0px;
                    left: 0;
                    border-left: 1px solid #e8e8e8;
                }
            }
        }
        .content{
            height: 12.933333rem;
            margin-top: 2.24rem;
        }
    }
</style>

