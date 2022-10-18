/* Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati) */

// GENERO TUTTI GLI ELEMENTI PER ALLENAMENTO

// array di alimenti
const foods = [
  'pane',
  'latte',
  'lievito',
  'olio',
  'aglio',
  'peperoncino',
  'farina',
  'carne',
  'uova' 
];
// prendo il .main-wrapper
const mainWrapper = document.querySelector('.main-wrapper');

//creo titoli
const h2For = document.createElement('h2');
const h2While = document.createElement('h2');

// creo ul
const ulFor = document.createElement('ul');
const ulWhile = document.createElement('ul');

// scrivo i titoli
h2For.innerHTML = 'ciclo for';
h2While.innerHTML = 'ciclo while';

// Stampo gli li con ciclo For
for(let i = 0; i < foods.length; i++) {
  // creo li
  const liFor = document.createElement('li');
  //inserisco l'alimento nell' innerHTML di li
  liFor.innerHTML = foods[i];
  //appendo li in ul
  ulFor.append(liFor);
};

// contatore per ciclo while
let c = 0;

// Stampo gli li con ciclo While
while(c < foods.length){
  // creo li
  const liWhile = document.createElement('li');
  //inserisco l'alimento nell' innerHTML di li
  liWhile.innerHTML = foods[c];
  //incremento il contatore
  c++;
  //appendo li in ul
  ulWhile.append(liWhile);
};

//appendo tutto in html
mainWrapper.append(h2For, h2While, ulFor, ulWhile);


