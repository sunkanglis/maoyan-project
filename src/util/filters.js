import Vue from 'vue';

Vue.filter('tochange',(value)=>{
    // if (!value) return ''
    // value = value.toString();
    return value.replace(/w.h/,'128.180');
})