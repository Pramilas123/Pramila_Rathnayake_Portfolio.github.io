window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function revealOnScroll(){

const reveals = document.querySelectorAll(".reveal");

const windowHeight = window.innerHeight;

reveals.forEach((element)=>{

const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){
element.classList.add("active");
}

});

}

