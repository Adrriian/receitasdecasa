import { getData } from "../../zone/massas/showDataMassas.js"

let sobremessas = document.querySelector("#sobremessas")
let massas = document.querySelector("#massas")
let cafe = document.querySelector("#cafe")
let lanches = document.querySelector("#lanches")
let fitness = document.querySelector("#fitness")
let favorito = document.querySelector("#favorito")

export function showNavigate(){
    const id = "Massas"
    massas.classList.remove('bg-white')
    massas.classList.add('bg-[#b15d3b]', 'text-white', )
    getData(id)
}


export function showMassas(){
    const id = "Massas"
    massas.classList.add('bg-[#b15d3b]', 'text-white', )
    cafe.classList.remove('bg-[#b15d3b]', 'text-white', )
    lanches.classList.remove('bg-[#b15d3b]', 'text-white', )
    fitness.classList.remove('bg-[#b15d3b]', 'text-white', )
    favorito.classList.remove('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.add('bg-white')

    massas.classList.remove('bg-white')
    cafe.classList.add('bg-white')
    lanches.classList.add('bg-white')
    fitness.classList.add('bg-white')
    favorito.classList.add('bg-white')
    sobremessas.classList.remove('bg-[#b15d3b]', 'text-white', )
    getData(id)
}
export function showSobremessas(){
    const id = "Sobremessas"
    massas.classList.remove('bg-[#b15d3b]', 'text-white', )
    cafe.classList.remove('bg-[#b15d3b]', 'text-white', )
    lanches.classList.remove('bg-[#b15d3b]', 'text-white', )
    fitness.classList.remove('bg-[#b15d3b]', 'text-white', )
    favorito.classList.remove('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.remove('bg-white')

    massas.classList.add('bg-white')
    cafe.classList.add('bg-white')
    lanches.classList.add('bg-white')
    fitness.classList.add('bg-white')
    favorito.classList.add('bg-white')
    sobremessas.classList.add('bg-[#b15d3b]', 'text-white', )
      getData(id)
}
export function showCafe(){
    const id = "Café"
    massas.classList.remove('bg-[#b15d3b]', 'text-white', )
    cafe.classList.add('bg-[#b15d3b]', 'text-white', )
    lanches.classList.remove('bg-[#b15d3b]', 'text-white', )
    fitness.classList.remove('bg-[#b15d3b]', 'text-white', )
    favorito.classList.remove('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.add('bg-white')

    massas.classList.add('bg-white')
    cafe.classList.remove('bg-white')
    lanches.classList.add('bg-white')
    fitness.classList.add('bg-white')
    favorito.classList.add('bg-white')
    sobremessas.classList.remove('bg-[#b15d3b]', 'text-white', )
      getData(id)
}
export function showLanches(){
     const id = "Lanches"
   massas.classList.remove('bg-[#b15d3b]', 'text-white', )
    cafe.classList.remove('bg-[#b15d3b]', 'text-white', )
    lanches.classList.add('bg-[#b15d3b]', 'text-white', )
    fitness.classList.remove('bg-[#b15d3b]', 'text-white', )
    favorito.classList.remove('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.add('bg-white')

    massas.classList.add('bg-white')
    cafe.classList.add('bg-white')
    lanches.classList.remove('bg-white')
    fitness.classList.add('bg-white')
    favorito.classList.add('bg-white')
    sobremessas.classList.remove('bg-[#b15d3b]', 'text-white', )
      getData(id)
}
export function showFitness(){
     const id = "Fitness"
    massas.classList.remove('bg-[#b15d3b]', 'text-white', )
    cafe.classList.remove('bg-[#b15d3b]', 'text-white', )
    lanches.classList.remove('bg-[#b15d3b]', 'text-white', )
    fitness.classList.add('bg-[#b15d3b]', 'text-white', )
    favorito.classList.remove('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.add('bg-white')

    massas.classList.add('bg-white')
    cafe.classList.add('bg-white')
    lanches.classList.add('bg-white')
    fitness.classList.remove('bg-white')
    favorito.classList.add('bg-white')
    sobremessas.classList.remove('bg-[#b15d3b]', 'text-white', )
      getData(id)
}
export function showFavoritos(){
     const id = true
   massas.classList.remove('bg-[#b15d3b]', 'text-white', )
    cafe.classList.remove('bg-[#b15d3b]', 'text-white', )
    lanches.classList.remove('bg-[#b15d3b]', 'text-white', )
    fitness.classList.remove('bg-[#b15d3b]', 'text-white', )
    favorito.classList.add('bg-[#b15d3b]', 'text-white', )
    sobremessas.classList.add('bg-white')

    massas.classList.add('bg-white')
    cafe.classList.add('bg-white')
    lanches.classList.add('bg-white')
    fitness.classList.add('bg-white')
    favorito.classList.remove('bg-white')
    sobremessas.classList.remove('bg-[#b15d3b]', 'text-white', )
      getData(id)
}