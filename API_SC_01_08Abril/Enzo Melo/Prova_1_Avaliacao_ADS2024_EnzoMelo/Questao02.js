import { question } from "readline-sync";
function main(){
    const sexo = Number(question("Digite 1 se você é homem e 2 se você é mulher: "))
    
    const peso = Number(question("Digite seu peso: "))
    const kg_perder = Number(question("Quantos KG quer perder? "))
    const dias_semana = Number(question("Quantos dias por semana iŕa fazer atividade física? "))
    const tempo = Number(question("Isira o tempo,em horas,que você vai treinar: "))
    const minutagem = tempo * 60 * dias_semana
    

    const tempo_transport_homem = (100 / 5) * dias_semana
    const tempo_escada_homem = (100 / 7) * dias_semana
    const tempo_transport_mulher = (100 / 6) * dias_semana
    const tempo_escada_mulher = (100 / 8) * dias_semana
    
    const porcentagem_transport1 = Number(question("Digite a proporção de tempo para esse equipamento: "))
    const porcentagem_transport2 = porcentagem_transport1/100
    const porcentagem_escada = (100 - porcentagem_transport2)/100
    
    const semanas_objetivo_transport_homem = (minutagem * tempo_transport_homem * porcentagem_transport2) / 7
    const semanas_objetivo_escada_homem= (minutagem * tempo_escada_homem * porcentagem_escada)/ 7
    const semanas_homem = semanas_objetivo_transport_homem + semanas_objetivo_escada_homem
    
    const semanas_objetivo_transport_mulher = (minutagem * tempo_transport_mulher * porcentagem_transport2) / 7
    const semanas_objetivo_escada_mulher= (minutagem * tempo_escada_mulher * porcentagem_escada)/ 7
    const semanas_mulher = semanas_objetivo_escada_mulher + semanas_objetivo_transport_mulher

    if(sexo === 1){
        console.log("Você é homem")
        return console.log(`Seu peso é ${peso.toFixed(1)} e você deseja perder ${kg_perder.toFixed(1)} kgs.Você irá dedicar-se ${porcentagem_transport2.toFixed(2)}% do seu tempo para o Transport,que é ${tempo_transport_homem.toFixed(2)} minutos semanais, e ${porcentagem_escada.toFixed(2)}% do seu tempo para a Escada,que é ${tempo_escada_homem.toFixed(2)} minutos semanais.Nesse sentido,chegará no seu peso ideal em ${semanas_homem.toFixed(0)} semanas.`)
    }
    else if(sexo === 2){
        console.log("Você é mulher")
        
        return console.log(`Seu peso é ${peso.toFixed(1)} e você deseja perder ${kg_perder.toFixed(1)} kgs.Você irá dedicar-se ${porcentagem_transport2.toFixed(2)}% do seu tempo para o Transport,que é ${tempo_transport_mulher.toFixed(2)} minutos semanais, e ${porcentagem_escada.toFixed(2)}% do seu tempo para a Escada,que é ${tempo_escada_mulher.toFixed(2)} minutos semanais.Nesse sentido,chegará no seu peso ideal em ${semanas_mulher.toFixed(0)} semanas.`)
    }else{
        return console.log("Número inválido,tente novamente.")
    }
}
main()