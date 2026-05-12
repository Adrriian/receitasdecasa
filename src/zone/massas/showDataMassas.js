import { collection, query, where, getDocs, or } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"


export async function getDataMassas(id) {
    let show = document.querySelector("#show")
    show.innerHTML = ""

    const q = query(collection(db, "receitas"), or(where("select", "==", id), where("favorito", "==", id)))
    const data = await getDocs(q)
    const receitas = data.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))

    for(let i in receitas){
        const h1 = document.createElement("h1")
        h1.innerHTML = receitas[i].name

        show.appendChild(h1)

    }
}