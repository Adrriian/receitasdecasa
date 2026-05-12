import { collection, query, where, getDocs, or } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
import { db } from "../../utils/config/firebase.js"


export async function getDataMassas(id) {

    const q = query(collection(db, "receitas"), or(where("select", "==", id), where("favorito", "==", id)))
    const data = await getDocs(q)
    data.forEach((doc) => {
        console.log(doc.id, doc.data())
    })
}