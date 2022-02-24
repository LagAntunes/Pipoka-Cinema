/* início do bloco do John */
    let saibaJohn = document.getElementById("saiba-wick");
    let blocoJohn1 = document.getElementById("div-saiba-John");
    let garantaJohn = document.getElementById("garanta-wick");
    let blocoJohn2 = document.getElementById("div-ingresso-John");

    saibaJohn.onclick = function chamaBlocoJohn1() {
        blocoJohn1.style.display = "flex";
        blocoJohn2.style.display = "none";
        displayEscondeJohn.style.display = "none";
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
        displayEscondeJohn.style.display = "none";
    }

    let poltronaJohn1 = document.getElementById("item-poltrona-John-1");
    let poltronaJohn2 = document.getElementById("item-poltrona-John-2");
    let poltronaJohn3 = document.getElementById("item-poltrona-John-3");
    let poltronaJohn4 = document.getElementById("item-poltrona-John-4");
    let poltronaJohn5 = document.getElementById("item-poltrona-John-5");
    let displayEscondeJohn = document.getElementById("display-esconde-pagamento-John");
    let displayMensagem2 = document.getElementById("display-mensagem-John");
    let displayPreco2 = document.getElementById("display-preco-John");
    let botaoPagamento2 = document.getElementById("botao-pagamento-John");

    poltronaJohn1.onclick = () => {
        displayMensagem2.innerText = `Voce escolheu: poltrona numero ${poltronaJohn1.innerText}`;
        displayPreco2.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento2.style.display = "flex";
        displayEscondeJohn.style.display = "flex";
    }

    poltronaJohn2.onclick = () => {
        displayMensagem2.innerText = `Voce escolheu: poltrona numero ${poltronaJohn2.innerText}`;
        displayPreco2.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento2.style.display = "flex";
        displayEscondeJohn.style.display = "flex";
    }

    poltronaJohn3.onclick = () => {
        displayMensagem2.innerText = `Voce escolheu: poltrona numero ${poltronaJohn3.innerText}`;
        displayPreco2.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento2.style.display = "flex";
        displayEscondeJohn.style.display = "flex";
    }

    poltronaJohn4.onclick = () => {
        displayMensagem2.innerText = `Voce escolheu: poltrona numero ${poltronaJohn4.innerText}`;
        displayPreco2.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento2.style.display = "flex";
        displayEscondeJohn.style.display = "flex";
    }

    poltronaJohn5.onclick = () => {
        displayMensagem2.innerText = `Voce escolheu: poltrona numero ${poltronaJohn5.innerText}`;
        displayPreco2.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento2.style.display = "flex";
        displayEscondeJohn.style.display = "flex";
    }

    botaoPagamento2.onclick = () => {
        alert("Retire seu ingresso em uma de nossas unidades");
    }
/* fim do bloco do John */