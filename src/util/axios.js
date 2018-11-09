import axios from 'axios';


const ajax = (options) => {
    let _react = options.react === undefined ? true : options.react;
    return axios(options)
        .then(res => {
            return res.data;     
        })
        .catch(err => {
            console.log('数据请求失败')
            return err
            
        })
    
}

export default ajax