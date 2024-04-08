def main():
    
    pesoAtual=int(input('Peso atual: '))
    sexo=input('Homem(H) ou Mulher(M): ')
    QuantoQuerPerder=int(input('Quantos Kg quer perder: '))
    QtsDiasTreino=int(input('Quantos dias por semana ira treinar? '))
    TempoTreino=int(input('Quanto tempo por dia ira treinar? '))
    PorcentTransport=int(input('Quantos por cento do seu tempo ira dedicar para trasport? '))
    TransportTempo=(PorcentTransport/100)*TempoTreino
    EscadaTempo=TempoTreino-TransportTempo

    print(f'Por dia voce realizara {TransportTempo} minutos de trasport e {EscadaTempo} minutos de escada')

    quantasCal=0
    tempoNecessario=0
    quantasCalDia=0
    tempo=0
    quantoPerdeu=0
    
    if sexo=='H':
        quantasCal=4600*QuantoQuerPerder
        tempoNecessario=quantasCal*5/100
    elif sexo =="M":
        quantasCal=5000*QuantoQuerPerder
        tempoNecessario=quantasCal*6/100
    
    while quantoPerdeu<quantasCal:
        quantoPerdeu+=
    
    #ERRADAAAAA
    
    
main()
