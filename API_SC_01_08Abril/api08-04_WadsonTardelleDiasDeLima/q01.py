import random
def montarSenha(qtd):
    contador = 0
    senha = ""
    while contador < qtd:
        contador += 1
        digito = random.randint(0, 10)
        digito_str = str(digito)
        senha += digito_str
    return senha
            
def main():
    qtd_digitos = int(input("digite a quantidade de digitos da senha: "))
    
    while True:
        senha = montarSenha(qtd_digitos)
        print(senha)

if __name__ == "__main__":
    main()
