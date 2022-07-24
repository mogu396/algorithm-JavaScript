function generateRandomArray(num, bound) {
    // num is Array's length, bound is Random border
    if (typeof num !== "number") {
        throw new Error("the params of num is not a number")
    }
    const arr = new Array(num)

    // 正负数
    let flag = 1

    for (let i = 0; i < arr.length; i++) {
        const num = Math.random()
        if(num < 0.5) {
            flag = -1
        } else {
            flag = 1
        }
        num < 0.2 ? flag = -1 : flag = 1 

        arr[i] = Math.floor(flag * num * bound)
    }

    return arr
}