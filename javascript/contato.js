/* início da lógica JS da página de contato */
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let mensagem = document.getElementById("mensagem");

    let mensagemOculta1 = document.getElementById("texto-aviso1");
    let mensagemOculta2 = document.getElementById("texto-aviso2");
    let mensagemOculta3 = document.getElementById("texto-aviso3");
    let mensagemOculta4 = document.getElementById("texto-aviso4");
    let botaoEnvio = document.getElementById("botao-submit");

    /*function clicaBotao() {
        alert("teste")
    }
    botaoEnvio.addEventListener("click", clicaBotao)*/

    botaoEnvio. onclick =  function confirmaEnvio() {
        event.preventDefault()
        if(nome.value == "") {
            mensagemOculta1.innerText = "Por favor informe o seu nome";
            mensagemOculta1.style.color = "red";
            mensagemOculta1.style.fontWeight = "bold";
            nome.style.borderColor = "red";
        } else if(nome.value != "") {
            mensagemOculta1.innerText = "✔️";
            mensagemOculta1.style.fontSize = "1.2em";
            nome.style.borderColor = "lightgreen"
        }
    }
    
    
/* fim da lógica JS da página de contato */