import * as utils from '../utils/io_utils.js';

function main(){
  let movies = [];
  let escolha = 1
  while (escolha !== 0) {
    showMenu();
    escolha = utils.get_number_in_range("Escolha: ",0,3);
    movies = executar(escolha, movies)
  }
}

function showMenu(){
  utils.print(`======== ROGER MOVIES =======
  1 - Cadastrar filme
  2 - Listar filmes
  3 - Remover um filme da lista
    
  0 - Sair`)
}

function executar(escolha, lista){
  if (escolha == 1){
    let new_movie = createMovie()
    lista.push(new_movie)
    console.log("Filme cadastrado com sucesso!")
  } else if (escolha == 2){
    listar_movies(lista);
  } else if (escolha == 3){
    lista = remover_movie(lista);
    console.log("Filme removido com sucesso!")
  }
  utils.enter_to_continue();
  utils.clear_screen();
  return lista;
}

function createMovie(){
  let movie = {}
  movie["nome"] = utils.get_text("Nome: ");
  movie["ano"] = utils.get_number("Ano de lancamento: ")
  movie["IMDB"] = utils.get_number("Nota na IMDB: ")
  movie["bilheteria"] = utils.get_number("Arrecadação: "); 
  return movie;
}

function listar_movies(movies){
  for (let i = 0; i < movies.length; i++){
    let movie = movies[i];
    console.log(`${i+1} - Nome: ${movie["nome"]} | Ano: ${movie["ano"]}`); 
  }
}

function remover_movie(movies){
  listar_movies(movies);
  let auxMovies = []
  let escolhaRemover = utils.get_number_in_range("Qual filme deseja remover? ",1,movies.length)
  for (let i=0; i < movies.length; i++){
    if (i+1 == escolhaRemover){
      continue;
    }
    auxMovies.push(movies[i]);
  }
  return auxMovies;
}

main();