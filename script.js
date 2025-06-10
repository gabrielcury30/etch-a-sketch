// Bloco que cria múltiplas divs na div pai de acordo com a quantidade de divs
let tamanhoGrade = 16;
let quantidadeDivs = tamanhoGrade ** 2;

const criarDivs = (tamanhoGrade, quantidadeDivs) => {
    const divPai = document.querySelector(".conteiner");

    let larguraDiv = `${100 / tamanhoGrade}%`;
    let alturaDiv = `${100 / tamanhoGrade}%`;

    for (let i = 0; i < quantidadeDivs; i++) {
        const div = document.createElement("div");

        div.classList.add("square");

        div.style.width = larguraDiv;
        div.style.height = alturaDiv;

        divPai.appendChild(div);
    };
};

criarDivs(tamanhoGrade, quantidadeDivs);

// Criar evento que permite pintar os quadrados
const pintarQuadrados = () => {
    const squareList = document.querySelectorAll(".square");

    let valorMinimo = 0;
    let valorMaximo = 255;
    
    let vermelho;
    let verde;
    let azul;

    squareList.forEach(square => {
        square.addEventListener("mouseover", () => {
            vermelho = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
            verde = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
            azul = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
            
            square.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
        });
    });
};

pintarQuadrados();

// Criação do botão e da lógica para mudar tamanho da grade
const botaoMudarGrade = document.createElement("button");
botaoMudarGrade.classList.add(".botaoMudarGrade");
botaoMudarGrade.textContent = "Tamanho da Grade";

const titulo = document.createElement("h1");
titulo.classList.add(".titulo");
titulo.textContent = "Etch a Sketch";

const corpoDocumento = document.querySelector("body");
corpoDocumento.prepend(botaoMudarGrade);
corpoDocumento.prepend(titulo);

botaoMudarGrade.addEventListener("click", () => {
    tamanhoGrade = prompt("Digite o tamanho da grade (NxN) entre 0 e 100.");

    if (tamanhoGrade !== null) {
        tamanhoGrade = tamanhoGrade.trim();
    };

    while (isNaN(tamanhoGrade) || tamanhoGrade === "" || tamanhoGrade > 100 || tamanhoGrade < 0) {
        tamanhoGrade = prompt("Digite um tamanho de grade válida! Apenas números entre 0 e 100.");

        if (tamanhoGrade !== null) {
            tamanhoGrade = tamanhoGrade.trim();
        };
    };

    quantidadeDivs = tamanhoGrade ** 2;
    
    if (tamanhoGrade !== null) {
        const divPai = document.querySelector(".conteiner");

        const squareList = document.querySelectorAll(".square");

        squareList.forEach(square => {
            divPai.removeChild(square);
        });

        criarDivs(tamanhoGrade, quantidadeDivs);
        pintarQuadrados();
    };
});