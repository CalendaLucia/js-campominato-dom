// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const play = document.querySelector('.play');
const container = document.getElementById('container');
const result = document.getElementById('result');
const replay = document.getElementById('replay');


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
   
function createBombs(min, max) {
   // Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 

    let bombs = [];
    let i = 0;

    while(i < 16){

        let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
// perciò nell'array delle bombe non potranno esserci due numeri uguali.
        if(!bombs.includes(numRandom)){
            bombs.push(numRandom);
            i++;
        }

    }
    return bombs;
}

const bombs = createBombs(1, 101);
console.log(bombs)

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

        
                 if (this.classList.contains('click') || bombs.includes(parseInt(this.innerText))) {
        
                      this.classList.add('bomb');
                      result.innerHTML = 'Mi dispiace, hai Perso, il tuo punteggio è:'
                      replay.style.display = 'block';
                      
                     

                     
        
                 } else {
                  // Quando l'utente clicca su ogni cella, la cella cliccata si colora di giallo 
                    this.classList.add('click');  
                    console.log([i]);
               
                    
                 }

                
               });
        }

       })

replay.addEventListener ('click', 

       function () {

         replay.style.display = 'none';
         result.innerHTML = '';
         this.classList.remove('bomb');
         this.classList.remove('click');  
         
   

       }
        
       
       )
     
       
       

    

      
 
  



      