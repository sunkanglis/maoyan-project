<template>
    <div class="app-search">
        <div class="search-header">
            <div class="input-wrapper">
                <img class="search-icon" src="http://s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="">
                <input v-model="kw"  type="text" placeholder="搜影院">
                <img @click="del" class="delBtn" src="http://s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png" alt="">
            </div>
            <router-link tag='div' :to="{name:'cinema'}" class="cancel">取消</router-link>
        </div>
        <div class="search-history" v-if="historyShow">
            <search-history v-for="(item,i) in searcHistory" :key="i" :item='item' :i='i'
                @del='delHistory'
            ></search-history>
        </div>
        <div class="search-result" v-if="cinemaShow" :class="viewAll?'he':''">
            <h3>影院</h3>
            <div class="results" :class="viewAll?'':'results-false'" ref='el'>
                <div>
                    <search-cinema v-for="item in searchResult" :key="item.id" :item='item'></search-cinema>
                    <div style="height:150px"></div>
                </div>
            </div>
            <div class="more-result" @click="viewAll = !viewAll" v-if="!viewAll">查看全部{{total}}加电影院</div>
        </div>
        <div class="not-found" v-if='notFound'>
            <img src="@/img/nothing.png" alt="">
            <p>没有找到相关影院</p>
        </div>
    </div>
</template>
<script>
import SearchCinema from '@c/common/app-search/SearchCinema'
import SearchHistory from '@c/common/app-search/SearchHistory'
import scroll from '@util/scroll';
import _ from 'lodash'
export default {
    data(){
        return {
            kw:'',
            timer:false,
            searchResult:[],
            total:0,
            cinemaShow:false,
            viewAll:false,
            searcHistory:[],
            historyShow:true,
            notFound:false
        }
    },
    watch:{
        kw:{
            handler(val){
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    if(val){
                        this.getSearchCinemas()
                        this.searcHistory.unshift(this.kw);
                        localStorage.search=JSON.stringify(this.searcHistory);
                        this.historyShow = false;
                    }
                },500)
            }
        },
        viewAll:{
            handler(val){
                if(val){
                    this.$nextTick(()=>{
                        this.scroll = scroll({
                            el:this.$refs.el
                        })
                    })
                }
            }
        }
    },
    methods:{
        // 清空输入框
        del(){
            this.kw = '';
            this.cinemaShow = false;
             this.historyShow = true;
        },
        async getSearchCinemas(){
            let cityId = JSON.parse(localStorage.city).cityId
            let result = await this.$http({
                url:'/my/ajax/search',
                params:{
                    kw : this.kw,
                    cityId,
                    stype:2
                }
            })
            if(result.cinemas){
                this.notFound = false;
                this.cinemaShow = true;
                this.searchResult = result.cinemas.list;
                this.total = result.cinemas.total;
            }else{
                this.notFound = true;
                this.historyShow = false;
            }
            
        },
        changeSearchHistory(){
            localStorage.search = JSON.stringify(this.searcHistory)
        },
        // 删除历史记录
        delHistory(index){
            this.searcHistory = _.remove(this.searcHistory,(item,i)=>{
                return i!=index;
            })
            this.changeSearchHistory();
        }
    },
    created(){
        if(!localStorage.search){
            localStorage.search = JSON.stringify([]);
        }
        else{
            this.searcHistory = JSON.parse(localStorage.search)
        }
    },
    components:{
        SearchCinema,
        SearchHistory
    }
}
</script>
<style lang="scss">
    .he{height: 100%;}
    .app-search{
        background-color: #f5f5f5;
        height: 100%;
        .search-header{
            width: 100%;
            height: 1.253333rem;
            border-bottom: 1px solid rgb(229, 229, 229);
            padding: .213333rem 0 .213333rem .266667rem;
            display:flex;
            justify-content: space-between;
            .input-wrapper{
                flex-grow: 1 ;
                padding: 0 .266667rem;
                border: 1px solid #e6e6e6;
                border-radius: 5px;
                background-color: #fff;
                .search-icon{
                    width: .4rem;
                    height: .4rem;
                    margin-right: .16rem;
                    float: left;
                    position: relative;
                    top: .16rem;
                }
                input{
                    border: none;
                    font-size: .346667rem;
                    color: #333;
                    line-height: .533333rem;
                    padding: .106667rem 0;
                    outline: none;
                    width: calc(100% - 1.066667rem)
                }
                .delBtn{
                    position: relative;
                    width: .4rem;
                    height: .4rem;
                    float: right;
                    top: .16rem;
                }
            }
            .cancel{
                height: .8rem;
                line-height: .8rem;
                padding: 0 .266667rem;
                font-size: .426667rem;
                color: #f03d37;
            }
        }
        .search-history{
            background-color: #fff;
            width: 100%;
            max-height: 7.146667rem;
            overflow: hidden;
        }
        .search-result{
            width: 100%;
            background-color: #fff;
            h3{
                font-size: 15px;
                color: #999;
                padding: 9px 15px;
            }
            .results{
                height: 100%;
                border-bottom: 1px solid #e6e6e6;
                border-top: 1px solid #e6e6e6;
                overflow: hidden;
                &.results-false{
                    height: 8.693333rem;
                }
            }
            .more-result{
                text-align: center;
                line-height: 1.173333rem;
                height: 1.173333rem;
                font-size: .4rem;
                color: #ef4238;
            }
        }
        .not-found{
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                margin-top: 4.4rem;
                margin-bottom: .4rem
            }
            p{
                font-size: .426667rem;
                color: #999;
            }
        }
    }
</style>

