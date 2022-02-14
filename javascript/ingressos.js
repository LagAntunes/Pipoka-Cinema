/* início da lógica JS para a página de ingressos */
    /* início do bloco da Alita */
        let saibaAlita = document.getElementById("saiba-alita");
        let blocoAlita1 = document.getElementById("div-saiba-Alita");
        let garantaAlita = document.getElementById("garanta-alita");
        let blocoAlita2 = document.getElementById("div-ingresso-Alita");

        saibaAlita.onclick = function chamaBlocoAlita1() {
            blocoAlita1.style.display = "flex"
            blocoAlita2.style.display = "none"
        }

        garantaAlita.onclick = function chamaBlocoAlita2() {
            blocoAlita2.style.display = "flex"
            blocoAlita1.style.display = "none"
        }

        let spanFechaBlocoAlita1 = document.getElementById("span-fecha-bloco1");
        spanFechaBlocoAlita1.onclick = function fechaBlocoAlita1() {
            blocoAlita1.style.display = "none"
        }
    /* fim do bloco da Alita */

    /* início do bloco do John */
        let saibaJohn = document.getElementById("saiba-wick");
        let blocoJohn1 = document.getElementById("div-saiba-John");
        let garantaJohn = document.getElementById("garanta-wick");
        let blocoJohn2 = document.getElementById("div-ingresso-John");

        saibaJohn.onclick = function chamaBlocoJohn1() {
            blocoJohn1.style.display = "flex"
            blocoJohn2.style.display = "none"
        }

        garantaJohn.onclick = function chamaBlocoJohn2() {
            blocoJohn2.style.display = "flex"
            blocoJohn1.style.display = "none"
        }

        let spanFechaBlocoJohn1 = document.getElementById("span-fecha-bloco2");
        spanFechaBlocoJohn1.onclick = function fechaBlocoJohn1() {
            blocoJohn1.style.display = "none"
        }
    /* fim do bloco do John */

    /* início do bloco dos Piratas */
        let saibaPirata = document.getElementById("saiba-pirata");
        let blocoPirata1 = document.getElementById("div-saiba-Piratas");
        let garantaPiratas = document.getElementById("garanta-pirata");
        let blocoPirata2 = document.getElementById("div-ingresso-Piratas");

        saibaPirata.onclick = function chamaBlocoPiratas1() {
            blocoPirata1.style.display = "flex"
            blocoPirata2.style.display = "none"
        }

        garantaPiratas.onclick = function chamaBlocoPiratas2() {
            blocoPirata2.style.display = "flex"
            blocoPirata1.style.display = "none"
        }

        let spanFechaBlocoPiratas1 = document.getElementById("span-fecha-bloco3");
        spanFechaBlocoPiratas1.onclick = function fechaBlocoJohn1() {
            blocoPirata1.style.display = "none"
        }
    /* fim do bloco dos Piratas */
/* fim da lógica JS para a página de ingressos */