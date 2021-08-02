window.addEventListener("scroll", function(){
    var header = document.querySelector("12");
    header.classList.toggle("bg-dark", window.scrollY > 0);
})