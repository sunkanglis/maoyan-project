

export default {
    methods:{
        login(){
            let obj = {
                phone:this.phone,
                date:new Date().toLocaleString(),
            }
            localStorage.setItem("userInfo",JSON.stringify(obj));
            
            this.$router.replace({name: 'mine'})
        }
    }
}