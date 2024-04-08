import { pede_numero_positivo, pergunta, print} from "./util.js";
function main(){
    print(`Apresente Sua Situação Atual`)

    //Entrada
    const peso_atual = pede_numero_positivo("Digite seu peso atualmente: ")
    const sexo = pergunta(`
    ================
    Digite seu Sexo:
    M - Masculino
    F - Feminino
    ================
    >>> `.toUpperCase())
    let quilos_para_perder = pede_numero_positivo("Digite quantos Kg deseja perder: ")
    const dias_de_atividade = pede_numero_positivo("Digite quantos dia por semana fará atividade:")
    const tempo_de_treino = pede_numero_positivo("Digtite quanto tempo de treino será feito(Em minutos): ")
    const porcentagem_transport = (pede_numero_positivo("Digite a porcentagem de tempo alocada para o Transport: ") / 100)

    //Processamento
    let semanas = 0
    let tempo_transport = 0
    let tempo_escada = 0
    const Transport = 0

    if(sexo === "M"){
       quilos_para_perder = (quilos_para_perder * 7000)
       tempo_transport = (quilos_para_perder * porcentagem_transport)
       tempo_transport = (tempo_transport / 100) * 5
       tempo_transport = (tempo_transport / dias_de_atividade)

       while(tempo_de_treino > tempo_transport){
        tempo_transport -= 1
       }
       tempo_escada = (quilos_para_perder * (1 - porcentagem_transport ))
       tempo_escada = (tempo_escada / 100) * 7
       tempo_escada = (tempo_transport/ dias_de_atividade)

       while(tempo_de_treino > tempo_escada){
        tempo_escada -= 1
       }
    }

    //Saida
    const final = `
    =======================================
    ----------------
    Rotina de Treino 
    ----------------
    Minutos de Transport Diarios: ${tempo_transport}
    Minutos de Escada Diarios: ${tempo_escada}
    Tempo Para Meta: semana/s
    ========================================
    `
    print(final)
}
main()