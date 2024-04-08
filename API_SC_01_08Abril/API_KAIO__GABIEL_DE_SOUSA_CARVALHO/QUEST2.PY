def main():

    sexo = str(input('Qual o seu sexo(M/F): '))
    peso = float(input('Qual o seu peso: '))
    perder = float(input('Qual KG deseja perder: '))
    dias = int(input('Quantos dias por semana pratica: '))
    tempo = float(input('Quanto tempo voce faz atividade: '))
    transport = int(input('Quantos porcento do seu tempo voc faz o transport(%): '))

    diminuir = (peso*7000)- (perder*7000)
    escada = transport - 100
    tempo_tansport = tempo * transport^-2
    tempo_escada = tempo * escada^-2


    peso_desejado = 0
    dias_a = 0
    while peso_desejado >= diminuir:

        if sexo == 'F':

            t_t = (tempo_tansport // 6)*  100
            t_e = (tempo_escada // 8)* 100
            peso_desejado += t_e + t_t
            dias_a += 1

        elif sexo == 'M':

            t_t = (tempo_tansport // 5)*  100
            t_e = (tempo_escada // 7)* 100
            peso_desejado += t_e + t_t
            dias_a += 1
    
    semanas = dias_a/dias 

    print(f'Total de semanas para atingir sua meta:{semanas} \n Tempo que deve gastar em transport:{tempo_tansport} \n Tempo que deve gastar em escada:{tempo_escada}')

main()