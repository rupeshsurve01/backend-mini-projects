// alert('')

arr = [1,2,3,4]

arr.forEach(function(val){
    console.log(val)
})

let arraymap = arr.map((val)=>{
    return val*4
})

console.log(arraymap)

let arrayfilter = arr.filter((val)=>{
    if(val >= 3){
        return true
    }
})

console.log(arrayfilter)

var ans = arr.find((val)=>{
    if(val == 3){
        return val
    }
})
console.log(ans)

var ans = arr.find((val)=>{
    if(val == 2){
        return arr.indexOf(2)
    }
})
console.log(ans)