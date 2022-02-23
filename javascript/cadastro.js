/* início da lógica JS da página de cadastro */
    let botaoPremium = document.getElementById("botao-premium");
    let displayCadastro = document.querySelector(".div-display-cadastro");
    let displayFormulario = document.getElementById("display-cadastro-formulario");
    let fechaFormulario = document.getElementById("fecha-formulario");

    botaoPremium.addEventListener("click", () => {
        displayCadastro.style.display = "none";
        displayFormulario.style.display = "flex";
    })

    fechaFormulario.addEventListener("click", () => {
        displayCadastro.style.display = "flex";
        displayFormulario.style.display = "none";
    })


    /* início da API do CEP */
        const PreencherFormulario = (DadosDoCEP) => {
            document.getElementById("endereco").value = DadosDoCEP.logradouro;
            document.getElementById("bairro").value = DadosDoCEP.bairro;
            document.getElementById("cidade").value = DadosDoCEP.localidade;
            document.getElementById("estado").value = DadosDoCEP.uf;
        }

        let botaoCEP = document.getElementById("confirmaCEP");
        botaoCEP.addEventListener("click", async() => {
            event.preventDefault();
            let CEP = document.getElementById("CEP").value;
            const url = `http://viacep.com.br/ws/${CEP}/json/`;
            const dados = await fetch(url);
            const DadosDoCEP = await dados.json();

            if(DadosDoCEP.hasOwnProperty("erro")) {
                document.getElementById("endereco").value = "Favor informar um endereço existente";
                document.getElementById("endereco").style.color = "red";
                document.getElementById("endereco").style.fontWeight = "bold";
                document.getElementById("endereco").style.borderColor = "red";

                document.getElementById("bairro").value = "Favor informar um bairro existente";
                document.getElementById("bairro").style.color = "red";
                document.getElementById("bairro").style.fontWeight = "bold";
                document.getElementById("bairro").style.borderColor = "red";

                document.getElementById("cidade").value = "Favor informar uma cidade existente";
                document.getElementById("cidade").style.color = "red";
                document.getElementById("cidade").style.fontWeight = "bold";
                document.getElementById("cidade").style.borderColor = "red";

                document.getElementById("estado").value = "Favor informar um estado existente";
                document.getElementById("estado").style.color = "red";
                document.getElementById("estado").style.fontWeight = "bold";
                document.getElementById("estado").style.borderColor = "red";
            } else {
                PreencherFormulario(DadosDoCEP);
                document.getElementById("endereco").style.borderColor = "lightgreen";
                document.getElementById("endereco").style.color = "rgb(92, 92, 212)";
                document.getElementById("endereco").style.fontWeight = "bold";

                document.getElementById("bairro").style.borderColor = "lightgreen";
                document.getElementById("bairro").style.color = "rgb(92, 92, 212)";
                document.getElementById("bairro").style.fontWeight = "bold";

                document.getElementById("cidade").style.borderColor = "lightgreen";
                document.getElementById("cidade").style.color = "rgb(92, 92, 212)";
                document.getElementById("cidade").style.fontWeight = "bold";

                document.getElementById("estado").style.borderColor = "lightgreen";
                document.getElementById("estado").style.color = "rgb(92, 92, 212)";
                document.getElementById("estado").style.fontWeight = "bold";
            }
        })
    /* fim da API do CEP */
/* fim da lógica JS da página de cadastro */