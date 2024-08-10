print("BEM-VINDO AO ENZOAPP")

def main():
    print("=" * 20)
    var hospedagem = str(input("Vamos começar sua hospedagem. Por favor, digite S: "))
    var quantidade_single = 0
    var quantidade_duplo = 0
    var quantidade_triplo = 0
    var quantidade_quadruplo = 0
    var pessoas_cadastradas = 0
    print("=" * 20)

    if hospedagem == "S":
        var programa = 0
        while programa == 0:
            var idade = int(input("Idade desse hóspede(número zero cadastra um quarto): "))
            
            if idade < 18 or idade > 100:
                print("Idade não permitida, tente novamente.")
                var idade = int(input("Idade do hóspede: "))
            else:
                pessoas_cadastradas += 1

            if idade == 0:
                if pessoas_cadastradas == 1:
                    quantidade_single += 1
                    var hospede = int(input("Digite 0 se pararemos aqui: "))
                elif pessoas_cadastradas == 2:
                    quantidade_duplo += 1
                    var hospede = int(input("Digite 0 se pararemos aqui: "))
                elif pessoas_cadastradas == 3:
                    quantidade_triplo += 1
                    var hospede = int(input("Digite 0 se pararemos aqui: "))
                else:
                    quantidade_quadruplo +=1
                    var hospede = int(input("Digite 0 se pararemos aqui: "))

                if hospede == 0:
                    programa = 1
                    const noites = int(input("Quantas noites será a reserva? "))
                    return reserva_valor(quantidade_single,quantidade_duplo,quantidade_triplo,quantidade_quadruplo,noites)
                    
def reserva_valor(n1,n2,n3,n4,n5):
    var single = n1 * n5 * 200
    var duplo = n2 * n5 * 280
    var triplo = n3 * n5 * 360
    var quadruplo = n4 * n5 * 440

    print("-=" * 25)
    print(''' Você terá de pagar {:.2f} R$ por quarto single/dia.
        Você terá de pagar {:.2f} R$ por quarto duplo/dia.
        Você terá de pagar {:.2f} R$ por quarto triplo/dia.
        Você terá de pagar {:.2f} R$ por quarto quádruplo/dia.'''.format(single,duplo,triplo,quadruplo))
    print("-=" * 25)

    var total_reserva = single + duplo + triplo + quadruplo
    print("O valor total ficou {:.2f} R$".format(total_reserva))

    var pix = total_reserva * 0.95
    var credito_sem_juros = total_reserva / 3
    var credito_com_juros = int(input("Escolha sua parcela com juros entre 3X a 12X: "))
    var credito_com_juros2 = total_reserva * 0.105 * credito_com_juros


    if credito_com_juros < 3 or credito_com_juros > 12:
        print("Inválido, tente novamente.")
        var credito_com_juros = int(input("Escolha sua parcela com juros entre 3X a 12X: "))

    print("_" * 10)
    print("Seção Extra")
    print("Pagamento do valor total via PIX = {:.2f} R$".format(pix))
    print("pagamento do valor total via CRÉDITO SEM JUROS = {:.2f} R$(Exemplo em caso de 3X, mas pode ser diminuída a parcela)".format(credito_sem_juros))
    print("Pagamento via CRÉDITO COM JUROS = {:.2f} R$".format(credito_com_juros2))
    print("_" * 10)

main()