# ❯ python entrada.py < entrada.txt

def main():
  while True:
    try:
      numeros = list(map(int, input().split()))
    except EOFError:
      return
    
    media = sum(numeros) / len(numeros)
    print(media)

main()