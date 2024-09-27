const num=12356.12
console.log(num, typeof(num))
const n2=123456789
const n=new Number(453)
console.log(n)

console.log(n.toFixed(3));
console.log(num.toPrecision(5))
console.log(n2.toLocaleString('en'))
console.log(n2.toLocaleString('en-IN'))
console.log(n.toString().length,typeof(n))


//Math
const n3=12.3
console.log(Math.floor(n3))
console.log(Math.ceil(n3))
console.log(Math.round(n3))
console.log(Math.min(n3,23,45,1,2))
console.log(Math.max(n3,23,45,1,2))
console.log(Math.PI)
console.log(Math.floor((Math.random() *10)+1))

const min=15;
const max=25;
console.log(Math.floor((Math.random()*(max-min))+min+1) )

