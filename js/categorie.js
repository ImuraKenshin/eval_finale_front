window.addEventListener("DOMContentLoaded",()=>{
})




// récupération de la liste des categories via le JSON / simulation d'API

let options={
    method: "GET"
}

fetch("/categories.json", options)
.then(rep=>{
    return rep.json()
})
.then(data=>{
    affichageCategorie(data)
})

// je cible la DIV qui va accueillir ma donnée
let categorie = document.querySelector(".swiper-wrapper")

// Je change le contenu de la div 
function affichageCategorie(donnees){
    donnees.forEach(donnee=>{
        categorie.innerHTML += `<div class="swiper-slide ${donnee.title}"><div class="swiper_img"><img src="/images${donnee.image}" alt="${donnee.title}"></div><p>${donnee.title}</p></div>`
    })
}


// initialisation de swiper
var swiper = new Swiper(".mySwiper", {
slidesPerView: 6,
spaceBetween: 15,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
