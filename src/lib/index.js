import Vue from 'vue';

import ajax from '@util/axios';

// filters
import '@util/filters';

// mint-ui 组件库
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

// 将其挂载到Vue的原型上，在哪里就都可是使用了
Vue.prototype.$http = ajax;