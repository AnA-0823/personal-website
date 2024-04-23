let whiteTheme = document.querySelector(".white")
let blackTheme = document.querySelector(".black")
let html = document.querySelector("html")
let themes = document.querySelector(".themes")
let popup = document.querySelector(".popup")

if (localStorage.theme) {
    html.classList.remove('black-theme', 'white-theme')
    html.classList.add(localStorage.theme)
}

themes.addEventListener('click', function () {
    if (themes.classList.contains('active')){
        themes.classList.remove('active')
        popup.classList.remove('active')
    }else{
        themes.classList.add('active')
        popup.classList.add('active')
    }
})

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