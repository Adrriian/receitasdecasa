import { collection, query, where, getDocs, or, updateDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"
import { closeDialogReceitas, showDialogReceitas } from "../../utils/dialog/dialog.js"


export async function showModalReceita(id) {
    showDialogReceitas()
    let showReceitas = document.querySelector("#showReceitas")
    showReceitas.innerHTML = ""

    const q = query(collection(db, "receitas"), where('id', '==', id))
    const data = await getDocs(q)

    const dados = data.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))


    for (let i in dados) {
        const link = dados[i].link
        let pass = dados[i].pass
        let ingredientes = dados[i].ingredientes
        
        const divMae = document.createElement("div")
        const divTitle = document.createElement("div")
        const h1Title = document.createElement("h1")
        const closeTitle = document.createElement("div")
        const divHr = document.createElement("div")
        const divVideo = document.createElement("div")
        const iframe = document.createElement("iframe")
        const divIngredientes = document.createElement("div")
        const ingredientesTitle = document.createElement("h1")
        const divShowIngredientes = document.createElement("div")
        const divPassos = document.createElement("div")
        const passosTitle = document.createElement("h1")
        const divShowPassos = document.createElement("div")

        divMae.classList.add('flex', 'flex-col', 'overflow-y-scroll')
        divTitle.classList.add('flex', 'items-center', 'justify-between', 'gap-3', 'p-3')
        h1Title.classList.add('text-[#b15d3b]', 'font-bold', 'text-xl')
        closeTitle.classList.add('group', 'cursor-pointer', 'hover:bg-[#b15d3b]', 'p-2', 'rounded-full', 'transition-all', 'ease-linear', 'duration-150')
        divHr.classList.add('border-3', 'border-[#b15d3b]', 'w-full')
        divVideo.classList.add(  'p-2', 'flex', 'flex-col', 'gap-2', 'bg-white', )
        divIngredientes.classList.add('w-full', 'h-full', 'p-2', 'flex', 'flex-col', 'gap-2',)
        ingredientesTitle.classList.add('text-[#b15d3b]', 'font-bold', 'text-md')
        divShowIngredientes.classList.add('w-full', 'h-full', 'p-2', 'flex', 'flex-col', 'gap-2','bg-white', 'rounded-xl')
        divPassos.classList.add('w-full', 'h-full', 'p-2', 'flex', 'flex-col', 'gap-2',)
        passosTitle.classList.add('text-[#b15d3b]', 'font-bold', 'text-md')
        divShowPassos.classList.add('w-full', 'h-full', 'p-2', 'flex', 'flex-col', 'gap-2','bg-white', 'rounded-xl')

        h1Title.textContent = dados[i].name
        closeTitle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-[#b15d3b] group-hover:stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> `

        if (link.includes("youtube.com")) {
            const videoId = new URL(link).searchParams.get("v")
            divVideo.innerHTML = `
                    <h1 class="text-[#b15d3b] font-bold text-md">Link do vídeo</h1>
                    <iframe
                        class="w-full h-80 rounded-xl bg-gray-700"
                        src="https://www.youtube.com/embed/${videoId}"
                        allowfullscreen>
                    </iframe>
                `

        } else if (link.includes("instagram.com")) {
           
            divVideo.innerHTML = `
                <img src="../../../public/img/img/insta.png" class="rounded-xl  h-80 bg-gray-700 object-cover"/>
                <div class="flex items-center  justify-center bg-[#b15d3b]  text-white p-2 rounded ">
                    <a 
                    href="${link}" 
                    target="_blank">
                    Ver vídeo no Instagram
                </a>
                </div>
                
                `
        } else {
          
            divVideo.innerHTML = `
                <img src="../../../public/img/img/block.png" class="rounded-xl  h-80 bg-gray-700 object-cover"/>
                <div  class="flex items-center justify-center bg-[#b15d3b]  text-white p-2 rounded  ">
                    <h1>
                        Sem Video
                    </h1>
                </div>

                `
        }

        for (let e in ingredientes) {
          
            const h1 = document.createElement("h1")
            const divIngredientess = document.createElement("div")
            divIngredientess.classList.add('bg-[#f7f3ee]','p-2','rounded-xl')
            h1.classList.add('text-[#b15d3b]', 'font-bold', 'text-md',)

            h1.textContent = ingredientes[e].description
            divIngredientess.appendChild(h1)
            divShowIngredientes.appendChild(divIngredientess)
            
        }
         for (let e in pass) {
            
            const divData = document.createElement("div")
            const passh1 = document.createElement("h1")
            const description = document.createElement("h1")

            divData.classList.add('flex', 'flex-col', 'gap-1','bg-[#f7f3ee]','p-2','rounded-xl')
            passh1.classList.add('text-[#b15d3b]', 'font-bold', 'text-md')
            description.classList.add('text-[#b15d3b]', 'font-bold', 'text-md')

            passh1.textContent = pass[e].pass + pass[e].numberPass
            description.textContent = pass[e].description

            divData.appendChild(passh1)
            divData.appendChild(description)
            divShowPassos.appendChild(divData)
        }

        
        ingredientesTitle.textContent = "Ingredientes"
        passosTitle.textContent = 'Passos'

        divTitle.appendChild(h1Title)
        divTitle.appendChild(closeTitle)
        divIngredientes.appendChild(ingredientesTitle)
        divIngredientes.appendChild(divShowIngredientes)
        divPassos.appendChild(passosTitle)
        divPassos.appendChild(divShowPassos)
        divMae.appendChild(divTitle)
        divMae.appendChild(divHr)
        divMae.appendChild(divVideo)
        divMae.appendChild(divIngredientes)
        divMae.appendChild(divPassos)

        showReceitas.appendChild(divMae)



        closeTitle.addEventListener('click', closeDialogReceitas)
    }



}