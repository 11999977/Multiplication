// Récuperation des données du champ de l'input

let valeur = document.querySelector("#zone");

// Ajout de l'évenement au clic

document.querySelector("#buton").addEventListener('click',maFonction);

// Etablissement de la fonction de résolution de la multiplication.

function maFonction(){
  let essai = valeur.value

  for(let i = 0 ; i<13; i++ ){
      let result = essai * i
      let ver = `
      <li>${essai} x ${i} = ${essai*i}</li>
      `
      document.querySelector("#affiche").innerHTML += ver;
  }
}







