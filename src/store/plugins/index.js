import { CHANGE_CITY } from '../chunks/mutation-type';

const saveCityInStorage = store =>{ // 当store初始化后调用
     // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    store.subscribe((mutation,state)=>{
        // 如果这次提交是要更改city,就将更改后的city保存在localStorage中
        if(mutation.type === 'chunks/'+CHANGE_CITY ){
            if(mutation.payload.cities){
                localStorage.cities = JSON.stringify(mutation.payload.cities)
            }
            localStorage.city = JSON.stringify(mutation.payload.city)
        }
    })

}

export { saveCityInStorage }