function sortHelper(sortFunc, arr) {
    const start = new Date().valueOf()
    sortFunc(arr)
    const end = new Date().valueOf()
    console.log(`${sortFunc.name} cost time is: ${(end - start)/1000}s`)
    console.log(arr);
}