// 1. crieamo la nostra variabile "caseContainer" assegnandogli la classe case
// 2. applichiamo il ciclo for per creare i box all'interno del nostro container
// 3. aggiungiamo un'altra variabile dentro il for creando l'elemento div dentro il nostro box  
// 4. aggiungiamo alla nostra variabile una classe di css creata appositamente per il box

const caseContainer =  document.querySelector('.case');

const message = document.getElementById('output-message');

caseContainer.classList.add('bg-blue-container');

for( let i = 1 ; i <= 100 ;  i++ ){

  let box =            document.createElement('div');

  box.classList.add('box');

  box.append(i);
  
  console.log(i,'box');

  caseContainer.append(box);
  
  if(( i % 3 == 0 ) && ( i % 5 == 0 )){
  
    box.classList.add('bg-red');
    box.innerHTML = ('FizzBuzz');
  
  }else if(( i % 3 == 0 )){
      
    box.classList.add('bg-green');
    box.innerHTML = ('Fizz');
  
    } else if(( i % 5 == 0 )){
      
    box.classList.add('bg-yellow');
    box.innerHTML = ('Buzz');
  }
  
}
message.innerHTML = 'Facciamo respirare questo codice'.toUpperCase();
message.style.cssText ='fontWeight: bold;';


