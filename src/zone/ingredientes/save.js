import { db } from "../../utils/config/firebase.js";
import { dataIngredientes, plussStufs } from "./plusIngredientes.js";
import { dataPass, showData, showPass } from "./plusPass.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

export async function saveData() {
    let select = document.querySelector('#select')
    let name = document.querySelector('#name')
    let link = document.querySelector('#link')
    let img = document.querySelector('#img')
     let description = document.querySelector('#description')
    const API_KEY = "2cc9bc81af8967580d318d107a44ad97"

    if (!name.value || !link.value ||!description.value || !img.value || select.value === "Categoria" || dataIngredientes.length <= 0 || dataPass.length <= 0) {
        alert('adicione os dados')
    }else if(!description.value){
        alert("Adicione a Descrição Da Receita")
        return
    }else if (!name.value) {
        alert("Adicione o Nome Da Receita")
        return
    } else if (!link.value) {
        alert("Adicione o Link Da Receita")
        return
    } else if (!img.value) {
        alert("Adicione a Imagem Da Receita")
        return

    } else if (select.value === "Categoria") {
        alert("Adicione a Categoria Da Receita")
        return
    } else if (dataIngredientes.length <= 0) {
        alert("Adicione os Ingredientes Da Receita")
        return
    } else if (dataPass.length <= 0) {
        alert("Adicione os Passos Da Receita")
        return
    }

    try {
        const file = img.files[0]
        const formData = new FormData()

        formData.append("image", file)

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
            method: "POST",
            body: formData
        })

        const data = await response.json()
        const imageUrl = data.data.url

        const ref = await addDoc(collection(db, "receitas"), {
            name: name.value,
            link: link.value,
            description: description.value,
            imgs: imageUrl,
            select: select.value,
            ingredientes: dataIngredientes,
            pass: dataPass,
            favorito: false
        })

        name.value = ""
        link.value = ""
        img.value = ""
        select.value === "Categoria"
        dataIngredientes.length = 0
        dataPass.length = 0
        plussStufs()
        showData()
        showPass()

        alert("Receita Salva Com Sucesso")
    } catch (error) {
        console.log(error)
    }
}
