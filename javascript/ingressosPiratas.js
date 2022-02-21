/* início do bloco dos Piratas */
    let saibaPirata = document.getElementById("saiba-pirata");
    let blocoPirata1 = document.getElementById("div-saiba-Piratas");
    let garantaPiratas = document.getElementById("garanta-pirata");
    let blocoPirata2 = document.getElementById("div-ingresso-Piratas");

    saibaPirata.onclick = function chamaBlocoPiratas1() {
        blocoPirata1.style.display = "flex";
        blocoPirata2.style.display = "none";
    }

    garantaPiratas.onclick = function chamaBlocoPiratas2() {
        blocoPirata2.style.display = "flex";
        blocoPirata1.style.display = "none";
    }

    let spanFechaBlocoPiratas1 = document.getElementById("span-fecha-bloco-Piratas1");
    spanFechaBlocoPiratas1.onclick = function fechaBlocoPiratas1() {
        blocoPirata1.style.display = "none";
    }

    let spanFechaBlocoPiratas2 = document.getElementById("span-fecha-bloco-Piratas2");
    spanFechaBlocoPiratas2.onclick = function fechaBlocoPiratas2() {
        blocoPirata2.style.display = "none";
    }
/* fim do bloco dos Piratas */