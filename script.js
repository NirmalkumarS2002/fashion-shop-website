let hero = document.querySelector(".heroSection")
let images = ["./src/home.webp", "./src/home1.webp"]
let herocontent = document.querySelectorAll(".heroContent")
let index = 0

function changeSlide() {
    hero.style.backgroundImage = `url(${images[index]})`
    herocontent.forEach((items) => {
        items.classList.remove("active")
    })
  // animation restart
    void herocontent[index].offsetWidth
    herocontent[index].classList.add("active")
    hero.style.backgroundPosition = "top center"
}


// Auto Slide
setInterval(() => {
    index++
    if (index >= images.length) {
        index = 0
    }
    changeSlide()
}, 3000)


// Left Button
let left = document.querySelector(".left")
left.addEventListener("click", () => {
    index++
    if (index >= images.length) {
        index = 0
    }
    changeSlide()
})


// Right Button
let right = document.querySelector(".right")
right.addEventListener("click", () => {
    index--
    if (index < 0) {
        index = images.length - 1
    }
    changeSlide()
})

// // showcase

// let sbtn1=document.querySelector(".sbtn1")
// let sbtn2=document.querySelector(".sbtn2")

// let sbox1=document.querySelector(".sbox1")
// let sbox2=document.querySelector(".sbox2")
// let sbox3=document.querySelector(".sbox3")
// let sbox4=document.querySelector(".sbox4")
// let sbox5=document.querySelector(".sbox5")

// sbtn1.addEventListener("click",()=>{
//     sbox5.style.display="block"
//      sbox1.style.display="none"
// })

// sbtn2.addEventListener("click",()=>{
//     sbox5.style.display="none"
//      sbox1.style.display="block"
// })

let showcase = document.querySelector(".showcase")

let btn1 = document.querySelector(".sbtn1")
let btn2 = document.querySelector(".sbtn2")

let scrollAmount = 0


btn2.addEventListener("click",()=>{

    scrollAmount += 300

    showcase.scrollTo({
        left: scrollAmount,
        behavior:"smooth"
    })

    btn2.classList.add("active")
    btn1.classList.remove("active")

})


btn1.addEventListener("click",()=>{

    scrollAmount -= 300

    if(scrollAmount < 0){
        scrollAmount = 0
    }

    showcase.scrollTo({
        left: scrollAmount,
        behavior:"smooth"
    })

    btn1.classList.add("active")
    btn2.classList.remove("active")

})