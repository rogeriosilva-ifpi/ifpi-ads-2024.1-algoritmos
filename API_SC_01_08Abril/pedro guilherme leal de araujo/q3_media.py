def questions():

    i = 0
    maior = 0
    menor = 10**200-1
    not_geral= 0
    not_homen = 0
    not_mulheres = 0
    num_mulheres = 0
    num_homens = 0

    sexo = input("Digite seu sexo (F ou M): ").upper()
    while(sexo=="F" or sexo == "M"):
        i+=1
        
        nota = int(input("Qual a nota do aluno? "))
        not_geral = not_geral+nota

        if(sexo == "F"):
            not_mulheres = not_mulheres+nota
            num_mulheres +=1
        elif(sexo == "M"):
            not_homen = not_homen+nota
            num_homens+=1

        if(nota>=maior):
            maior = nota
        if(nota<=menor):
            menor = nota
        
        sexo = input("Digite seu sexo (F ou M): ").upper()
        
    
    
        
    if(0>=not_geral/i>=2):
        desempenho_turma = "Péssimo"
    elif(2>=not_geral/i>=4):
        desempenho_turma = "Ruim"
    elif(4>=not_geral/i>=7):
        desempenho_turma = "Regular"
    elif(7>=not_geral/i>=8):
        desempenho_turma = "Bom"
    elif(8>=not_geral/i>=10):
        desempenho_turma = "Excelente"

    #print(desempenho_turma)
    
    if(num_mulheres>0 and num_mulheres>0):      
        media_geral = not_geral/i
        media_homens = not_homen/(num_homens)
        media_mulheres = not_mulheres/(num_mulheres)

    print(" ")
    print(" ")
    print(f"Há {i} alunos na turma!!")
    print(f"Há {num_mulheres-1} mulheres na turma!!")
    print(f"Há {num_homens-1} homens na turma!!")
    print(" ")
    print(f"A maior nota é {maior}")
    print(f"A menor nota é {menor}")
    print(f"A média da turma é {media_geral}")
    print(f"A performace dos homens foi de {(media_homens/media_geral)*100:.2f}% em relação a média geral")
    print(f"A performace das mulheres foi de {(media_mulheres/media_geral)*100:.2f}% em relação a média geral")
    print(f"A média dos homens é {media_homens}")
    print(f"A média dos mulhers é {media_mulheres}")
    #print(f"O desempenho da turma foi {desempenho_turma}")

questions()