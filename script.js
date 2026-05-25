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
