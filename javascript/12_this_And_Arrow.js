// this keyword reference to current obj 

const user={
    username:"hardhik",
    hello: function()
    {
        console.log(` ${this.username}`)
        console.log(this)
    }
}
console.log(this)

function one()
{
    console.log(this)
}

one()

const hello=()=>{
    console.log('hello')
}
hello()