import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"
import { showMassas } from "../../utils/navigate/navigate.js"
import { showModalReceita } from "../showReceitas/showModalReceitas.js"


export async function searchs(id) {
    let show = document.querySelector("#show")
    show.innerHTML = ""

    const q = query(
        collection(db, "receitas"),
        where("name", ">=", id),
        where("name", "<=", id + "\uf8ff")
    )

    const data = await getDocs(q)
    const receitas = await data.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))


    if (id == "") {
        showMassas()
        return
    }

    for (let i in receitas) {
        const divMae = document.createElement("div")
        const divSon = document.createElement('div')
        const divTitle = document.createElement("div")
        const h1Description = document.createElement("h1")
        const divImgTitle = document.createElement("div")
        const imgComida = document.createElement("img")
        const h1Name = document.createElement("h1")
        const divComida = document.createElement("div")
        const divBtn = document.createElement("div")
        const h1Btn = document.createElement("h1")
        //classes 
        divMae.classList.add("flex", 'flex-col', 'gap-3',)
        divSon.classList.add("flex", 'flex-col', 'gap-3', 'bg-[#f7f3ee]', 'rounded-xl',)
        divTitle.classList.add("flex", 'items-center', 'justify-between', 'gap-3', 'p-2')
        divComida.classList.add('w-full', 'h-50')
        imgComida.classList.add('rounded-tr-xl', 'rounded-tl-xl', 'w-full', 'h-full', 'object-cover', 'object-center')
        h1Description.classList.add('p-2', 'text-[#b15d3b]', 'font-bold')
        h1Name.classList.add('text-[#b15d3b]', 'font-bold')
        divImgTitle.classList.add('cursor-pointer')
        divBtn.classList.add('group', "flex", 'items-center', 'justify-center', 'm-2', 'p-2', 'bg-[#b15d3b]', 'rounded', 'hover:bg-[#de764c]', 'cursor-pointer', 'showModalReceitas')
        h1Btn.classList.add('text-white', 'font-bold',)

        divBtn.setAttribute('ids', receitas[i].id)
        //dados
        imgComida.src = receitas[i].imgs
        h1Name.textContent = receitas[i].name
        h1Description.textContent = receitas[i].description
        h1Btn.textContent = "Ver Receita"
        if (receitas[i].favorito == true) {
            divImgTitle.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 stroke-red-500 text-red-500">
                   <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
               </svg>
   
               `
        } else {
            divImgTitle.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-blue-500 ">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
               </svg>
               `
        }

        //estrutura
        divTitle.appendChild(h1Name)
        divTitle.appendChild(divImgTitle)
        divComida.appendChild(imgComida)
        divBtn.appendChild(h1Btn)
        divSon.appendChild(divComida)
        divSon.appendChild(divTitle)
        divSon.appendChild(h1Description)
        divSon.appendChild(divBtn)
        divMae.appendChild(divSon)

        divSon.querySelectorAll('.showModalReceitas').forEach(item => {
            item.addEventListener('click', () => {
                let id = item.getAttribute('ids')
                showModalReceita(id)

            })
        })
        show.appendChild(divMae)
    }
}