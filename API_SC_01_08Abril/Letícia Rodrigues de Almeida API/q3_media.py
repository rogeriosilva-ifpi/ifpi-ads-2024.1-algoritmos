
def main():    
    print('RENDIMENTO ALUNADO')  
    print("Digite [1] para FEMININO e [2] para MASCULINO e [-1] para encerrar programa.")
    
    sexo = 0
    nota = 0
    alunos = 0
    sexo_fem = 0
    sexo_masc = 0
    
   
    
    while (sexo != -1):
        sexo = int(input("Informe o sexo do aluno(a): "))
        nota = float(input("Informe a nota do aluno(a): "))     
    
    alunos += 1
        
    if sexo == '1':
        sexo_fem += 1
    elif sexo == '2':
        sexo_masc += 1
    else: 
        print('Sexo inválido')
    
        
        
        
def maior_nota_geral(alunos, nota):
    print('')


def menor_nota_geral(alunos, nota):
    print('')
        


def media_geral_turma(alunos, nota):
    print('')
    


def performance_mulheres(nota, sexo_fem):
    print('')
    
    
def performance_homens(nota, sexo_masc):
    print('')
    
          
    
    
    
main()