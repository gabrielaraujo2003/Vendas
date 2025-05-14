// ---------------------------------------- Carrossel -----------------------------------------------------------------


let contador = 1;

setInterval(function () {
    document.getElementById('radio' + contador).checked = true;
    contador++;

    if (contador > 5) {
        contador = 1;
    }
}, 4000);



// ---------------------------------------- Carrinho -----------------------------------------------------------------

function alterar(produto, acao) {
    const quantidade = document.getElementById('qtd-pdt' + produto);
    const valor = document.getElementById("valor-" + produto);
    const subtotal = document.getElementById("subtotal-pdt" + produto);


    // Converte o valor string para flot (Moeda BR)
    const qtd = parseInt(quantidade.innerHTML.replace('.', '').replace(',', '.'));
    const valorFloat = parseFloat(valor.innerHTML.replace('.', '').replace(',', '.'))
    const count = document.getElementById('.add_carrinho')

    // incremento da quantidade
    if (acao == 'aumentar') {
        quantidade.innerHTML++
        alterarCarrinho(1, count)
    }
    else if (acao == 'reduzir' && qtd > 0) {
        quantidade.innerHTML--
        alterarCarrinho(-1, count)
    }


    // Atualiza o subtotal
    subtotal.innerHTML = (quantidade.innerHTML * valorFloat).toLocaleString('pt-BR', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    })

};






// ------------------------------------------------ Alterar quantidade de itens no carrinho --------------------------------------
function alterarCarrinho(numero, valor_count) {
    const count_atual = parseInt(valor_count.getAttribute('data-count') || 0)
    let novo_count = count_atual + numero

    // Impedir valor negativo
    if (novo_count < 0) novo_count = 0;

    valor_count.SetAttribute('data-count', novo_count);
}




// ---------------------------------------- Carrinho -----------------------------------------------------------------

function alterar(produto, acao) {
    const quantidade = document.getElementById('qtd-pdt' + produto);
    const valor = document.getElementById("valor-" + produto);
    const subtotal = document.getElementById("subtotal-pdt" + produto);

    const qtd = parseInt(quantidade.innerHTML);
    const valorFloat = parseFloat(valor.innerHTML.replace(/\./g, '').replace(',', '.'));
    const count = document.querySelector('.add_carrinho'); // Corrigido: selecionar o elemento pelo seletor de classe corretamente

    if (acao === 'aumentar') {
        quantidade.innerHTML = qtd + 1;
        alterarCarrinho(1, count);
    } else if (acao === 'reduzir' && qtd > 0) {
        quantidade.innerHTML = qtd - 1;
        alterarCarrinho(-1, count);
    }

    const novoSubtotal = parseInt(quantidade.innerHTML) * valorFloat;
    subtotal.innerHTML = novoSubtotal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// ---------------------------------------- Atualiza quantidade no ícone do carrinho ---------------------------------

function alterarCarrinho(numero, valor_count) {
    const count_atual = parseInt(valor_count.getAttribute('data-count') || 0);
    let novo_count = count_atual + numero;
    if (novo_count < 0) novo_count = 0;

    valor_count.setAttribute('data-count', novo_count); // Corrigido aqui
}
