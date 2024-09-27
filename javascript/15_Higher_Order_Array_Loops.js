const str="hardhik"
for(const c of str)
{
   // console.log(c)
}

const map=new Map();
map.set(1,"hardhik")
map.set(2,"hk")
map.set(3,"hik")

for(const c of map.keys())
{
    //console.log(c)
}

for(const [key,val] of map)
{
   // console.log(key, val)
}

// to iterate objects

const obj1={
    name:"hardhik",
    id:2,
    mail:"123@gmail.com"
}

for(const c in obj1)
{
    console.log(c, obj1[c])
}

const arr1=['har','dhik','chi','ntha','n']
arr1.forEach((item)=>{
    console.log(item)
})