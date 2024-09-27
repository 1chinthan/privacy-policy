//singlton (when objects are created with constructors)
//ojects are also created using Object.create()
// object literals
const sym1=Symbol('key1')
const obj1={
    name:"hardhik",
    age:21,
    location:"Madikeri",
    [sym1]:45,
    loggedIn:true,
    prev:[1,2,"Monday"]
}
//two ways to access
console.log(obj1.age)
console.log(obj1["age"])
//another way to access using Symbols

console.log(typeof obj1[sym1])

obj1.email="hardhik@gmail"
console.log(obj1)

Object.freeze(obj1);// prevents addition and modification of existing or new attributes
obj1.email='chinthan@gmail' //   does not show error , but no new modification
console.log(obj1)

const obj2={
    1:'a',
    2:{
        3:'b'
    }
}

const obj3={
    4:'c',
    5:'d'
}

const obj4={...obj2,...obj3}
console.log(obj4)
const obj5=Object.assign({},obj2,obj3)  // assign(target,source1,source2)
console.log(obj5)

console.log(Object.keys(obj1))  // keys in array



console.log(Object.values(obj1)) // values in array
console.log(Object.entries(obj1)) // key value pair in form of arrays
console.log(Object.hasOwnProperty("name"))  //checks if object contains particular key

const {name:Name,location:Loc}=obj1
console.log(Name,Loc)


