import { dataIngredientes } from "../../zone/ingredientes/plusIngredientes.js"
import { dataPass } from "../../zone/ingredientes/plusPass.js"


let dialog = document.querySelector('#dialog')

export function showDialogs() {

    dialog.classList.remove('hidden')
    dialog.classList.add('flex')
}
export function closeDialogs() {
    let numberPass = document.querySelector("#numberPass")
    let showStuff = document.querySelector('#showStuff')
    let valueStuff = document.querySelector("#valueStuff")
    let select = document.querySelector("#select")
    let showPass = document.querySelector('#showPass')
    let valuePass = document.querySelector("#valuePass")
    let name = document.querySelector('#name')
    let pass = document.querySelector("#pass")

    showStuff.innerHTML = ""
    valueStuff.value = ""
    select.value = 'Categoria'
    showPass.innerHTML = ""
    valuePass.value = ""
    dataIngredientes.length = 0
    dataPass.length = 0
    name.value = ""

    if (dataPass.length <= 0) {
        pass.textContent = "Passo:"
        numberPassText.textContent = "1"
    }
    dialog.classList.add('hidden')
    dialog.classList.remove('flex')

}