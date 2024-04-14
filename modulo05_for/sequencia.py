def main():
    sequencia = int(input('> Digite quantos termos da sequencia voce quer? '))
    elemento = 0
    for i in range(1, sequencia + 1):
        print(f'> {i + elemento:2d}')
        elemento += i + 1


if __name__ == '__main__':
    main()
