import { collection, query, where, getDocs, or } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"


export async function getData(id) {
    let show = document.querySelector("#show")
    show.innerHTML = ""

    const q = query(collection(db, "receitas"), or(where("select", "==", id), where("favorito", "==", id)))
    const data = await getDocs(q)
    const receitas = data.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))

    for(let i in receitas){
        const divMae = document.createElement("div")
        const divSon = document.createElement('div')
        const divTitle = document.createElement("div")
        const h1Description = document.createElement("h1")
        const divImgTitle = document.createElement("div")
        const imgComida = document.createElement("img")
        const h1Name = document.createElement("h1")

        //classes 
        divMae.classList.add("flex", 'flex-col', 'gap-3')
        divSon.classList.add("flex", 'flex-col', 'gap-3', 'bg-[#b15d3b]')
        divTitle.classList.add("flex",'items-center', 'justify-between', 'gap-3','P-2')
        imgComida.classList.add('rounded-tr-xl','rounded-tl-xl')
        h1Description.classList.add('p-2')
        //dados
        imgComida.src= receitas[i].imgs
        h1Name.textContent = receitas[i].name
        h1Description.textContent = receitas[i].description

        if(receitas[i].favorito == true){
            divImgTitle.innerHTML =`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 stroke-red-500 text-red-500">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

            `
        }else{
            divImgTitle.innerHTML =`
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-blue-500 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            `
        }

        //estrutura
        divTitle.appendChild(h1Name)
        divTitle.appendChild(divImgTitle)
        divSon.appendChild(imgComida)
        divSon.appendChild(divTitle)
        divSon.appendChild(h1Description)
        divMae.appendChild(divSon)

        show.appendChild(divMae)

    }
}