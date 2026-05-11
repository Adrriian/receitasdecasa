let dialog = document.querySelector('#dialog')
export function showDialogs(){
    
    dialog.classList.remove('hidden')
   dialog.classList.add('flex')
}
export function closeDialogs(){
       dialog.classList.add('hidden')
   dialog.classList.remove('flex')
}