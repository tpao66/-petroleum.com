window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "#050b16";
        header.style.transition = "0.3s";
    }else{
        header.style.background = "#09101d";
    }

});
