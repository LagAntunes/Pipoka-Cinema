/* início da lógica JS para a página de ingressos */
    let saibaAlita = document.getElementById("saiba-alita");
    let blocoAlita1 = document.getElementById("div-saiba-Alita");
    let garantaAlita = document.getElementById("garanta-alita");
    let blocoAlita2 = document.getElementById("div-ingresso-Alita");

    saibaAlita.onclick = function chamaBloco1() {
        blocoAlita1.style.display = "flex"
        blocoAlita2.style.display = "none"
    }

    garantaAlita.onclick = function chamaBloco2() {
        blocoAlita2.style.display = "flex"
        blocoAlita1.style.display = "none"
    }
/* fim da lógica JS para a página de ingressos */