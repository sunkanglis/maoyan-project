
const authLogin = () =>{
    let user_info = JSON.parse(localStorage.getItem('userInfo') || '{}')

    return user_info
}

export default {
    authLogin
}