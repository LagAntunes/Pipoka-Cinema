/* início da lógica JS da página de cadastro */
    let botaoPremium = document.getElementById("botao-premium");



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
            PreencherFormulario(DadosDoCEP);
        })
    /* fim da API do CEP */
/* fim da lógica JS da página de cadastro */