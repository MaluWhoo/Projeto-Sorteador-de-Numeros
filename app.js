function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // alert(`Quantidade: ${quantidade}`)
    // alert(`De: ${de}`)
    // alert(`Ate: ${ate}`)

    // Chamando a Função obter Numero Aleatorio

    // No campo "Do número é possivel colocar um numero maior o Até o número, o que não pode acontecer
    if (de >= quantidade){
        alert("Número invalido ! O campo 'Do número' deve conter um número menor que o campo 'Até o número'");
        return;
    }

    if (quantidade > (ate - de + 1)){
        alert("O campo 'Quantidade de número' deve ser menor que o campo 'Do número' e o seu intervalo 'Até o numero'")
        return;
    }   

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        // Enquanto variaveis ja tiver incluida um numero que ja foi sorteado, enquato for verdade...
        while (sorteados.includes(numero)){ 
            numero = obterNumeroAleatorio(de, ate);

        }

        // O push coloca o elemento no array.
        sorteados.push(numero);
    }

    // alert(sorteados);

    let resultado = document.getElementById('resultado');
    // No innerHTML é possivel manipular o conteudo HTML  interno de um elemento.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    
    alterarStatusBotao(); 
}



//  se o numero da 'quantidade de numeros' for uma esclala entre o do numero ate o numero fazer se nao alert