const perguntas_facil = [

    {
        pergunta: "Qual é o nome da nossa cidade?",
        opcoes: [
            { texto: "Blumenau", imagem: "" },
            { texto: "Brusque", imagem: "" },
            { texto: "Itajaí", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Qual animal é o símbolo da Fenarreco?",
        opcoes: [
            { texto: "Cachorro", imagem: "" },
            { texto: "Gato", imagem: "" },
            { texto: "Marreco", imagem: "" }
        ],
        certa: 2
    },

    {
        pergunta: "Quais são as cores da bandeira de Brusque?",
        opcoes: [
            { texto: "Azul Branco Vermelho", imagem: "" },
            { texto: "Amarelo Branco Verde", imagem: "" },
            { texto: "Rosa Roxo Laranja", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Onde podemos ver muitos animais?",
        opcoes: [
            { texto: "Shopping", imagem: "" },
            { texto: "Zoobotânico", imagem: "" },
            { texto: "Praia", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Onde vemos esculturas de pedra?",
        opcoes: [
            { texto: "Parque das Esculturas", imagem: "" },
            { texto: "Cinema", imagem: "" },
            { texto: "Escola", imagem: "" }
        ],
        certa: 0
    }

];

const perguntas_medio = [

    {
        pergunta: "Qual é a igreja do centro?",
        opcoes: [
            { texto: "Igreja da Vovó", imagem: "" },
            { texto: "Igreja Matriz", imagem: "" },
            { texto: "Igreja do Papai", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Qual é a festa famosa de Brusque?",
        opcoes: [
            { texto: "Festa Junina", imagem: "" },
            { texto: "Carnaval", imagem: "" },
            { texto: "Fenarreco", imagem: "" }
        ],
        certa: 2
    },

    {
        pergunta: "Qual comida típica é famosa?",
        opcoes: [
            { texto: "Pizza", imagem: "" },
            { texto: "Marreco com Repolho", imagem: "" },
            { texto: "Hambúrguer", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "O que as fábricas fazem muito?",
        opcoes: [
            { texto: "Brinquedos", imagem: "" },
            { texto: "Roupas", imagem: "" },
            { texto: "Doces", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Onde as crianças brincam?",
        opcoes: [
            { texto: "Hospital", imagem: "" },
            { texto: "Praça", imagem: "" },
            { texto: "Banco", imagem: "" }
        ],
        certa: 1
    }

];

const perguntas_dificil = [

    {
        pergunta: "Por que Brusque é Cidade dos Tecidos?",
        opcoes: [
            { texto: "Tem rios", imagem: "" },
            { texto: "Faz roupas", imagem: "" },
            { texto: "Tem árvores", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Qual bolo famoso com farofa doce?",
        opcoes: [
            { texto: "Cuca", imagem: "" },
            { texto: "Bolo de Lama", imagem: "" },
            { texto: "Maçã", imagem: "" }
        ],
        certa: 0
    },

    {
        pergunta: "Como passeavam antigamente?",
        opcoes: [
            { texto: "Avião", imagem: "" },
            { texto: "Carroça", imagem: "c" },
            { texto: "Foguete", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "O que o marreco usa na cabeça?",
        opcoes: [
            { texto: "Capacete", imagem: "" },
            { texto: "Chapéu", imagem: "" },
            { texto: "Panela", imagem: "" }
        ],
        certa: 1
    },

    {
        pergunta: "Qual animal vemos no zoo?",
        opcoes: [
            { texto: "Macaco", imagem: "" },
            { texto: "Tartaruga", imagem: "" },
            { texto: "Pinguim", imagem: "" }
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