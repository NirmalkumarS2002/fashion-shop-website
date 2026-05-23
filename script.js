let hero=document.querySelector(".heroSection")
let images=["./src/home.webp","./src/home1.webp"]
let herocontent=document.querySelectorAll(".heroContent")
let index=0

setInterval(()=>{

    index++
    if(index>=images.length){
        index=0
    }

    hero.style.backgroundImage=`url(${images[index]})`

    herocontent.forEach((items)=>{
        items.classList.remove("active")
    })
    herocontent[index].classList.add("active")


},3000)


// 
let left =document.querySelector(".left")

left.addEventListener("click",()=>{
    
    index++
    if(index>=images.length){
        index=0
    }

    hero.style.backgroundImage=`url(${images[index]})`

    herocontent.forEach((items)=>{
        items.classList.remove("active")
    })
    herocontent[index].classList.add("active")

})

let right =document.querySelector(".right")

right.addEventListener("click",()=>{
    
    index--
    if(index<0){
        index=images.length-1
    }

    hero.style.backgroundImage=`url(${images[index]})`

    herocontent.forEach((items)=>{
        items.classList.remove("active")
    })
    herocontent[index].classList.add("active")

})