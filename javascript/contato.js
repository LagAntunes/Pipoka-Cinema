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

    function clicaBotao() {
        alert("teste")
    }
    botaoEnvio.addEventListener("click", clicaBotao)

    /*function confirmaPreenchimento() {
        if(botaoEnvio.click = true) {
            if(nome.value == "") {
                mensagemOculta1.innerText = "abacate"
            }
        }
    }*/

    
    
/* fim da lógica JS da página de contato */