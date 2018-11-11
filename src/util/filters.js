import Vue from 'vue';

Vue.filter('tochange128',(value)=>{
    // if (!value) return ''
    // value = value.toString();
    return value.replace(/w.h/,'128.180');
})

Vue.filter('tochange170',(value)=>{
    // if (!value) return ''
    // value = value.toString();
    return value.replace(/w.h/,'170.230');
})

// Vue.filter('tochange177',(value)=>{
//     // if (!value) return ''
//     // value = value.toString();
//     return value.replace(/w.h/,'177.249');
// })