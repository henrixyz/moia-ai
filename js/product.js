const change_img = document.getElementById("tag-badge");
const imgs = document.querySelectorAll(".product-img");
const card_text = document.getElementById("card-text");


change_img.addEventListener("click", () => {
    imgs.forEach(img =>{
        if (img.classList.contains("on")){
            img.classList.remove("on");
            change_img.classList.add("on");
            change_img.innerHTML = "LIGADO";
            card_text.innerHTML = "Se estiver aceso é seu sinal visual imediato: o solo está no nível ideal de umidade e não precisa de água. Continue o monitoramento e saiba que você está otimizando o recurso hídrico, garantindo a saúde da planta e economizando tempo e dinheiro."
        }
        else{
            img.classList.add("on");
            change_img.classList.remove("on");
            change_img.innerHTML = "DESLIGADO";
            card_text.innerHTML = "Se estiver apagado é um alerta: o solo atingiu o nível crítico e precisa de irrigação imediata. Sua planta agradece! Aja com precisão e rapidez para evitar o estresse hídrico e garantir que sua colheita não sofra perdas"
        }
        }
    )
})

imgs.forEach