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
    console.log(dados)

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


        divTitle.classList.add('flex', 'items-center', 'justify-between', 'gap-3', 'p-3')
        h1Title.classList.add('text-[#b15d3b]', 'font-bold', 'text-xl')
        closeTitle.classList.add('group', 'cursor-pointer', 'hover:bg-[#b15d3b]', 'p-2', 'rounded-full', 'transition-all', 'ease-linear', 'duration-150')
        divHr.classList.add('border-3', 'border-[#b15d3b]', 'w-full')
        divVideo.classList.add('w-full', 'h-90','p-2','flex','flex-col','gap-2','bg-white', )
        

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
            divVideo.classList.remove('h-90')
            divVideo.classList.add('h-76')
             divVideo.innerHTML = `
                <img src="../../../public/img/img/insta.png" class="rounded-xl"/>
                <a 
                    href="${link}" 
                    target="_blank"
                    class="bg-[#b15d3b] text-center text-white px-4 py-2 rounded-xl inline-block">
                    Ver vídeo no Instagram
                </a>
                `   
        }else{
            divVideo.classList.remove('h-90')
            divVideo.classList.add('h-76')
             divVideo.innerHTML = `
                <img src="../../../public/img/img/block.png" class="rounded-xl"/>
                <h1
                    class="bg-[#b15d3b] text-center text-white px-4 py-2 rounded-xl inline-block">
                    Sem Video
                </h1>
                `   
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