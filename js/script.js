window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("esticar", window.scrollY > 3);
})