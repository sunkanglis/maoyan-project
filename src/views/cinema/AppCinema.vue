<template>
    <div class="my-cinmea">
        <div class="nav">
            <div class="topbar">
                <router-link tag='span' :to="{name:'city'}">{{chunks.city.cityName}} 
                    <i class="fa fa-sort-desc"></i> 
                </router-link>
                <router-link tag='div' :to="{name :'search'}">
                    <input type="text" style="padding-left:5px">
                </router-link>
                <div class="search-tip">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
                    搜影院
                </div>
            </div>
            <div class="toptab">
                <div class="item region" >全城 <i class="fa fa-sort-desc"></i> </div>
                <div class="item brand" @click="isBrandShow = !isBrandShow" :class="isBrandShow?'active':''">
                    品牌
                    <i class="fa" :class="isBrandShow?'fa-sort-asc':'fa-sort-desc'"></i>
                </div>
                <div class="item special">特色<i class="fa fa-sort-desc"></i> </div>
            </div>
            <div class="tab-content" v-show="isBrandShow" >
                <div class="wrapper" style="height:100%" ref="tabRoot">
                <div class="brand" >
                    <div class="brand-item"
                        v-for="brand in brands.subItems"
                        :key='brand.id'
                        @click="brandId = brand.id;isBrandShow = !isBrandShow"
                    > 
                        <span class="brand-name">{{brand.name}}</span>
                        <span class="brand-num">{{brand.count}}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="blacker" v-if="isBrandShow" @click="isBrandShow = !isBrandShow"></div>
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
import {mapState} from 'vuex';
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            filterCinemas:{},
            cinemas:[],
            offset:0,
            isBrandShow:false,
            brandId:'-1'
        }
    },
    watch:{
        // 监听isShow 只有当隐藏的dom元素出现后才能正确初始化 better-scroll
        isShow:{
            handler(val){
               if(val){
                    this.$nextTick(()=>{
                        this.scrollNav = scroll({
                            el:this.$refs.tabRoot
                        })
                     })
               }else{
                   this.scrollNav = null;
               }
            }
        },
        
        brandId:{
            handler(){
                this.cinemas = [];
                this.offset = 0;
                this.getCinmeas()
            }
        },
        cinemas:{
            handler(){
                this.$nextTick(()=>{
                    Indicator.close();
                })
            }
        }
    },
    beforeCreate(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle',
            spinnercolor: '#e54847'
        });
    },
    created(){
        this.getCinmeas()
        this.getFilterCinemas()
    },
    computed:{
        brands(){
            if(this.filterCinemas.brand){
                return this.filterCinemas.brand;
            }
            return {}
        },
        ...mapState(['chunks'])
    },
    methods:{
        // 获取影院数据
        async getCinmeas(){
            let result =await this.$http({
                url:'/my/ajax/cinemaList',
                params:{
                    day:'2018-11-13',
                    offset:this.offset,
                    limit:'20',
                    districtId:'-1',
                    lineId:'-1',
                    hallType:'-1',
                    brandId:this.brandId,
                    serviceId:'-1',
                    areaId:'-1',
                    stationId:'-1',
                    item:'',
                    updateShowDay:'false',
                    reqId:'1541854996471',
                    cityId:this.chunks.city.cityId
                }
            })
            this.cinemas = this.cinemas.concat(result.cinemas);
            this.offset +=20;
        },
        // 获取过滤分类后电影数据
        async getFilterCinemas(){
            let result = await this.$http({
                url:'/my/ajax/filterCinemas',
                params:{
                    ci: this.chunks.city.cityId,
                }
            })
            this.filterCinemas = result;
        }
        
    },
    mounted(){
         // 影院主体——bettter-scroll
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
                        &.fa-sort-asc{
                            top: 6px;
                        }
                    }
                    &.active{
                        color: #e54847;
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
            .tab-content{
                width: 100%;
                height: 9.333333rem;
                // height: 100%;
                background-color: #fff;
                overflow: hidden;
                .brand{
                    .brand-item{
                        height: 45px;
                        padding: 0 30px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        .brand-name{
                            font-size: .4rem;
                        }
                        .brand-num{
                            font-size: .32rem;
                            color: #8f9296;
                           
                        }
                        &:nth-of-type(1){
                            color: #e54847;
                             .brand-num{
                                 color: #e54847;
                            }
                            &:before{
                                    content: "";
                                    display: block;
                                    position: absolute;
                                    left: 8px;
                                    top: 18px;
                                    width: 11.5px;
                                    height: 8px;
                                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==);
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                            }
                        }
                    }
                }
            }
        }
        .content{
            height: 12.933333rem;
            margin-top: 2.24rem;
        }
        .blacker{
            z-index: 99;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0,0,0,.3);
        }
    }
</style>

