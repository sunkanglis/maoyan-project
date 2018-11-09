<template>
    <section class="app-login">
        <div class="login-nav">
            <ul>
                <li v-for='(item,i) in types'
                    :key='i'
                    :class="is==item.to? 'active': ''"
                    @click="is = item.to"
                >{{item.title}}</li>
            </ul>
        </div>
         <component :is='is' class="component"></component>
    </section>
</template>
<script>
import MtLogin from './login/MtLogin'
import TelLogin from './login/TelLogin'
export default {
    data(){
        return {
            types:[
                {title:'美团账号登录',to:'MtLogin'},
                {title:'手机验证登录',to:'TelLogin'}
            ],
            is:"MtLogin"
        }
    },
    components:{
        MtLogin,
        TelLogin
    }
}
</script>
<style lang="scss">
    .component{
        background-color: #f8f8f8;
         height: 100%;
    }
    .app-login{
        height: 100%;
        font-size: .373333rem;
    }
    .login-nav{
        width: 100%;
        height: 1.12rem;
        font-weight: 400;
        overflow: hidden;
        ul{
            display: flex;
            height: 100%;
            padding: 0 .266667rem;
            justify-content: space-between;
            border-bottom: .106667rem solid #d6d6d6;
            li{
                line-height: 1.013333rem;
                flex-grow: 1;
                text-align: center;
                position: relative;
            }
            .active{
                color: #df2d2d;
                &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: px;
                    width:47.5vw;
                    height: .106667rem;
                    background-color: #df2d2d;
                    -webkit-transition: left .2s;
                    transition: left .2s;
                }

            }
        }
    }
</style>

