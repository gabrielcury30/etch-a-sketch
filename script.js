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

    squareList.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    });
};

pintarQuadrados();

// Criação do botão e da lógica para mudar tamanho da grade
const botaoMudarGrade = document.createElement("button");
botaoMudarGrade.classList.add(".botaoMudarGrade");
botaoMudarGrade.textContent = "Tamanho da Grade";

const corpoDocumento = document.querySelector("body");
corpoDocumento.prepend(botaoMudarGrade);

botaoMudarGrade.addEventListener("click", () => {
    tamanhoGrade = prompt("Digite o tamanho da grade NxN");

    if (tamanhoGrade !== null) {
        tamanhoGrade = tamanhoGrade.trim();
    };

    while (isNaN(tamanhoGrade) || tamanhoGrade === "") {
        tamanhoGrade = prompt("Digite um tamanho de grade válida. Somente números.");

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