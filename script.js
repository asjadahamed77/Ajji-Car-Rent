var menu = document.querySelector("#menu-icon")
var navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navbar.classList.remove("active")
}

const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true

})

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.home img',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:200,origin:'left'})
sr.reveal('.heading',{delay:200,origin:'top'})
sr.reveal('.ride-container .box',{delay:200,origin:'top'})
sr.reveal('.services-container .box',{delay:200,origin:'top'})
sr.reveal('.about-container',{delay:200,origin:'top'})
sr.reveal('.reviews-container .box',{delay:200,origin:'top'})
sr.reveal('.newsletter .box',{delay:200,origin:'bottom'})