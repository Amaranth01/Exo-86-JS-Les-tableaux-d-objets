/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [peugeot, citroen, ford], // Vos voitures dans cette propriété !
}

for (let item of voitures.collection) {
    let span = document.createElement('span');
    item.ouvrirPorte();
    document.querySelector('p').appendChild(span);
    span.innerHTML = item.color + ' ';
}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.