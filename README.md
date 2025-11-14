# 🧮 Projeto: Calculadora Funcional

![Preview da Calculadora](preview.gif)

Uma aplicação de calculadora 100% funcional desenvolvida com JavaScript puro, HTML5 e Bootstrap. O projeto simula uma calculadora real, capaz de realizar operações matemáticas básicas com uma interface limpa e responsiva.

---

### 🎯 Objetivo

O objetivo central deste projeto é demonstrar o domínio da **lógica de programação** e da **manipulação direta do DOM** em JavaScript. O foco foi criar um sistema interativo que gerencia a entrada do usuário, processa cálculos e trata possíveis erros de execução (como expressões matemáticas inválidas).

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3
* **Framework/Biblioteca:** Bootstrap 5 (para o grid responsivo dos botões)
* **Ambiente:** Navegador Web

---

### 🧱 Estrutura do Código

O projeto é centralizado em três arquivos principais, com a lógica de interação contida no `main.js`.

| Arquivo | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura da calculadora, incluindo o visor (`#display`) e os botões. |
| `css/style.css` | Estilização personalizada do visor e alinhamento do componente. |
| `js/main.js` | **Lógica da Aplicação:** Contém todas as funções de operação. |
| `main.js` » `appendToDisplay()` | Concatena o valor do botão clicado no visor. |
| `main.js` » `clearDisplay()` | Limpa o visor (função "C"). |
| `main.js` » `backspace()` | Apaga o último caractere (função "DEL"). |
| `main.js` » `calculateResult()` | Executa o cálculo da expressão no visor. |

---

### 🔍 Funcionalidades

* **Operações Básicas:** Suporte completo para adição, subtração, multiplicação e divisão.
* **Números Decimais:** Permite a entrada de números com ponto flutuante (`.`).
* **Controle de Visor:** Funções para limpar totalmente o visor (`C`) ou apagar o último dígito (`DEL`).
* **Tratamento de Erros:** Se o usuário tentar calcular uma expressão inválida (ex: "5 + * 3"), o visor exibe "Erro" em vez de quebrar a aplicação.
* **Interface Responsiva:** O layout se adapta perfeitamente a dispositivos móveis.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

### 📚 Aprendizado

Este projeto foi um exercício fundamental de lógica e interação com o DOM:

* **Manipulação do DOM:** Pratiquei a seleção de elementos (`getElementById`) e a leitura/escrita de seus valores (`.value`) para criar uma interface interativa em tempo real.
* **Função `eval()` e Segurança:** Aprendi a usar a poderosa função `eval()` para processar a string matemática. O aprendizado mais importante foi como "blindar" seu uso dentro de um bloco `try...catch`, garantindo que erros de sintaxe do usuário sejam tratados graciosamente sem travar o script.
* **Event Handling:** Reforcei o uso de eventos (`onclick`) para conectar os elementos HTML às funções JavaScript.

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
