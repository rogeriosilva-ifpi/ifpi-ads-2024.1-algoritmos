def main():
    ask_for_guests()


def ask_for_guests():
    zero_count = 0
    guests_count = 0

    while (zero_count < 2):
        guest_age = int(input('Qual a idade do hóspede?:_ '))

        if guest_age < 18 and guest_age != 0:
            print('Não é permitido menores de 18 anos')
            continue
        elif guest_age > 100:
            print('Não é permitido maiores de 100 anos')
            continue

        if guest_age == 0 and zero_count < 2:
            zero_count += 1
            finish_room()
            continue

        if zero_count == 2:
            break
        
        guests_count += 1

        if guests_count == 4:
            finish_room()
            continue

    
    finish_booking(guests_count)





def finish_room():
    print('\nQuarto finalizado!\n')

def finish_booking(guests):
    nights_in_hotel = int(input('Para quantas noites é a reserva:_ '))

    simple_room = 0
    double_room = 0
    triple_room = 0

    if guests == 1:
        simple_room += 1
    
    if guests >= 2 and guests < 4:
        double_room += 1

    if guests == 4:
        double_room += 1

    if guests > 4:
        rest = 0
        count = guests
        while (count % 4 > 0):
            count /= 4
            triple_room += 1

            rest = count % 4

        if rest == 1:
            simple_room += 1
        elif rest == 2:
            double_room += 1


    display_total_per_day(nights_in_hotel, simple_room, double_room, triple_room)

    return


def display_total_per_day(nights_in_hotel, simple_room, double_room, triple_room):
    tota_price_per_day = 200.0 * simple_room + 280.0 * double_room + 440.0 * triple_room
    total_price = tota_price_per_day * nights_in_hotel
    print('--------- BOOKING ---------')
    print('Total para um dia:', tota_price_per_day)
    print('Total para todos os dias:', total_price)
    print('--------- PAGAMENTO ---------')
    print("Desconto de 5% com PIX:", round((total_price - total_price * 0.05), 2))
    print("Cartão - até 3x (sem juros)", round(total_price / 3.0, 2))
    print("Cartão - 3x a 12x")
    show_installments(9, total_price - (total_price * 0.105))


def show_installments(n, value):
    for i in range(1, n):
        print(f'{i}x de {round(value / i, 2)} (com juros)')

main()