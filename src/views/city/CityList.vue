<template>
    <div class="app-city-content">
        <mt-index-list>
            <mt-index-section index="定位">
                <div class="potition-city">
                    <p class="fail">{{chunks.city.cityName}}</p>
                </div>
            </mt-index-section>
            <mt-index-section index="最近">
                <div class="potition-city">
                    <p class="fail" v-for="recent in recentCities" :key="recent.id"
                        @click="changeCity(recent)"
                    >{{recent.nm}}</p>
                </div>
            </mt-index-section>
            <mt-index-section index="热门">
                <div class="potition-city" style="height: 5.333333rem;">
                    <p class="fail" v-for='hot in hotCities' :key="hot.id"
                        @click="changeCity(hot)"
                    >{{hot.nm}}</p>
                </div>
            </mt-index-section>
            <mt-index-section v-for="(value,key) in cities" :index='key' :key="key">
                <mt-cell v-for="item in value" :key='item.id' :title="item.nm"
                    @click.native="changeCity(item)"
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>

import { IndexList, IndexSection, Cell  } from 'mint-ui';
import { city } from '@util/city';
import { mapState } from 'vuex';
import { CHANGE_CITY } from '@/store/chunks/mutation-type'
export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    data() {
        return {
            recentCities: [
                {id:'1',nm:'北京'},
                {id:'10',nm:'上海'},
                {id:'59',nm:'成都'},
            ],
            hotCities:[
                {id:'10',nm:'上海'},
                {id:'20',nm:'广州'}, 
                {id:'1',nm:'北京'},
                {id:'57',nm:'武汉'},
                {id:'40',nm:'天津'},
                {id:'42',nm:'西安'},
                {id:'55',nm:'南京'},
                {id:'50',nm:'杭州'},
                {id:'59',nm:'成都'},
                {id:'45',nm:'重庆'},
            ],
        }
    },
    computed:{
        ...mapState(['chunks']),
        cities(){
            return city(this.chunks.cities);
        }
    },
    beforeCreate(){
        this.$store.dispatch({type:'chunks/getCurrentPosition'})
    },
    methods:{
        changeCity({id:cityId,nm:cityName}){
            this.$store.commit({
                type:'chunks/'+CHANGE_CITY,
                city:{
                    cityId,
                    cityName  
                }
            })
            this.$router.push({name: 'cinema'})
        }
    }
}
</script>
<style lang="scss">
    .app-city-content {
        .mint-indexlist{
            .mint-indexlist-content{
                margin-right: 0!important;
                .mint-indexsection{
                    .mint-indexsection-index{
                        background-color: #ebebeb;
                        padding: 0 .666667rem;
                        font-size: 14px;
                        line-height: .8rem;
                        color: #333;
                    }
                    ul{
                        
                        background-color: #f5f5f5;
                        .mint-cell{
                            background-color: #f5f5f5;
                            .mint-cell-wrapper{
                                height: 44px;
                                line-height: 44px;
                                padding: 0 .666667rem 0 0;
                                margin-left: .4rem;
                                // border-bottom: 1px solid #c8c7cc;
                                font-size: 14px;
                                color: #333;
                            }
                        }
                        .potition-city{
                            height: 1.493333rem;
                            background-color: #f5f5f5;
                            overflow: hidden;
                            width: 9.466667rem;
                            .fail{
                                width: 2.266667rem;
                                border: 1px solid #e6e6e6;
                                border-radius: 3px;
                                line-height: 33px;
                                text-align: center;
                                box-sizing: border-box;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                height: 33px;
                                margin-top: 15px;
                                margin-left: 4%;
                                background: #fff;
                                font-size: 14px;
                                color: #333;
                                float: left;
                            }
                            .now{
                                width: 2.666667rem;
                                border: 1px solid #e6e6e6;
                                border-radius: 3px;
                                line-height: 33px;
                                text-align: center;
                                box-sizing: border-box;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                height: 33px;
                                margin-top: 15px;
                                margin-left: 4%;
                                background: #fff;
                            }
                        }
                    }
                }
            }
            .mint-indexlist-nav{
                width: auto;
                background-color: #ebebeb;
                .mint-indexlist-navitem{
                    padding: .053333rem .08rem;
                }
            }
        }
        .mint-cell-text{
            display: inline-block;
            width: 5.333333rem;
        }
    }
</style>