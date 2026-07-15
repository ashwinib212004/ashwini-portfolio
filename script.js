window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.background = "#09090bf5";
}
else{
nav.style.background = "#09090be8";
}

});