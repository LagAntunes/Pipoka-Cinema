/* início da lógica JS da página de cadastro */
    let botaoPremium = document.getElementById("botao-premium");
    let displayCadastro = document.querySelector(".div-display-cadastro");
    let displayFormulario = document.getElementById("display-cadastro-formulario");
    let fechaFormulario = document.getElementById("fecha-formulario");
    let botaoCadastraUsuario = document.getElementById("botao-cadastra-usuario");
    let endereco = document.getElementById("endereco");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    botaoPremium.addEventListener("click", () => {
        displayCadastro.style.display = "none";
        displayFormulario.style.display = "flex";
    })

    fechaFormulario.addEventListener("click", () => {
        displayCadastro.style.display = "flex";
        displayFormulario.style.display = "none";
    })

    botaoCadastraUsuario.addEventListener("click", () => {
        if(endereco.value != "" && bairro.value != "" && cidade.value != "" && estado.value != "") {
            alert("Seu cadastro foi solicitado. Aguarde o retorno em sua caixa de mensagens.");
        } else {

        }
    })


    /* início da API do CEP */
        const PreencherFormulario = (DadosDoCEP) => {
            endereco.value = DadosDoCEP.logradouro;
            bairro.value = DadosDoCEP.bairro;
            cidade.value = DadosDoCEP.localidade;
            estado.value = DadosDoCEP.uf;
        }

        let botaoCEP = document.getElementById("confirmaCEP");
        botaoCEP.addEventListener("click", async() => {
            event.preventDefault();
            let CEP = document.getElementById("CEP").value;
            const url = `http://viacep.com.br/ws/${CEP}/json/`;
            const dados = await fetch(url);
            const DadosDoCEP = await dados.json();

            if(DadosDoCEP.hasOwnProperty("erro")) {
                endereco.value = "Favor informar um endereço existente";
                endereco.style.color = "red";
                endereco.style.fontWeight = "bold";
                endereco.style.borderColor = "red";

                bairro.value = "Favor informar um bairro existente";
                bairro.style.color = "red";
                bairro.style.fontWeight = "bold";
                bairro.style.borderColor = "red";

                cidade.value = "Favor informar uma cidade existente";
                cidade.style.color = "red";
                cidade.style.fontWeight = "bold";
                cidade.style.borderColor = "red";

                estado.value = "Favor informar um estado existente";
                estado.style.color = "red";
                estado.style.fontWeight = "bold";
                estado.style.borderColor = "red";
            } else {
                PreencherFormulario(DadosDoCEP);
                endereco.style.borderColor = "rgb(13, 13, 145)";
                endereco.style.color = "rgb(92, 92, 212)";
                endereco.style.fontWeight = "bold";

                bairro.style.borderColor = "rgb(13, 13, 145)";
                bairro.style.color = "rgb(92, 92, 212)";
                bairro.style.fontWeight = "bold";

                cidade.style.borderColor = "rgb(13, 13, 145)";
                cidade.style.color = "rgb(92, 92, 212)";
                cidade.style.fontWeight = "bold";

                estado.style.borderColor = "rgb(13, 13, 145)";
                estado.style.color = "rgb(92, 92, 212)";
                estado.style.fontWeight = "bold";
            }
        })
    /* fim da API do CEP */
/* fim da lógica JS da página de cadastro */