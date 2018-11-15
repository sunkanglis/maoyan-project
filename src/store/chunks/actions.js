import http from '@util/axios';

import cityData from '@/mock/cities'
import _ from 'lodash'

import {
    CHANGE_CITY
} from './mutation-type'

export default {
    async getCurrentPosition (context){
        let cityId = 1;
        let cityName = '北京';

        // 先去获取所有城市信息
        let cities = cityData.data;

        // 定位当前城市
        let result = await http({
            url : '/bd/location/ip',
            params:{
                ak:'e3Yxl2aQcW7Br965vj1HRwUniEGGoCwB'
            }
        })
        if(result){
            cityName = result.content.address.replace('市','');
            cityId = _.find(cities,(city)=>city.nm === cityName  ).id
        }
        context.commit({
            type:CHANGE_CITY,
            city:{cityId,cityName},
            cities
        })

    }

}