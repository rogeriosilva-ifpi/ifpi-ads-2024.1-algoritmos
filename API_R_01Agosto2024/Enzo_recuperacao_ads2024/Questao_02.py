print("BEM-VINDO AO ENZOAPP")

def main():
    count = 0
    count_pessoas = 0
    quanto_simples = 0
    quarto_duplo = 0
    quarto_triplo = 0
    quarto_quadruplo = 0

    while count != 1:
        idade = int(input("Por favor, digite a idade do cliente: "))
        count_pessoas += 1
        
        if idade == 0 and idade < 18 or idade > 100 and idade == 0:
            print("Essa idade não é contabilizada.")
            count_pessoas -= 1
            
        if idade == 0:
            idade = 1
            if count_pessoas != 4:
                pergunta = input("Deseja continuar(sim/nao)? ").upper()
                if pergunta == 'SIM':
                    idade = 1
                elif pergunta == 'NAO':
                    idade = 0
                else:
                    pass

            if count_pessoas == 1:
                quanto_simples += 1
                if pergunta == 'SIM':
                    print("Quarto finalizado, indo para o próximo. Digite 0 no primeiro cliente do próximo, se quiser parar().")
                count_pessoas = 0
        
            elif count_pessoas == 2:
                quarto_duplo += 1
                if pergunta == 'SIM':
                    print("Quarto finalizado, indo para o próximo. Digite 0 no primeiro cliente do próximo, se quiser parar.")
                count_pessoas = 0
               
            elif count_pessoas == 3:
                quarto_triplo += 1
                if pergunta == 'SIM':
                    print("Quarto finalizado, indo para o próximo. Digite 0 no primeiro cliente do próximo, se quiser parar.")
                count_pessoas = 0
                
            else:
                pass
            

        if count_pessoas == 4:
            print("Quarto finalizado, indo para o próximo. Digite 0 no primeiro cliente do próximo, se quiser parar.")
            print("+=" * 30)
            quarto_quadruplo += 1
            count_pessoas = 0
    
        if count_pessoas == 0 and idade == 0:
            count == 1 
            break          
    noites_reserva = int(input("Quantas noites vão ser de reserva? "))

    print(''' ===============================================
                  Preço definido por dia para quarto single = {} R$
                  Preço definido por dia para quarto duo = {} R$
                  Preço definido por dia para quarto triple = {} R$
                  Preço definido por dia para quarto quádruplo = {} R$
                  '''.format(reserva_single(noites_reserva,quanto_simples),reserva_duo(noites_reserva,quarto_duplo),reserva_trio(noites_reserva,quarto_triplo),reserva_quad(noites_reserva,quarto_quadruplo)))
            
    total = (reserva_single(noites_reserva,quanto_simples) + reserva_duo(noites_reserva,quarto_duplo) + reserva_trio(noites_reserva,quarto_triplo) + reserva_quad(noites_reserva,quarto_quadruplo)) * noites_reserva
    print(" O Total a pagar é = {:.2f} R$".format(total))

    print(''' +++++++++++++++++++++++++++++++++++++++++++++++
                  Pagando no PIX, você ganha desconto de 5% = {:.2f} R$
                  Pagando no crédito,você pode dividir em até 3X sem juros.
                  Pagando no Crédito com juros, você pode parcelar de 3X até 12X. O valor final para 12X é {:.2f} R$, por exemplo.'''.format(pagamentos_pix(total),credito_com_juros(total)))
                
def reserva_single(n,single):
    quarto_single = (single * 200) / n
    return quarto_single

def reserva_duo(n,duo): 
    quarto_duo = (duo * 280) / n
    return quarto_duo

def reserva_trio(n,triple):
    quarto_triple = (triple * 360) / n
    return quarto_triple

def reserva_quad(n,quad):
    quarto_quad = (quad * 440) / n
    return quarto_quad


def pagamentos_pix(valor):
    valor_pago = valor * 0.95
    return valor_pago

def credito_com_juros(valor):
    valor_calculado = (valor * 0.105 * 12) / 100
    return valor_calculado
   
main()