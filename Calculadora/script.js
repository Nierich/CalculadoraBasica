const display = document.getElementById('display');
const valor = document.getElementById('valor');
let valorInicial = '';
let operacao = '';

function insert(num) {
    display.value += num;
}

function capturarValor() {
    if (display.value !== '') {
        valorInicial = display.value;
        display.value = '';
    }
}

function atualizarOperacao(sinal) {
    if (display.value !== '') {
        capturarValor();
        operacao = sinal;
        valor.innerText = `${valorInicial} ${operacao}`;
    }
}

function limparDisplay() {
    display.value = '';
}

function limparTudo() {
    display.value = '';
    valor.innerText = '';
}

function executar() {
    if(display.value !==''){
    const valorFinal = display.value;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = parseFloat(valorInicial) + parseFloat(valorFinal);
            break;
        case '-':
            resultado = parseFloat(valorInicial) - parseFloat(valorFinal);
            break;
        case '/':
            resultado = parseFloat(valorInicial) / parseFloat(valorFinal);
            break;
        case '*':
            resultado = parseFloat(valorInicial) * parseFloat(valorFinal);
            break;
        default:
            resultado = '';
    }
    display.value = resultado;
    valor.innerText = `${resultado} ${operacao}`;
} else{
    alert('Erro!! Você precisa selecionar algum número!');
}
}