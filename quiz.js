const perguntas_facil = [

    {
        pergunta: "Qual é o nome da nossa cidade?",
        opcoes: [
            { texto: "BLUMENAU", imagem: "imagens_perguntas/Blumenau" },
            { texto: "BRUSQUE", imagem: "imagem_pergunta/BRUSQUE.png" },
            { texto: "ITAJAÍ", imagem: "imagem_pergunta/ITAJAI.jpg.jpeg" }
        ],
        certa: 1
    },

    {
        pergunta: "Qual animal é o símbolo da Fenarreco?",
        opcoes: [
            { texto: "CACHORRO", imagem: "imagem_pergunta/cachorro.png" },
            { texto: "GATO", imagem: "imagem_pergunta/gato.jpg.jpeg" },
            { texto: "MARRECO", imagem: "imagem_pergunta/macaco.avif" }
        ],
        certa: 2
    },

    {
        pergunta: "Quais são as cores da bandeira de Brusque?",
        opcoes: [
            { texto: "AZUL, BRANCO E VERMELHO", imagem: "imagem_pergunta/vermelho azul branco.png" },
            { texto: "AMARELO, BRANCO E VERDE", imagem: "" },
            { texto: "ROSA, ROXO E LARANJA ", imagem: "imagem_pergunta/rosa roxo laranja.webp" }
        ],
        certa: 1
    },

    {
        pergunta: "Onde podemos ver muitos animais?",
        opcoes: [
            { texto: "SHOPPING", imagem: "imagem_pergunta/shopping.jpg.jpeg" },
            { texto: "ZOOBOTÂNICO", imagem: "imagem_pergunta/zoo.jpg.jpeg" },
            { texto: "PRAIA", imagem: "imagem_pergunta/Praia.avif" }
        ],
        certa: 1
    },

    {
        pergunta: "Onde vemos esculturas de pedra?",
        opcoes: [
            { texto: "PARQUE DAS ESCULTURAS", imagem: "imagem_pergunta/Parque das Esculturas.jpg" },
            { texto: "CINEMA", imagem: "imagem_pergunta/cinema.avif" },
            { texto: "ESCOLA", imagem: "imagem_pergunta/Escola.jpeg" }
        ],
        certa: 0
    }

];

const perguntas_medio = [

    {
        pergunta: "QUAL É A IGREJA DO CENTRO ?",
        opcoes: [
            { texto: "IGREJA DA VOVÓ", imagem: "imagem_pergunta/Igreja da Vovó.jpg" },
            { texto: "IGREJA MATRIZ", imagem: "imagem_pergunta/Igreja Matriz.jpg" },
            { texto: "IGREJA DO PAPAI", imagem: "imagem_pergunta/Igreja do Papai.jpg" }
        ],
        certa: 1
    },

    {
        pergunta: "QUAL É A FESTA FAMOSA DE BRUSQUE ?",
        opcoes: [
            { texto: "FESTA JUNINA", imagem: "imagem_pergunta/Festa Junina.jpg" },
            { texto: "CARNAVAL", imagem: "imagem_pergunta/Carnaval.jpg" },
            { texto: "FENARRECO", imagem: "imagem_pergunta/Fenarreco.jpg" }
        ],
        certa: 2
    },

    {
        pergunta: "QUAL COMIDA TÍPICA É FAMOSA ?",
        opcoes: [
            { texto: "PIZZA", imagem: "imagem_pergunta/Pizza.jpg" },
            { texto: "MARRECO COM REPOLHO", imagem: "imagem_pergunta/Marreco com Repolho.jpg" },
            { texto: "HAMBÚRGUER", imagem: "imagem_pergunta/Hamburguer.webp" }
        ],
        certa: 1
    },

    {
        pergunta: "O QUE A FÁBRICAS DAQUI FAZEM MUITO ?",
        opcoes: [
            { texto: "BRINQUEDOS", imagem: "imagem_pergunta/Brinquedos.jpg" },
            { texto: "ROUPAS", imagem: "imagem_pergunta/Roupas.jpg" },
            { texto: "DOCES", imagem: "imagem_pergunta/Doces.jpg" }
        ],
        certa: 1
    },

    {
        pergunta: "ONDE AS CRIANÇAS BRINCAM ?",
        opcoes: [
            { texto: "HOSPITAL", imagem: "" },
            { texto: "PRAÇA", imagem: "imagem_pergunta/Praça.jpeg" },
            { texto: "BANCO", imagem: "imagem_pergunta/Banco.jpeg" }
        ],
        certa: 1
    }

];

