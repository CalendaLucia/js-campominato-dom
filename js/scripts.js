// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const play = document.querySelector('.play');
const container = document.getElementById('container');
const result = document.getElementById('result');
const replay = document.getElementById('replay');
const counter = document.getElementById('counter');
let playCounter = 1;


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
   
function createBombs(min, max) {
   // Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 

    let bombs = [];
    let i = 0;

    while (i < 16){

        let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
// perciò nell'array delle bombe non potranno esserci due numeri uguali.
        if (!bombs.includes(numRandom)){
            bombs.push(numRandom);
            i++;
        }

    }

    return bombs;
}



play.addEventListener('click', 
      
       function () {
       
        container.innerHTML = '';
     
        const bombs = createBombs(1, 100);

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
                 this.classList.add('click');  
                 console.log([i]);

                 if ( bombs.includes(parseInt(this.innerText))) {
        
                      this.classList.add('bomb');
                      this.classList.remove('click');
                      result.innerHTML = 'Mi dispiace, hai Perso, il tuo punteggio è:' +  playCounter;
                      result.style.display = 'block';
                      replay.style.display = 'block';

                      
                 } else {

                    this.classList.add('click');
                    playCounter++;
                    console.log(playCounter);

                 }

                 

               
               });




        }

    

 });


 replay.addEventListener('click',
         
 function () {

    result.style.display = 'none';
    replay.style.display = 'none';
    playCounter = 0;
    container.innerHTML = '';
    let bombs = [];

 




});






     
       
       

    

      
 
  



      