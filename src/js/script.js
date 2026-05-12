import { closeDialogs, showDialogs } from "../utils/dialog/dialog.js";
import { showCafe, showFavoritos, showFitness, showLanches, showMassas, showNavigate, showSobremessas } from "../utils/navigate/navigate.js";
import { searchs } from "../zone/buscaInput/buscaInput.js";
import { plussStufs, plussStufsArray } from "../zone/ingredientes/plusIngredientes.js";
import { showPass, plussPass } from "../zone/ingredientes/plusPass.js";
import { saveData } from "../zone/ingredientes/save.js";

let addReceitas = document.querySelector("#addReceitas")
addReceitas.addEventListener('click', showDialogs)

let close = document.querySelector("#close")
close.addEventListener('click', closeDialogs)

let plusStuff = document.querySelector("#plusStuff")
plusStuff.addEventListener('click', plussStufsArray)

let plusPass = document.querySelector("#plusPass")
plusPass.addEventListener('click', plussPass)

let saveReceitas = document.querySelector("#saveReceitas")
saveReceitas.addEventListener('click',saveData)

let sobremessas = document.querySelector("#sobremessas")
let massas = document.querySelector("#massas")
let cafe = document.querySelector("#cafe")
let lanches = document.querySelector("#lanches")
let fitness = document.querySelector("#fitness")
let favorito = document.querySelector("#favorito")

sobremessas.addEventListener('click', showSobremessas)
massas.addEventListener('click', showMassas)
cafe.addEventListener('click', showCafe)
lanches.addEventListener('click', showLanches)
fitness.addEventListener('click', showFitness)
favorito.addEventListener('click', showFavoritos)

let search = document.querySelector("#search")
search.addEventListener('input', ()=>{
    searchs(search.value).toLowerCase()
   
})

showNavigate()
showPass()