var menu = false;
let Root = document.querySelector(":root");
console.log(Root.style.getPropertyValue("--FonteMenu"));

document.addEventListener("click", function(event) {
    var button = document.querySelector("#BarraMenu>button");
    var isClickInside = button.contains(event.target);

    if (!isClickInside) {
        Opção1Menu.style.padding = "0px";
        Opção1Menu.style.width = "0px";
        Opção1Menu.style.fontSize = "0px";
        Opção1Menu.style.left = "-50px";
        Root.style.setProperty("--FonteMenu", "0%");
        menu = false;
    }
});

function MybuttonMenuf() {

    let Opção1Menu = document.querySelector("#Opção1Menu");



    if (menu) {
        menu = false;
        console.log("desligado");
    } else {
        menu = true;
        console.log("ligado");
    }

    if (menu) {
        Opção1Menu.style.padding = "20px";
        Opção1Menu.style.width = "130px";
        Opção1Menu.style.fontSize = "30px";
        Opção1Menu.style.left = "0px";
        Root.style.setProperty("--FonteMenu", "100%");
    } else {
        Opção1Menu.style.padding = "0px";
        Opção1Menu.style.width = "0px";
        Opção1Menu.style.fontSize = "0px";
        Opção1Menu.style.left = "-50px";
        Root.style.setProperty("--FonteMenu", "0%");
    }
}


//DPS Q AJEITAR, COLOQUE MAIS OPÇÕES NO SITE