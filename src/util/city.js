const city = (cities) => {
    let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let obj = {};
    arr.forEach(item => obj[item] = []);
    cities.forEach(item => {
        let word = item.py.substr(0,1).toUpperCase();
        obj[word].push(item);
    })
    for(const key in obj){
        if( !obj[key].length ){
            delete obj[key]
        }
    }
    return obj;
}

export { city }
