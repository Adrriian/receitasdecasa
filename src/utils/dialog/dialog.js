let dialog = document.querySelector('#dialog')
export function showDialogs(){
    
    dialog.classList.remove('hidden')
   dialog.classList.add('flex')
}
export function closeDialogs(){
    let showStuff = document.querySelector('#showStuff')
    let valueStuff = document.querySelector("#valueStuff")
    let select = document.querySelector("#select")
    let showPass = document.querySelector('#showPass')
    let valuePass = document.querySelector("#valuePass")
    let name = document.querySelector('#name')

    showStuff.innerHTML = ""
    valueStuff.value = ""
    select.value = 'Categoria'
    showPass.innerHTML = ""
    valuePass.value = ""
    name.value = ""

    dialog.classList.add('hidden')
    dialog.classList.remove('flex')
}