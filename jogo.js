const prompt = require("prompt-sync")();

const jogos = [];

const modelo = () => {
    const nome = prompt("Nome do jogo: ");
    const ano_lancamento = prompt("Ano de lancamento: ");
    const duracao = prompt("duração média em horas: ");
    const preco = prompt("Preço: ");
    const estudio = prompt("Qual o estudio do jogo? ");
    let sequencia = -1;
    if (listar()) {
    sequencia = prompt("qual é a sequẽncia do jogo? Digite 0 se nao houver ");
    }

    if (nome != "" && ano_lancamento >= 1962 && ano_lancamento <= 2024 && duracao > 0 && preco == 0 && estudio != "" && ((sequencia >= -1 && sequencia < jogos.length) || jogos.length == 0)) {
        return {
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        };
    } else {
        console.log("Dados inválidos");
    }
};

const criar = () => {
    const jogo = modelo();

    if (jogo != undefined) {
        jogos.push();
        console.log("Jogo cadastrado com sucesso");
    }
};

const listar = () => {
    if (jogos.length == 0) {
        console.log("Nenhum jogo encontrado");
        return false;
    } else {
        jogos.forEach((jogo, indice) => {
            console.log(`
            ${indice + 1}. 
            Nome:${jogo.nome}
            Ano de lancamento: ${jogo.ano_lancamento}
            Duraçao: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequencia: ${jogo.sequencia}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    if (!listar()) {
        return;
    }

    const indice = prompt("qual o indice que deseja atualizar? ") - 1;
    const jogo = modelo();
    if (jogo != undefined && indice >= 0 && indice < jogos.length) {
        jogos[indice] = jogo
        console.log("jogo atualizado com sucesso")
    }else {
        console.log("indice invalido")
    }
};