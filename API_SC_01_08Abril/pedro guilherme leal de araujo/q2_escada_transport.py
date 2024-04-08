import math

def questions():
    sexo = input("Qual seu sexo? ").lower()
    while(sexo!= "feminino"):
        print("valor invalido (feminino ou masculino)")
        sexo = input("Qual seu sexo? ").lower()
    atual_peso = float(input("Qual seu peso atual? "))
    perda_peso = float(input("Quantos quilos você quer perder? "))
    tempo_de_treino = int(input("Quantos minutos você irá treinar por dia? "))
    dias_treino = int(input("Quantos dias você irá treinar por semana? "))
    while(dias_treino>7):
        print("valor invalido")
        dias_treino = int(input("Quantos dias você irá treinar por semana? "))
    tempo_p_transpir = float(input("Qual a proporção em '%' do seu treino de transport? "))
    while(tempo_p_transpir>100):
        print("valor invalido")
        tempo_p_transpir = float(input("Qual a proporção em '%' do seu treino de transport? "))
    tempo_p_transpir = tempo_de_treino*(tempo_p_transpir/100)
    tempo_p_escad =tempo_de_treino-tempo_p_transpir



    return sexo,atual_peso,perda_peso,tempo_de_treino,dias_treino,tempo_p_transpir,tempo_p_escad


def calculo(sexo,atual_peso,perda_peso,tempo_de_treino,dias_treino,tempo_p_transpir,tempo_p_escad):
    

    calorias_correspondentes = perda_peso*7000
    if(sexo=="feminino"):
        gasto_semana_transport = math.floor(dias_treino*(tempo_p_transpir/6)*100)
        gasto_semana_escada = math.floor(dias_treino*(tempo_p_escad/8)*100)
    elif(sexo=="masculino"):
        gasto_semana_transport = math.floor(dias_treino*(tempo_p_transpir/5)*100)
        gasto_semana_escada = math.floor(dias_treino*(tempo_p_escad/7)*100)
    
    gasto_total = gasto_semana_escada+gasto_semana_transport

    print(f"Você irá precisar de aproximadamente {math.floor(calorias_correspondentes/gasto_total)} semanas para atingir seu objetivo!!")
    #print(calorias_correspondentes/gasto_semana_transport)
    print(f"Você deve fazer {tempo_p_escad} minutos de escada por dia")
    print(f"Você deve fazer {tempo_p_transpir} minutos de transport por dia")
 

sexo,atual_peso,perda_peso,tempo_de_treino,dias_treino,tempo_p_transpir,tempo_p_escad = questions()
calculo(sexo,atual_peso,perda_peso,tempo_de_treino,dias_treino,tempo_p_transpir,tempo_p_escad)
    
    