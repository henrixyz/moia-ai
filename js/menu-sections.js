const menu = document.getElementById("menu-hamburguer");
const bottom_header = document.getElementById("bottom-header");

menu.addEventListener("click", () => {
    bottom_header.classList.toggle("active");
    if (menu.classList.contains("fa-bars")){
        menu.classList.replace("fa-bars","fa-xmark");
    }
    else{
            menu.classList.replace("fa-xmark", "fa-bars");
    }
    
})