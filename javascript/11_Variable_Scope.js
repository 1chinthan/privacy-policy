// {} is scope

let a=10; //globally declared
const b=20;//globally declared
var c=30;//globally declared

if(true)
{
    var c=45;  // inside  scope
    let a=45;
    console.log(`inner a: ${a}`)
}

console.log(c)  // the variable declared inside scope overrides the global variable only in case of var(var)
console.log(a)



function one()
{
    const user="hardhik"
    function two(){
        const name="chinthan"
        console.log(user);
        
    }
    /* console.log(name) */  // fun one cannot access variable user  (same in case of if else)
    two()
}
one()



//hoisting 

console.log(addOne(5))

function addOne(num)
{
    return num+3
}


console.log(addTwo(6))

const addTwo= function(num)    // depends on where the function is being called (hoisting)
{
    return num+2
}