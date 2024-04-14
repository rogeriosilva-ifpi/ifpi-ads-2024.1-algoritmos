import { question, questionInt } from 'readline-sync';

function calcularTempoPerdaPeso(pesoAtual, caloriasNecessarias, caloriasAtividade, diasPorSemana, proporcaoTransport) {
    const caloriasExcedentesPorSemana = (caloriasNecessarias - caloriasAtividade * diasPorSemana * (proporcaoTransport / 100));
    const semanasParaPerderPeso = caloriasExcedentesPorSemana / 7000; 

    return semanasParaPerderPeso;
}

function calcularTempoAtividadePorDia(semanasParaPerderPeso, diasPorSemana, proporcaoTransport) {
    const minutosPorSemana = semanasParaPerderPeso * diasPorSemana * 7 * 24; 
    const minutosTransportPorSemana = minutosPorSemana * (proporcaoTransport / 100);
    const minutosEscadaPorSemana = minutosPorSemana - minutosTransportPorSemana;

    const minutosTransportPorDia = minutosTransportPorSemana / diasPorSemana;
    const minutosEscadaPorDia = minutosEscadaPorSemana / diasPorSemana;

    return [minutosTransportPorDia, minutosEscadaPorDia];
}

function main() {
    console.log("Calculadora de Perda de Peso");

    const pesoAtual = questionInt("Qual é o seu peso atual? ");
    const genero = question("Você é homem ou mulher? (H/M): ").toLowerCase();
    const pesoPerder = questionInt("Quantos quilos você deseja perder? ");
    const diasPorSemana = questionInt("Quantos dias por semana você irá treinar? ");
    const tempoPorDia = questionInt("Quanto tempo (em minutos) você irá treinar por dia? ");
    const proporcaoTransport = questionInt("Qual proporção (%) de tempo você alocará para o Transport? ");

    let caloriasNecessarias;
    if (genero === 'h') {
        caloriasNecessarias = 2400;
    } else if (genero === 'm') {
        caloriasNecessarias = 2000;
    } else {
        console.log("Por favor, insira um gênero válido (H ou M).");
        return;
    }

    const caloriasAtividade = (genero === 'h') ? (tempoPorDia / 5) * 100 : (tempoPorDia / 6) * 100;

    const semanasParaPerderPeso = calcularTempoPerdaPeso(pesoAtual, caloriasNecessarias, caloriasAtividade, diasPorSemana, proporcaoTransport);
    const [minutosTransportPorDia, minutosEscadaPorDia] = calcularTempoAtividadePorDia(semanasParaPerderPeso, diasPorSemana, proporcaoTransport);

    console.log(`\nPara perder ${pesoPerder}kg, você precisará de aproximadamente ${semanasParaPerderPeso.toFixed(1)} semanas.`);
    console.log(`\nEm cada dia de treino:\n- ${minutosTransportPorDia.toFixed(0)} minutos de Transport`);
    console.log(`- ${minutosEscadaPorDia.toFixed(0)} minutos de Escada`);
}

main();
