// Immediately Invoked Function Expressions (IIFE) used to avoid global pollution 


//()();  first brace is where the function is written and the second one is to execute immediately, semicolon(;) is must to stop the execution
let a=12;

(function two()
{
    console.log(a)
})();
a=56;

(function one(name)
{
    console.log(name);
})('hardhik');


(()=>{
    console.log('chinthan')
})();