const array=[1,2,3,4,5]
console.log(array)

console.log(array.length)

//push nd pop at the end
array.push(6)
console.log(array)
array.pop()
console.log(array)


//unshift(add) nd shift(remove) at the begining

array.unshift(7)
console.log(array)
array.shift()
console.log(array)

let newArr=new Array(6,7,8,9,10); //string type
console.log(newArr.join(array))

//slice and splice

const arr=new Array(0,1,2,3,4,5)


const sliceArr=arr.slice(1,3)
console.log("Slice array ",sliceArr)  // does not change the original array
console.log("original ",arr)


const spliceArr=arr.splice(1,3)
console.log("Splice array ",spliceArr) // changes the original array
console.log("original ",arr)



//concat ,spread, flat

const arr1=["hardhik","chinthan","p"]
const arr2=["amazon","to","sell"]

const arr3=arr1.concat(arr2)
console.log(arr3);

console.log([...arr1,...arr2])

const arr4=[1,2,3,[4,5,[6,[7,8],9]]]
console.log(arr4.flat(Infinity))


//isArray ,from ,of

console.log(Array.isArray(arr4))
console.log(Array.from("Hardhik"))  //converts to array(mostly String to character Array)
console.log(Array.of("Hardhik","chinthan",1,2,3,4,5,6,7,6,9))  //converts to array





