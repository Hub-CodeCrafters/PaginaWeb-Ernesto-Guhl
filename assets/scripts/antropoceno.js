let next = document.querySelector(".next")
let preview = document.querySelector(".preview")
let next_Q = document.querySelector(".next-q")
let preview_Q = document.querySelector(".preview-q")
let uno = document.getElementById("seccion-antropoceno-imagen")
let dos = document.getElementById("seccion-antropoceno-info")
let uno_Q = document.getElementById("seccion-quinaxi-imagen")
let dos_Q = document.getElementById("seccion-quinaxi-info")
next.addEventListener("click", (e) => {
    uno.style.display = "none"
    dos.style.display = "flex"
    next.classList.add("none")
    preview.classList.remove("none")

})

preview.addEventListener("click", (e) => {
    uno.style.display = "flex"
    dos.style.display = "none"
    next.classList.remove("none")
    preview.classList.add("none")
})

next_Q.addEventListener("click", (e) => {
    uno_Q.style.display = "none"
    dos_Q.style.display = "flex"
    next_Q.classList.add("none")
    preview_Q.classList.remove("none")

})

preview_Q.addEventListener("click", (e) => {
    uno_Q.style.display = "flex"
    dos_Q.style.display = "none"
    next_Q.classList.remove("none")
    preview_Q.classList.add("none")
})