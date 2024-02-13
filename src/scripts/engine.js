const emojis = [
    "😎",
    "😎",
    "🥶",
    "🥶",
    "🤢",
    "🤢",
    "🤡",
    "🤡",
    "👽",
    "👽",
    "👻",
    "👻",
    "💀",
    "💀",
    "🤖",
    "🤖"
];
let cartasAberta = [];

let embaralhaEmojis =emojis.sort(() => (Math.random() >  0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){

    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = embaralhaEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){

    if(cartasAberta.length < 2){

        this.classList.add("boxOpen");
        cartasAberta.push(this); 

    }
    if (cartasAberta.length == 2){

        setTimeout(checagem, 500);
    }
}

function checagem(){

    if(cartasAberta[0].innerHTML === cartasAberta[1].innerHTML){

        cartasAberta[0].classList.add("boxMatch");
        cartasAberta[1].classList.add("boxMatch");
    }else {

        cartasAberta[0].classList.remove("boxOpen");
        cartasAberta[1].classList.remove("boxOpen");
    }
    cartasAberta = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){

        alert("Voce Venceu !");
    };
}