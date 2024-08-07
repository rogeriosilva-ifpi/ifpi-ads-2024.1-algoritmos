def main():
    funcionarios = int(input("Numero de funcionários: "))

    for funcionario in range(funcionarios):
        matricula = input(f"ID do Funcionário {funcionario+1}: ")
        horas = int(input("Digite quantas horas esse funcionário trabalha: "))
        dependentes = int(
            input("Digite o número de dependentes desse funcionário: "))

        salbruto = horas * 120 + dependentes * 400
        inss = salbruto * 0.085
        ir = salbruto * 0.17

        print(f"""
============== Funcionário {funcionario+1} =============
Salário Bruto        : R$ {salbruto:.2f}
INSS (8.5%)          : R$ {inss:.2f}
Imposto de Renda(17%): R$ {ir:.2f}
Salário Líquido      : R$ {(salbruto-ir-inss):.2f}
\n""")


main();
