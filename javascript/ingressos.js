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

    /* início do bloco do John */
        let saibaJohn = document.getElementById("saiba-wick");
        let blocoJohn1 = document.getElementById("div-saiba-John");
        let garantaJohn = document.getElementById("garanta-wick");
        let blocoJohn2 = document.getElementById("div-ingresso-John");

        saibaJohn.onclick = function chamaBloco1() {
            blocoJohn1.style.display = "flex"
            blocoJohn2.style.display = "none"
        }

        garantaJohn.onclick = function chamaBloco2() {
            blocoJohn2.style.display = "flex"
            blocoJohn1.style.display = "none"
        }

        let spanFechaBloco2 = document.getElementById("span-fecha-bloco2");
        spanFechaBloco2.onclick = function fechaBloco2() {
            blocoJohn1.style.display = "none"
        }

    /* fim do bloco do John */
/* fim da lógica JS para a página de ingressos */