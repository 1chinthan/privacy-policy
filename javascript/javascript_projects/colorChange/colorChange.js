const color=document.querySelectorAll('.colors')
console.log(color)
const bd=document.body;

color.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      switch(e.target.id)
      {
        case '1':bd.style.backgroundColor='gray'
                break;
        case '2':bd.style.backgroundColor='white'
                break;
        case '3':bd.style.backgroundColor='blue'
                break;
        case '4':bd.style.backgroundColor='yellow'
                break;
      }
    })
})