const perguntas_dificil = [

    {
        pergunta: "POR QUE BRUSUQE É A CIDADE DOS TECIDOS ?",
        opcoes: [
            { texto: "TEM MUITOS RIOS", imagem: "imagem_pergunta/Rios.jpg" },
            { texto: "FAZ ROUPAS", imagem: "imagem_pergunta/Roupas.jpg" },
            { texto: "TEM ÁRVORES", imagem: "imagem_pergunta/Tem árvore.jpg" }
        ],
        certa: 1
    },

    {
        pergunta: "QUAL BOLO FAMOSO COM FAROFA DOCE ?",
        opcoes: [
            { texto: "CUCA", imagem: "imagem_pergunta/Cuca.jpg" },
            { texto: "BOLO DE LAMA", imagem: "imagem_pergunta/Bolo de Lama.jpg" },
            { texto: "MAÇÃ", imagem: "imagem_pergunta/Maçã.jpg" }
        ],
        certa: 0
    },

    {
        pergunta: "COMO PASSEAVAM ANTIGAMENTE ?",
        opcoes: [
            { texto: "AVIÃO", imagem: "imagem_pergunta/aviao.avif" },
            { texto: "CARROÇA", imagem: "imagem_pergunta/carroça.avif" },
            { texto: "FOGUETE", imagem: "imagem_pergunta/foguete.png" }
        ],
        certa: 1
    },

    {
        pergunta: "O QUE O MARRECO USA NA CABEÇA ?",
        opcoes: [
            { texto: "CAPACETE", imagem: "imagem_pergunta/capacete.png" },
            { texto: "CHAPÉU", imagem: "imagem_pergunta/chapeu.png" },
            { texto: "PANELA", imagem: "imagem_pergunta/panela.png" }
        ],
        certa: 1
    },

    {
        pergunta: "QUAL ANIMAL VEMOS NO ZOO ?",
        opcoes: [
            { texto: "MACACO", imagem: "imagem_pergunta/macaco.avif" },
            { texto: "TARTARUGA", imagem: "imagem_pergunta/tartaruga.jpg.jpeg" },
            { texto: "PINGUIM", imagem: "imagem_pergunta/pinguim.jpeg" }
        ],
        certa: 0
    }

];


let lista = [];
let atual = 0;
let pontos = 0;


function iniciar() {

    if (NIVEL === "facil") {
        lista = perguntas_facil;
    }
    else if (NIVEL === "medio") {
        lista = perguntas_medio;
    }
    else {
        lista = perguntas_dificil;
    }

    lista.sort(() => Math.random() - 0.5);

    mostrar();
}

function mostrar() {

    let dados = lista[atual];

    document.getElementById("texto-pergunta").innerText =
        (atual + 1) + ") " + dados.pergunta;

    let caixa = document.getElementById("caixa-opcoes");

    caixa.innerHTML = "";

    dados.opcoes.forEach((opcao, i) => {

        let div = document.createElement("div");

        div.className = "option";

        div.innerHTML = `
            <div class="option-card">
                <img src="${opcao.imagem}">
            </div>

            <div class="option-label">
                ${opcao.texto}
            </div>
        `;

        div.onclick = function () {

            if (i === dados.certa) {
                pontos++;
            }

            atual++;

            if (atual < lista.length) {

                mostrar();

            } else {

                finalizar();

            }
        };

        caixa.appendChild(div);

    });

}


function finalizar() {

    let porcentagem =
        (pontos / lista.length) * 100;

    if (porcentagem >= 90) {

        window.location.href = "90acerto.html";

    } else {

        window.location.href = "50acerto.html";

    }

}

window.onload = iniciar;