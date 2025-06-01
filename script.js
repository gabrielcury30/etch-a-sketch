// Bloco que cria múltiplas divs na div pai de acordo com a quantidade de divs
const quantidadeDivs = 256;

const criarDivs = (quantidadeDivs) => {
    const divPai = document.querySelector(".conteiner");

    const grade = Math.sqrt(quantidadeDivs);

    const larguraDiv = `${100 / grade}%`;
    const alturaDiv = `${100 / grade}%`;

    for (let i = 0; i < quantidadeDivs; i++) {
        const div = document.createElement("div");

        div.classList.add("square");

        div.style.width = larguraDiv;
        div.style.height = alturaDiv;

        divPai.appendChild(div);
    };
};

criarDivs(quantidadeDivs);

const squareList = document.querySelectorAll(".square");

squareList.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
});