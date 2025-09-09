// Acessa o elemento do display da calculadora
const display = document.getElementById('display');

// Função para adicionar caracteres ao display
function appendToDisplay(char) {
    display.value += char;
}

// Função para apagar o último caractere do display
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Função para limpar o display
function clearDisplay() {
    display.value = '';
}

// Função para calcular o resultado
function calculateResult() {
    try {
        // Usa a função `eval()` para calcular a expressão matemática
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        // Em caso de erro, exibe "Erro" no display
        display.value = 'Erro';
    }
}