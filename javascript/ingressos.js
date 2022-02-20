/* início da lógica JS para a página de ingressos */
    /* início do bloco da Alita */
        let saibaAlita = document.getElementById("saiba-alita");
        let blocoAlita1 = document.getElementById("div-saiba-Alita");
        let garantaAlita = document.getElementById("garanta-alita");
        let blocoAlita2 = document.getElementById("div-ingresso-Alita");
        
        saibaAlita.onclick = function chamaBlocoAlita1() {
            blocoAlita1.style.display = "flex";
            blocoAlita2.style.display = "none";
            displayEscondeAlita.style.display = "none";
        }

        garantaAlita.onclick = function chamaBlocoAlita2() {
            blocoAlita2.style.display = "flex";
            blocoAlita1.style.display = "none";
        }

        let spanFechaBlocoAlita1 = document.getElementById("span-fecha-bloco-Alita1");
        spanFechaBlocoAlita1.onclick = function fechaBlocoAlita1() {
            blocoAlita1.style.display = "none";
        }
        
        let spanFechaBlocoAlita2 = document.getElementById("span-fecha-bloco-Alita2");
        spanFechaBlocoAlita2.onclick = function fechaBlocoAlita2() {
            blocoAlita2.style.display = "none";
            displayEscondeAlita.style.display = "none";
        }

        let poltronaAlita1 = document.getElementById("item-poltrona-Alita-1");
        let poltronaAlita2 = document.getElementById("item-poltrona-Alita-2");
        let poltronaAlita3 = document.getElementById("item-poltrona-Alita-3");
        let poltronaAlita4 = document.getElementById("item-poltrona-Alita-4");
        let poltronaAlita5 = document.getElementById("item-poltrona-Alita-5");
        let displayEscondeAlita = document.getElementById("display-esconde-pagamento-Alita");
        let displayMensagem = document.getElementById("display-mensagem");
        let displayPreco = document.getElementById("display-preco");
        let botaoPagamento = document.getElementById("botao-pagamento");

        poltronaAlita1.onclick = () => {
            displayMensagem.innerText = `Voce escolheu: poltrona numero ${poltronaAlita1.innerText}`;
            displayPreco.innerText = "Pague pelo ingresso: 30,00";
            botaoPagamento.style.display = "flex";
            displayEscondeAlita.style.display = "flex";
        }

        poltronaAlita2.onclick = () => {
            displayMensagem.innerText = `Voce escolheu: poltrona numero ${poltronaAlita2.innerText}`;
            displayPreco.innerText = "Pague pelo ingresso: 30,00";
        }

        poltronaAlita3.onclick = () => {
            displayMensagem.innerText = `Voce escolheu: poltrona numero ${poltronaAlita3.innerText}`;
            displayPreco.innerText = "Pague pelo ingresso: 30,00";
        }

        poltronaAlita4.onclick = () => {
            displayMensagem.innerText = `Voce escolheu: poltrona numero ${poltronaAlita4.innerText}`;
            displayPreco.innerText = "Pague pelo ingresso: 30,00";
        }

        poltronaAlita5.onclick = () => {
            displayMensagem.innerText = `Voce escolheu: poltrona numero ${poltronaAlita5.innerText}`;
            displayPreco.innerText = "Pague pelo ingresso: 30,00";
        }
    /* fim do bloco da Alita */

    /* início do bloco do John */
        let saibaJohn = document.getElementById("saiba-wick");
        let blocoJohn1 = document.getElementById("div-saiba-John");
        let garantaJohn = document.getElementById("garanta-wick");
        let blocoJohn2 = document.getElementById("div-ingresso-John");

        saibaJohn.onclick = function chamaBlocoJohn1() {
            blocoJohn1.style.display = "flex";
            blocoJohn2.style.display = "none";
        }

        garantaJohn.onclick = function chamaBlocoJohn2() {
            blocoJohn2.style.display = "flex";
            blocoJohn1.style.display = "none";
        }

        let spanFechaBlocoJohn1 = document.getElementById("span-fecha-bloco-John1");
        spanFechaBlocoJohn1.onclick = function fechaBlocoJohn1() {
            blocoJohn1.style.display = "none";
        }

        let spanFechaBlocoJohn2 = document.getElementById("span-fecha-bloco-John2");
        spanFechaBlocoJohn2.onclick = function fechaBlocoJohn2() {
            blocoJohn2.style.display = "none";
        }
    /* fim do bloco do John */

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
/* fim da lógica JS para a página de ingressos */