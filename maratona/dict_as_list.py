def main():
  size = int(input())
  basket = get_list(size, default='RdS')

  for key in basket:
    print(basket[key], end=' ')
  
  print()


def get_list(size, default=0):
  basket = {}
  for i in range(size):
    basket[i] = default
  return basket

main()