
// je selectionne mes articles de la categorie menu

let itemMenu = document.querySelectorAll(".itemMenu")

// je selectionne les div dans laquelles je vais mettre mes contenus

let tailleMenu = document.querySelector("taille_menu")

// pour chaques articles, je vais placer un ecouteur de clic pour afficher la div taille

itemMenu.forEach(item =>{
    item.addEventListener("click", ()=>{
        tailleMenu.classList.remove("hidden")
    })
})

// je gère l'annulation

let annule = document.querySelector(".img_annuler")

annule.addEventListener("click", ()=>{
    tailleMenu.classList.add("hidden")
})