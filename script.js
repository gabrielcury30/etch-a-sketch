// Bloco que cria múltiplas divs na div pai de acordo com a quantidade de divs
const quantidadeDivs = 256;

const criarDivs = (quantidadeDivs) => {
    const divPai = document.querySelector(".conteiner");

    for (let i = 0; i < quantidadeDivs; i++) {
        const div = document.createElement("div");

        divPai.appendChild(div);
    };
};

criarDivs(quantidadeDivs);