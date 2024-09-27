function add(num1,num2)
{
    return num1 + num2
}

console.log(add(12, 78))

function name(nam="sam")   // default
{
    console.log(nam)
}

name()
name("hardhik")

function add2(...nums)   //rest operator (used when many values passed to a few args)
{
    return nums
}

console.log(add2(1,2,3,4,5))

function handleObj(obj1)
{
    return obj1.name;
}

const obj1={
    name:"hardhik",
    id:1
}

console.log(handleObj(obj1))

const arr=[12,23,45,56]

function handleArr(arr)
{
    return arr[3]
}
console.log(handleArr(arr))


