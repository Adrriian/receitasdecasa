import { collection, query, where, getDocs, or, updateDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"
import { getData } from "../../zone/showReceitas/showData.js"

export async function favorites(ids) {
    let favorite = document.querySelector('.favorite')
    const q = doc(db, "receitas", ids)
    const data = await getDoc(q)
    const dados = data.data()
    if (dados.favorito == false) {
        await updateDoc(q, {
            favorito: true
        })


    } else {
        await updateDoc(q, {
            favorito: false
        })
        items.innerHTML = `olassssssssss`
    }

}