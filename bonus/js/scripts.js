// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const play = document.querySelector('.play');
const container = document.getElementById('container');
const gameLevel = document.getElementById("level");
const result = document.getElementById('result');
const counter = document.getElementById('counter');
let gameOver = false;

// LIVELLO DIFFICOLTA GIOCO
gameLevel.onchange = function() {

   const choose = gameLevel.options[gameLevel.selectedIndex].text;
   console.log('You selected: ', choose);

   if (choose == 'Facile') {

      easy();
      console.log('facile');


   } else if (choose == 'Normale') {
     
      normal();
      console.log('normale');

   } else {
  
      hard();
      console.log('difficile');

   }
}


// LIVELLO FACILE
function easy() {
   
   play.addEventListener('click', 
      
       function () {
        
          container.innerHTML = '';
           // CREO LE BOMBE
           function createBombs(min, max) {
               let bombs = [];
               let i = 0;
               while (i < 16){
                  let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                  if (!bombs.includes(numRandom)){
                     bombs.push(numRandom);
                     i++;
                  }
               }
               console.log(bombs);
              return bombs;
           }
         //  RICHIAMO LE BOMBE
           const bombs = createBombs(1, 100);
  
           for (let i = 1; i < 101; i++) {
         // Creo le celle con un ciclo for e le aggiungo al container
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = [i];
            container.append(cell);
           
            // Creo l' evento che avverrà al click delle celle
            cell.addEventListener('click', 
        
               function handleClick() {
              
              if (bombs.includes(parseInt(this.innerText))) {  // SE CE LA BOMBA
                this.classList.remove('click'); //RIMUOVI LA CLASSE CLICK
                this.classList.add('bomb');//AGGIUNGI LA CLASSE BOMB
                result.innerHTML = 'Mi dispiace, hai Perso, il tuo punteggio è:' ;
                result.style.display = 'block';
                 replay.style.display = 'block';
                 gameOver = true; //PORTO A 1 GAMEOVER
                 if (gameOver == true) {
                        // mostra tutte le bombe
                    for (let i = 0; i < bombs.length; i++) {
                        console.log(bombs[i])
                        const bombCell = document.querySelectorAll(`.cell:nth-child(${bombs[i]})`);
                        bombCell.forEach(cell => cell.classList.add('bomb')); 
                    }
                 }
             
               } 
                  
              else if (!gameOver) {// verifica se gameOver è ancora false
                 this.classList.toggle('click');
                 this.removeEventListener('click', handleClick);
                  // esegui l'azione prevista
                  }
      })
        
        }
        
       })

}

function normal() {
   
   play.addEventListener('click', 
      
       function () {

         container.innerHTML = '';
  
        for (let i = 1; i < 82; i++) {

            // Creo le celle con un ciclo for e le aggiungo al container
        
            const cell = document.createElement('div');
            cell.classList.add('cell-normal');
            cell.innerHTML = [i];
            container.append(cell);
        
            // Creo l' evento che avverrà al click delle celle
            cell.addEventListener('click', 
        
               function () {
           
                 // Quando l'utente clicca su ogni cella, la cella cliccata si colora di giallo 
        
                 if (this.classList.contains('click')) {
        
                    this.classList.remove('click');
                 
                    // ed emetto un messaggio in console con il numero della cella cliccata.
                    
        
                 } else {
              
                    this.classList.add('click');  
                    console.log([i]);
                 }
              

               
                
               })
       
        }
        
          
       })


}

function hard() {
   
   play.addEventListener('click', 
      
       function () {

         container.innerHTML = '';
  
        for (let i = 1; i < 50; i++) {

            // Creo le celle con un ciclo for e le aggiungo al container
        
            const cell = document.createElement('div');
            cell.classList.add('cell-hard');
            cell.innerHTML = [i];
            container.append(cell);
        
            // Creo l' evento che avverrà al click delle celle
            cell.addEventListener('click', 
        
               function () {
           
                 // Quando l'utente clicca su ogni cella, la cella cliccata si colora di giallo 
        
                 if (this.classList.contains('click')) {
        
                    this.classList.remove('click');
                 
                    // ed emetto un messaggio in console con il numero della cella cliccata.
                    
        
                 } else {
              
                    this.classList.add('click');  
                    console.log([i]);
                 }

               
                
               })
               
        }
        
          
       })



}




