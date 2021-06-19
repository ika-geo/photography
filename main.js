// show or hide input search in header menu

let $searchBtn = document.querySelector(".headerMenu img")
let $headerInput = document.querySelector(".headerMenu input")

$searchBtn.addEventListener("click", function (){
    $headerInput.classList.toggle("active")
    $headerInput.value=""
})


// burger menu


let $menuBtn = document.querySelector(".menuBtn")
let $headerTop = document.querySelector(".headerTop")

$menuBtn.addEventListener("click", function (){
    $menuBtn.classList.toggle("active")
    $headerTop.classList.toggle("active")
})


// gallery switcher

let switcherBtn = document.querySelectorAll(".portfolio__switcher");
let gallery = document.querySelectorAll(".portfolio__gallery");


for (let i=0; i<switcherBtn.length; i++){
    switcherBtn[i].addEventListener("click", function (){
        switcherBtn.forEach(a=>a.classList.remove("active"))
        gallery.forEach(a=>a.classList.remove("active"))
        switcherBtn[i].classList.add("active")
        gallery[i].classList.add("active")
    })
}





