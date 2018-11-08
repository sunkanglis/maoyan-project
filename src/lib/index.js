import Vue from 'vue';

import ajax from '@util/axios';

// filters
import '@util/filters';


// 将其挂载到Vue的原型上，在哪里就都可是使用了
Vue.prototype.$http = ajax;