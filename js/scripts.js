const play = document.querySelector('.play');
const container = document.getElementById('container');
const result = document.getElementById('result');
const replay = document.getElementById('replay');
const counter = document.getElementById('counter');
let playCounter = 0;
let cells = []; // Variabile globale per le celle

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
   return bombs;
}

play.addEventListener('click', function () {
   container.innerHTML = '';
   const bombs = createBombs(1, 100);
   for (let i = 1; i < 101; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerHTML = [i];
      container.append(cell);
       cells.push(cell); // Salva ogni cella in `cells`
      
         
       
       cell.addEventListener('click', function () {
        
         if ( bombs.includes(parseInt(this.innerText))) {
             this.classList.add('bomb');
             result.innerHTML = 'Mi dispiace, hai Perso, il tuo punteggio è:' + playCounter;
             result.style.display = 'block';
             replay.style.display = 'block';
             
           
           }   

         else {
             playCounter++;
             this.classList.add('ok');
           }
           
       
      
      });
   }
});

replay.addEventListener('click', function () {
   result.style.display = 'none';
   replay.style.display = 'none';
   playCounter = 0;
   container.innerHTML = '';
   cells = []; // Resetta la variabile globale `cells`
});





     
       
       

    

      
 
  



      