// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const play = document.querySelector('.play');
const container = document.getElementById('container');
const gameLevel = document.getElementById("level");

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

function easy() {
   
   play.addEventListener('click', 
      
       function () {

         container.innerHTML = '';
  
        for (let i = 1; i < 101; i++) {

            // Creo le celle con un ciclo for e le aggiungo al container
        
            const cell = document.createElement('div');
            cell.classList.add('cell');
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




