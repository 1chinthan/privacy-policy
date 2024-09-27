/* Stack(Primitive data types) original remains same*/

let oneName="Hardhik"
let twoName=oneName
twoName="chinthan"
console.log(oneName)
console.log(twoName)

/* Heap(Non-Primitive data types) changes the original  */ 

const one={
    name:"hardhik",
    age:12
}

const two=one;
two.age=45;

console.log(one.age)
console.log(two.age)