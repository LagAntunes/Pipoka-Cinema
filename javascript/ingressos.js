/* início da lógica JS para a página de ingressos */
    /* início do bloco da Alita */
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

        let spanFechaBloco1 = document.getElementById("span-fecha-bloco1");
        spanFechaBloco1.onclick = function fechaBloco1() {
            blocoAlita1.style.display = "none"
        }
    /* fim do bloco da Alita */
/* fim da lógica JS para a página de ingressos */