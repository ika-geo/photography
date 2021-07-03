//fixed header

let $headerTop = document.querySelector(".headerTop")

window.addEventListener("scroll", function (){
    if (window.scrollY>50&&window.innerWidth>768){
        $headerTop.classList.add("fixed")
    }
    else {
        $headerTop.classList.remove("fixed")
    }
})


window.addEventListener("resize", function (){
    if (window.innerWidth<=768){
        $headerTop.classList.remove("fixed")
    }
})





// show or hide input search in header menu

let $searchBtn = document.querySelector(".headerMenu img")
let $headerInputIMG = document.querySelector(".header__input")

$searchBtn.addEventListener("click", function (){
    $headerInputIMG.classList.toggle("active")
    $headerInputIMG.value=""
})


// search button

let $headerInput= document.querySelector(".header__input input")
let $headerInputIcon = document.querySelector(".header__input i")

$headerInputIcon.addEventListener("click", function (){
    if (!$headerInput.value){
        alert("Type something")
    }

    else {
        alert($headerInput.value)
    }
})

$headerInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if (!$headerInput.value){
            alert("Type something")
        }
        else {
            alert($headerInput.value)
        }
    }
});




// burger menu


let $menuBtn = document.querySelector(".menuBtn")

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




