window.addEventListener("DOMContentLoaded",()=>{
})

// J'ai besoin de séléctionner les éléments avec lesquelles je vais communiquer
let contenu = document.querySelector(".contenu")
let h1 = document.querySelector(".h1_borne")


let menus = document.querySelector(".menus")
let boissons = document.querySelector(".boissons")
let burgers = document.querySelector(".burgers")
let desserts = document.querySelector(".desserts")
let encas = document.querySelector(".encas")
let frites = document.querySelector(".frites")
let salades = document.querySelector(".salades")
let sauces = document.querySelector(".sauces")
let wraps = document.querySelector(".wraps")

// je récupère la donnée provenant de l'extérieur de mon application
fetch("/produits.json", options)
.then(rep=>{
    return rep.json()
})
.then(data=>{
    afficherMenu(data.menus)
    afficherBoisson(data.boissons)
    afficherBurger(data.burgers)
    afficherDessert(data.desserts)
    afficherEnca(data.encas)
    afficherFrite(data.frites)
    afficherSalade(data.salades)
    afficherSauce(data.sauces)
    afficherWrap(data.wraps)
    affichageOrigin(data.menus)
})


// Mes fonctions d'affichage
function afficherMenu(donnees){
    // penser à vider le contenu de ma DIV avant de la remplir
    contenu.innerHTML = ``

    // Je change mon titre
    h1.innerText = "Nos Menus"

    // je remplis ma DIV avec les données de mon Objet
    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article class="itemMenu">
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

// les autres fonctions sont identiques car seul le nom de l'objet (passé en paramètre dans le fetch) et le titre changent
function afficherBoisson(donnees){
    donnees.forEach(donnee => {
        contenu.innerHTML = ``

        h1.innerText = "Nos Boissons"

        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherBurger(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Burgers"
    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherDessert(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Desserts"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherEnca(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Encas"
    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherFrite(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Frites"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherSalade(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Salades"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherSauce(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Sauces"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function afficherWrap(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Wraps"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article>
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
}

function affichageOrigin(donnees){
    contenu.innerHTML = ``

    h1.innerText = "Nos Menus"

    donnees.forEach(donnee => {
        contenu.innerHTML += `
                <article class="itemMenu">
                    <div class="img_article">
                        <img src="/images${donnee.image}" alt="${donnee.nom}">
                    </div>
                    <div class="info_produit">
                        <h3>${donnee.nom}</h3>
                        <p>${donnee.prix} €</p>
                    </div>
                </article>`
    })
    
}

// j'écoute le clic sur la catégorie pour déterminer quel objet je vais utiliser
menus.addEventListener("click",()=>{
    // je place ma classe sur la catégorie ciblé
    menus.classList.add("is_selected")

    // je retire la classe sur les autres
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    // je change le contenu de la DIV
    afficherMenu()
})

// les autres écouteurs sont identiques, seul le nom de la cible change
boissons.addEventListener("click",()=>{
    boissons.classList.add("is_selected")

    menus.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherBoisson()
})

burgers.addEventListener("click",()=>{
    burgers.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherBurger()
})

desserts.addEventListener("click",()=>{
    desserts.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherDessert()
})

encas.addEventListener("click",()=>{
    encas.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherEnca()
})

frites.addEventListener("click",()=>{
    frites.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherFrite()
})

salades.addEventListener("click",()=>{
    salades.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    sauces.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherSalade()
})

sauces.addEventListener("click",()=>{
    sauces.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    wraps.classList.remove("is_selected")

    afficherSauce()
})

wraps.addEventListener("click",()=>{
    wraps.classList.add("is_selected")

    menus.classList.remove("is_selected")
    boissons.classList.remove("is_selected")
    burgers.classList.remove("is_selected")
    desserts.classList.remove("is_selected")
    encas.classList.remove("is_selected")
    frites.classList.remove("is_selected")
    salades.classList.remove("is_selected")
    sauces.classList.remove("is_selected")

    afficherWrap()
})