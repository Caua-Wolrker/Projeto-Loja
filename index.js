var menu = false;
var profile = false;
let RootFM = document.querySelector(":root");
console.log(RootFM.style.getPropertyValue("--FonteMenu"));

let RootFP = document.querySelector(":root");
console.log(RootFP.style.getPropertyValue("--FonteProfile"));


document.addEventListener("click", function(event) {
    var buttonMenu = document.querySelector("#bMenu");
    var buttonProfile = document.querySelector("#bProfile");
    var isClickInsideM = buttonMenu.contains(event.target);
    var isClickInsideP = buttonProfile.contains(event.target);

    if (!isClickInsideM) {
        Opção1Menu.style.padding = "0px";
        Opção1Menu.style.width = "0px";
        Opção1Menu.style.fontSize = "0px";
        Opção1Menu.style.left = "-50px";
        RootFM.style.setProperty("--FonteMenu", "0%");
        menu = false;
    }

    if (!isClickInsideP) {
        profile = false;
        Opção1Profile.style.padding = "0px";
        Opção1Profile.style.width = "0px";
        Opção1Profile.style.fontSize = "0px";
        Opção1Profile.style.right = "-50px";
        RootFM.style.setProperty("--FonteProfile", "0%");
    }
});

function MybuttonMenuf() {

    let Opção1Menu = document.querySelector("#Opção1Menu");



    if (menu) {
        menu = false;
    } else {
        menu = true;
    }

    if (menu) {
        Opção1Menu.style.padding = "20px";
        Opção1Menu.style.width = "200px";
        Opção1Menu.style.fontSize = "30px";
        Opção1Menu.style.left = "0px";
        RootFM.style.setProperty("--FonteMenu", "100%");
    } else {
        Opção1Menu.style.padding = "0px";
        Opção1Menu.style.width = "0px";
        Opção1Menu.style.fontSize = "0px";
        Opção1Menu.style.left = "-50px";
        RootFM.style.setProperty("--FonteMenu", "0%");
    }
}



function MybuttonProfilef() {

    let Opção1Profile = document.querySelector("#Opção1Profile");


    if (profile) {
        profile = false;
        console.log("Não")
    } else {
        profile = true;
        console.log("Sim")
    }

    if (profile) {
        Opção1Profile.style.padding = "20px";
        Opção1Profile.style.width = "150px";
        Opção1Profile.style.fontSize = "30px";
        Opção1Profile.style.right = "0px";
        RootFP.style.setProperty("--FonteProfile", "100%");
    } else {
        Opção1Profile.style.padding = "0px";
        Opção1Profile.style.width = "0px";
        Opção1Profile.style.fontSize = "0px";
        Opção1Profile.style.right = "-50px";
        RootFP.style.setProperty("--FonteProfile", "0%");
    }
}