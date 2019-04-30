function strToArray(str) {

    var arr = str.split(',')

    var result = []
    for(let i = 0; i <= arr.length-1; i++) {
        result.push(arr[i].split(''))
    } 

    return result
}

console.log(strToArray('aqrst,ukaei,ffooo'))