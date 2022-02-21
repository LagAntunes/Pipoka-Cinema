/* início do bloco dos Piratas */
    let saibaPirata = document.getElementById("saiba-pirata");
    let blocoPirata1 = document.getElementById("div-saiba-Piratas");
    let garantaPiratas = document.getElementById("garanta-pirata");
    let blocoPirata2 = document.getElementById("div-ingresso-Piratas");

    saibaPirata.onclick = function chamaBlocoPiratas1() {
        blocoPirata1.style.display = "flex";
        blocoPirata2.style.display = "none";
        displayEscondePiratas.style.display = "none";
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
        displayEscondePiratas.style.display = "none";
    }

    let poltronaPiratas1 = document.getElementById("item-poltrona-Piratas-1");
    let poltronaPiratas2 = document.getElementById("item-poltrona-Piratas-2");
    let poltronaPiratas3 = document.getElementById("item-poltrona-Piratas-3");
    let poltronaPiratas4 = document.getElementById("item-poltrona-Piratas-4");
    let poltronaPiratas5 = document.getElementById("item-poltrona-Piratas-5");
    let displayEscondePiratas = document.getElementById("display-esconde-pagamento-Piratas");
    let displayMensagem3 = document.getElementById("display-mensagem-Piratas");
    let displayPreco3 = document.getElementById("display-preco-Piratas");
    let botaoPagamento3 = document.getElementById("botao-pagamento-Piratas");

    poltronaPiratas1.onclick = () => {
        displayMensagem3.innerText = `Voce escolheu: poltrona numero ${poltronaJohn1.innerText}`;
        displayPreco3.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento3.style.display = "flex";
        displayEscondePiratas.style.display = "flex";
    }

    poltronaPiratas2.onclick = () => {
        displayMensagem3.innerText = `Voce escolheu: poltrona numero ${poltronaJohn2.innerText}`;
        displayPreco3.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento3.style.display = "flex";
        displayEscondePiratas.style.display = "flex";
    }

    poltronaPiratas3.onclick = () => {
        displayMensagem3.innerText = `Voce escolheu: poltrona numero ${poltronaJohn3.innerText}`;
        displayPreco3.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento3.style.display = "flex";
        displayEscondePiratas.style.display = "flex";
    }

    poltronaPiratas4.onclick = () => {
        displayMensagem3.innerText = `Voce escolheu: poltrona numero ${poltronaJohn4.innerText}`;
        displayPreco3.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento3.style.display = "flex";
        displayEscondePiratas.style.display = "flex";
    }

    poltronaPiratas5.onclick = () => {
        displayMensagem3.innerText = `Voce escolheu: poltrona numero ${poltronaJohn5.innerText}`;
        displayPreco3.innerText = "Pague pelo ingresso: 30,00";
        botaoPagamento3.style.display = "flex";
        displayEscondePiratas.style.display = "flex";
    }

    botaoPagamento3.onclick = () => {
        alert("Retire seu ingresso em uma de nossas unidades");
    }
/* fim do bloco dos Piratas */