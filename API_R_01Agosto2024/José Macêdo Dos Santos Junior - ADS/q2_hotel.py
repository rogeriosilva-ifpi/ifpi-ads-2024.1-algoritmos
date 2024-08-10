# Feito por José Macêdo Dos Santos Junior
# Matrícula: 2024111TADS0038

# Questão incompleta devido ao tempo e ao enunciado confuso.

#Função principal.
def main():
    # Constantes
    DIARIA = 200
    AUMENTO = 80
    DESC_PIX = 0.05
    JUROS_CRED = 0.105

    # Processamento
    reserva = True
    contador = 0
    quarto = 1
    definitivos = 0
    
    # Reserva
    while reserva:
        acomodados = 0
        aluguel_quarto = True
        primeiro_hospede = True
        reservado= False
        
        # Quartos
        while aluguel_quarto:
            # Entrada
            print(f'\n> --- Quarto {quarto} | Pessoas acomodadas: {acomodados}')
            
            # Primeira reserva.
            if contador < 1:
                idade = int(input('> Digite a idade da pessoa (0 - Para encerrar o quarto atual):\n> '))
            
            #  Cancelamento da reserva.
            else:
                idade = int(input('> Digite a idade da pessoa (0 - Para encerrar a reserva):\n> '))
            
            # Verificação da idade do hóspede.
            if idade != 0:
                if acomodados < 3:
                    if 18 <= idade <= 100:
                        acomodados += 1
                        reservado = True
                        if acomodados > 0:
                            primeiro_hospede = False
                    else:
                        print('\n> Idade não atende os critérios da reserva.')
                        continue
                else:
                    print('\n> Limite de hóspede por quarto alcançado, iniciando um novo quarto.')
                    aluguel_quarto = False
            else:
                aluguel_quarto = False
                if primeiro_hospede:
                    contador += 1
        
        quarto += 1
        if contador == 2:
            reserva = False
        if reservado:
            definitivos += 1
    
    # Exibição
    if definitivos != 0:
        noites = int(input(f'''\n> --- Quartos reservados: {definitivos}
> Quantas noites deseja passar?\n> '''))
        print(f'''\n> --- Recibo
> Valor total por dia -------------------- []
> Valor total da reserva ----------------- []
> Valor via PIX (5% de desconto)---------- []
> Valor via Crédito 3x (sem juros) ------- []
> {'-' * 50}''')
    else:
        print('\n> Reserva cancelada.')


if __name__ == '__main__':
    main()
