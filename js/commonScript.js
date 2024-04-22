let whiteTheme = document.querySelector(".white")
let blackTheme = document.querySelector(".black")
let html = document.querySelector("html")

// if (localStorage.theme) {
//     html.classList.remove('black-theme', 'white-theme')
//     html.classList.add(localStorage.theme)
// }

whiteTheme.addEventListener('click', function () {
    html.classList.remove('black-theme')
    html.classList.add('white-theme')
    localStorage.setItem("theme", "white-theme")
})

blackTheme.addEventListener('click', function () {
    html.classList.remove('white-theme')
    html.classList.add('black-theme')
    localStorage.setItem("theme", "black-theme")
})