def main():
    
    print('Programa de Perda de Peso\n-------------')

    sexo = str(input('Qual seu Sexo ( M ou F) : ')).upper()
    peso_atual = float(input('Qual seu Peso Atual : '))
    perda_quilos = float(input('Quantos Quilos Deseja Perder : '))
    dias_semana = int(input('Quantos Dias de Treino por Semana : '))
    minutos_dia = int(input('Quanto Tempo de Treino por Dia ( Minutos ) : '))
    proporçao_transport = int(input('Qual a Proporçao de Tempo para Transporte ( Porcentagem ) : '))
    proporçao_escada = 100 - proporçao_transport
    total_calorias_perder = perda_quilos * 7000
    
    calorias_por_semana = 0
    semanas_totais = 0
    while calorias_por_semana < total_calorias_perder:
        semanas_totais += 1
        if sexo == 'M':
            tempo_transport = (minutos_dia / 100) * proporçao_transport
            tempo_escada = (minutos_dia / 100) * proporçao_escada
            calorias_por_dia = (20 * tempo_transport) + (14.3 * tempo_escada)
            calorias_por_semana += calorias_por_dia * dias_semana
        elif sexo == 'F':
            tempo_transport = (minutos_dia / 100) * proporçao_transport
            tempo_escada = (minutos_dia / 100) * proporçao_escada
            calorias_por_dia = (16.67 * tempo_transport) + (12.5 * tempo_escada)
            calorias_por_semana += calorias_por_dia * dias_semana
 
    print(f'''====== RELATORIO ======
    Minutos de Transport por Dia : {tempo_transport} Minutos
    Minutos de Escada por Dia : {tempo_escada} Minutos
    Semanas Necessárias para Atingir a Meta : {semanas_totais} Semanas''')

main()