#inacabada
def main():
    peso_atual = float(input('Seu peso atual: '))
    sexo = input('Você é homem ou mulher (H OU M)?: ').upper()
    quilos_perder = float(input('Quantos quilos você deseja perder?: '))
    dias_semana_treino = int(input('Quantos dias da semana você vai treinar?: '))
    tempo_por_dia = int(input('Quantos minutos você ira treinar por dia: '))
    tempo_transport = int(input('Quanto do seu tempo, em %, sera destinado para o TRANSPORT?: '))/100
    tempo_escada = 1 - tempo_transport

    peso_inicial = peso_atual - quilos_perder
    calorias_homem = 2400
    perder_1kg = 7000
    calorias_homem = 2000

    tempo_dia_transport = tempo_por_dia * tempo_transport
    tempo_transport_semana = tempo_dia_transport * dias_semana_treino

    tempo_dia_escada = tempo_por_dia * tempo_escada
    tempo_escada_semana = tempo_dia_escada * dias_semana_treino

    if sexo == 'H':
        while tempo_transport_semana > 0:
            tempo_transport_semana - 5
            calorias_homem = calorias_homem - 100

        while tempo_escada_semana > 0:
            tempo_escada_semana - 7
            calorias_homem = calorias_homem - 100
        

        if calorias_homem < 0:
            calorias_queimadas = calorias_homem / perder_1kg
            peso_atual = peso_atual - calorias_queimadas
            return peso_atual
        return peso_atual

    if peso_atual <= peso_inicial:
        semana = dias_semana_treino + dias_semana_treino
        return semana


        
    print(f'quantas semanas para o objetivo: {semana}')
    print(f'tempo de exercicio transport por dia:{tempo_dia_transport}')
    print(f'tempo de exercicio transport por dia: {tempo_dia_escada}')

main()