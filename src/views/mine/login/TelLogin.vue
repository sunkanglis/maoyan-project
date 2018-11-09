<template>
    <div class="tel-login">
         <form>
            <ul>
                <li>
                    <input type="tel" v-model='phone' placeholder="请输入手机号" maxlength='11'>
                    <button @click.prevent="sendCode"
                    class="smsCode" :class="isCodeactive?'active':''">{{isResend ? '重发('+resendTime+'s)' : '获取验证码'}}</button>
                </li>
                 <li>
                    <input type="password" placeholder="请输入短信验证码" style="background:#dcdcdc;width:100%">
                </li>
            </ul>
            <div class="tel-btn-wrapper">
                <button type="submit"  class="btn" :class="isactive?'active':''">登录</button>
            </div>
        </form>
        <login-bottom></login-bottom>
    </div>
</template>
<script>
import LoginBottom from '@c/common/app-login/LoginBottom'
export default {
    data(){
        return {
            phone:'15898727885',
            isCodeactive: false,
            isactive: false,
            isResend: false,
            resendTime: 60,
        }
    },
    methods:{
        async sendCode(){
            if(!this.isResend){
                let result = await this.$http({
                url:'/logins/account/custom/mobilelogincode2',
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data:{
                    mobile:this.phone,
                },
                transformRequest: [function (data) {
                    // Do whatever you want to transform the data
                    let ret = ''
                    for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],

            })
            console.log(result);
            }
            this.authCode()
        },
        authCode () { // 验证码处理
            this.isResend = true;
            this.isCodeactive = false
            this.timer = setInterval(() => {
                this.resendTime --
                if ( this.resendTime === 0 ) {
                    clearInterval(this.timer)
                    this.isResend = false
                    this.isCodeactive = true
                    this.resendTime = 60
                }
            },1000)
        }
    },
    watch:{
        phone:{
            immediate: true,
            handler (val) {
                let result = /^1[34578]\d{9}$/.test(this.phone.trim())
                this.isactive = this.isCodeactive=result
            },
           
        }
    },
    components:{
        LoginBottom
    }
}
</script>
<style lang="scss">
    .tel-login{
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
                    font-size: .373333rem;
                    padding: 0;
                    border-radius: .08rem;
                    outline: none;
                    padding-left: .133333rem;
                    &:nth-of-type(1){
                        width: 65%;
                        margin-right: .533333rem;
                    }
                }
                .smsCode{
                    width: 2.666667rem;
                    height: .8rem;
                    background-color: #dcdcdc;
                    border: 0;
                    margin: -0.4rem 0;
                    padding: 0 .4rem;
                    color: #999;
                    border-radius: .08rem;
                    &.active{
                        border: .026667rem solid #df2d2d;
                        background: 0;
                        color: #df2d2d;
                        padding: 0 .266667rem;
                    }
                }
                
            }
        }
        .tel-btn-wrapper{
            margin: .373333rem  .266667rem;
                .btn{
                    width: 100%;
                    height: 1.253333rem;
                    color: #999;
                    border: 0;
                    border-radius: .08rem;
                    font-size: .533333rem;
                    &.active{
                        color: #fff;
                        background-color: #df2d2d;
                    }
                    
                }
        }
    }

</style>