// 1. Dados iniciais
let nome = prompt("Digite seu nome:");

// renda (com validação)
let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Digite sua renda mensal:"));
}

// quantidade de despesas (com validação)
let qtd = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));
while (isNaN(qtd)) {
    qtd = Number(prompt("Valor inválido! Digite um número entre 1 e 5:"));
}

// limite entre 1 e 5
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;


// 3. Lançamento de despesas
let totalDespesas = 0;

for (let i = 1; i <= qtd; i++) {
    let valor = Number(prompt(`Digite o valor da Despesa ${i}:`));

    while (isNaN(valor)) {
        valor = Number(prompt(`Valor inválido! Digite a Despesa ${i}:`));
    }

    totalDespesas += valor;
}


// 4. Análise
let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}


// 5. Saída final
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${mensagem}
`;

// mostrar no alert
alert(resultado);

// mostrar no console
console.log(resultado);