// Récuperation des données du champ de l'input

let valeur = document.querySelector("#zone");
let ver = " ";
let affiche = document.querySelector("#affiche");

// Ajout de l'évenement au clic

document.querySelector("#buton").addEventListener('click',maFonction);
// Etablissement de la fonction de résolution de la multiplication.


function maFonction(){
  let essai = valeur.value
  
   if(ver == false){
    
    for(let i = 0 ; i<13; i++ ){
      let result = essai * i
      ver = `
      <li>${essai} x ${i} = ${essai*i}</li>
      `
      affiche.innerHTML += ver;
    }
    
  }
  document.getElementById('arase').addEventListener('click', efface)
     function efface(){
       affiche.remove();
       maFonction();
      } 
}
  






