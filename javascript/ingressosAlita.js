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
    let displayMensagem1 = document.getElementById("display-mensagem-Alita");
    let displayPreco1 = document.getElementById("display-preco-Alita");
    let botaoPagamento1 = document.getElementById("botao-pagamento-Alita");

    poltronaAlita1.onclick = () => {
        displayMensagem1.innerText = `Voce escolheu: poltrona numero ${poltronaAlita1.innerText}`;
        displayPreco1.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento1.style.display = "flex";
        displayEscondeAlita.style.display = "flex";
    }

    poltronaAlita2.onclick = () => {
        displayMensagem1.innerText = `Voce escolheu: poltrona numero ${poltronaAlita2.innerText}`;
        displayPreco1.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento1.style.display = "flex";
        displayEscondeAlita.style.display = "flex";
    }

    poltronaAlita3.onclick = () => {
        displayMensagem1.innerText = `Voce escolheu: poltrona numero ${poltronaAlita3.innerText}`;
        displayPreco1.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento1.style.display = "flex";
        displayEscondeAlita.style.display = "flex";
    }

    poltronaAlita4.onclick = () => {
        displayMensagem1.innerText = `Voce escolheu: poltrona numero ${poltronaAlita4.innerText}`;
        displayPreco1.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento1.style.display = "flex";
        displayEscondeAlita.style.display = "flex";
    }

    poltronaAlita5.onclick = () => {
        displayMensagem1.innerText = `Voce escolheu: poltrona numero ${poltronaAlita5.innerText}`;
        displayPreco1.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento1.style.display = "flex";
        displayEscondeAlita.style.display = "flex";
    }

    botaoPagamento1.onclick = () => {
        alert("Compra realizada com sucesso");
    }
/* fim do bloco da Alita */

