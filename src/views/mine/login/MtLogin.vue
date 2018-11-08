<template>
    <div class="mt-login">
        <form>
            <ul>
                <li>
                    <input type="text" placeholder="账户名/手机号/Email">
                </li>
                 <li>
                    <input type="text" placeholder="请输入您的密码">
                </li>
            </ul>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.mt-login{
    ul{
        padding-left: .266667rem;
        li{
            input{
                width: 100%;
                height: .8rem;
                border: 0;
            }
        }
    }
}
   
</style>


