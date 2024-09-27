
//filter
const arr=[1,2,3,4,5,6,7,8,9];
const a=arr.filter((item)=>{
    if(item!=5)
    return item;

})
console.log(a)

//map
const b=arr.map((item)=>item *10)
console.log(b)

//chaining

const c=arr.map((item)=>
    {
       return item+11
    }).map((item)=>{
        return item*10
    }).filter((item)=>{
        
            return item!=130
    })

console.log(c)

const d=arr.reduce((acc,item)=>{
    return acc+item;
})
console.log();
