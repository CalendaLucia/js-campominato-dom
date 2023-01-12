// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const play = document.querySelector('.play');
const container = document.getElementById('container');

play.addEventListener('click', 
      
       function () {
        
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
        
                   x
                 
                    // ed emetto un messaggio in console con il numero della cella cliccata.
                    
        
                 } else {
              
                    this.classList.add('click');  
                    console.log([i]);
                 }

               
                
               });




        
       
            
        }
        
          
       })

