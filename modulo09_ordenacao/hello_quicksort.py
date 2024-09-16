def main():
  lista = ['Wadson', 'Iglesio', 'Isaac', 'Xama', 'Osvaldo', 'Henrique']
  listaOrdenada = quicksort(lista, criteria=lambda x:x[::-1], reverse=False)
  print(listaOrdenada)


def quicksort(values, criteria=lambda x:x, reverse=False):
  if len(values) < 2: 
    return values
  
  pivot = values[0]
  left = [i for i in values[1:] if criteria(i) < criteria(pivot)]
  right = [i for i in values[1:] if criteria(i) >= (criteria(pivot))]

  return quicksort(left, criteria, reverse) + [pivot] + quicksort(right, criteria, reverse) if not reverse else quicksort(right, criteria, reverse) + [pivot] + quicksort(left, criteria, reverse)

main()