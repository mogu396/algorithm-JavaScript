function checkSort(arr) {
    if(!Array.isArray(arr)){
        throw new Error('params of arr is not an Array')
    }
    for (let i = 0; i < arr.length; ++i) {
        if(arr[i] - arr[i+1] > 0){
            return false
        }
    }
    return true
}