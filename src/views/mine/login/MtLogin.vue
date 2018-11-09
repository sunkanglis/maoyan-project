<template>
    <div class="mt-login">
        <form>
            <ul>
                <li>
                    <input type="text" placeholder="账户名/手机号/Email">
                </li>
                 <li>
                    <input type="password" placeholder="请输入您的密码">
                </li>
            </ul>
            <div class="mt-btn-wrapper">
                <button type="submit"  class="btn ">登录</button>
            </div>
        </form>
        <login-bottom></login-bottom>
    </div>
</template>
<script>
import LoginBottom from '@c/common/app-login/LoginBottom'
export default {
    components:{
        LoginBottom
    }
}
</script>
<style lang="scss">
.mt-login{
    ul{
        padding-left: .266667rem;
        height: 2.306667rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        li{
            flex-grow: 1;
            padding: .373333rem .266667rem .373333rem 0;
            border-bottom: 1px solid #d6d6d6;
            overflow: hidden;
            font-weight: 400;
            input{
                width: 100%;
                height: .8rem;
                border: 0;
                margin: -0.4rem 0;
                font-size: .4rem;
                padding: 0;
                outline: none;
                padding-left: .133333rem;
            }
        }
    }
    .mt-btn-wrapper{
        margin: .373333rem  .266667rem;
        .btn{
            width: 100%;
            height: 1.253333rem;
            color: #fff;
            border: 0;
            background-color: #df2d2d;
            border-radius: .08rem;
            font-size: .533333rem;
        }
    }
}
   
</style>


