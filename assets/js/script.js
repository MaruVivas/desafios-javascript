// Lógica Desafio #1

const img = document.getElementById("img-cat");

img.addEventListener("click", () => {
    
   if(img.classList.contains("border")){
    img.classList.remove("border");
   } else {
    img.classList.add("border");
   }});

   

// Lógica Desafio #2

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    const sticker1 = parseInt(document.getElementById("sticker1").value);
    const sticker2 = parseInt(document.getElementById("sticker2").value);
    const sticker3 = parseInt(document.getElementById("sticker3").value);
    const stickerTotal = sticker1 + sticker2 + sticker3;
    const stock = document.getElementById("stock");

    if(stickerTotal > 10){
        stock.innerHTML = "Excediste el límite de stickers";
    } else {
        stock.innerHTML = "Llevas " + stickerTotal + " stickers";
    }
})

// Lógica Desafio #3

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    const digit1 = parseInt(document.getElementById("digit1").value);
    const digit2 = parseInt(document.getElementById("digit2").value);
    const digit3 = parseInt(document.getElementById("digit3").value);

    const passwordResolution = document.getElementById("password-resolution");

    if(digit1 == 9 && digit2 == 1 && digit3 == 1 || digit1 == 7 && digit2 == 1 && digit3 == 4){
        passwordResolution.innerHTML = "¡Contraseña correcta!&#9989;"
    } else {
        passwordResolution.innerHTML = "¡Contraseña incorrecta!&#9940"
    }
})
