const menu = document.getElementById("menu");

document.addEventListener("scroll", (ev) => {
    menu.classList.remove("active");

    if(pageYOffset > 300){
        menu.classList.add("hide");
    }
    else{
        menu.classList.remove("hide");
    }
});

menu.getElementsByTagName("button")[0].addEventListener("click", (ev) => {
    menu.classList.remove("hide");
    menu.classList.add("active");
    
})