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

    botaoEnvio.onclick =  function confirmaEnvio1() {
        event.preventDefault()
        if(nome.value == "") {
            mensagemOculta1.innerText = "Por favor informe o seu nome";
            mensagemOculta1.style.color = "red";
            mensagemOculta1.style.fontWeight = "bold";
            nome.style.borderColor = "red";
        } else if(nome.value != "")  {
            mensagemOculta1.innerText = "✔️";
            mensagemOculta1.style.fontSize = "1.2em";
            nome.style.borderColor = "lightgreen";
        }

        if(email.value == "") {
            mensagemOculta2.innerText = "Por favor informe o seu e-mail";
            mensagemOculta2.style.color = "red";
            mensagemOculta2.style.fontWeight = "bold";
            email.style.borderColor = "red";
        } else if(email.value != "")  {
            mensagemOculta2.innerText = "✔️";
            mensagemOculta2.style.fontSize = "1.2em";
            email.style.borderColor = "lightgreen";
        }

        if(telefone.value == "") {
            mensagemOculta3.innerText = "Por favor informe o seu telefone";
            mensagemOculta3.style.color = "red";
            mensagemOculta3.style.fontWeight = "bold";
            telefone.style.borderColor = "red";
        } else if(telefone.value != "")  {
            mensagemOculta3.innerText = "✔️";
            mensagemOculta3.style.fontSize = "1.2em";
            telefone.style.borderColor = "lightgreen";
        }

        if(mensagem.value == "") {
            mensagemOculta4.innerText = "Por favor escreva sua mensagem";
            mensagemOculta4.style.color = "red";
            mensagemOculta4.style.fontWeight = "bold";
            mensagem.style.borderWidth = "2px";
            mensagem.style.borderColor = "red";
        } else if(mensagem.value != "")  {
            mensagemOculta4.innerText = "✔️";
            mensagemOculta4.style.fontSize = "1.2em";
            mensagem.style.borderWidth = "2px";
            mensagem.style.borderColor = "lightgreen";
        }
    }

    /*botaoEnvio.onclick =  function confirmaEnvio2() {
        event.preventDefault()
        if(email.value == "") {
            mensagemOculta2.innerText = "Por favor informe o seu nome";
            mensagemOculta2.style.color = "red";
            mensagemOculta2.style.fontWeight = "bold";
            email.style.borderColor = "red";
        } else if(email.value != "")  {
            mensagemOculta2.innerText = "✔️";
            mensagemOculta2.style.fontSize = "1.2em";
            email.style.borderColor = "lightgreen";
        }
    }*/
    
/* fim da lógica JS da página de contato */