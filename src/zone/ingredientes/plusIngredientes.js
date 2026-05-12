export let dataIngredientes = [

]

export function plussStufsArray() {
    let valueStuff = document.querySelector("#valueStuff")
    if (!valueStuff.value) {
        alert("Adicione um ingrediente")
        return
    }

    dataIngredientes.push({
        id: Date.now() + Math.random().toString(36).substring(2),
        description: valueStuff.value
    })
    valueStuff.value = ""
    
    plussStufs()
}

export function plussStufs() {
    let showStuff = document.querySelector("#showStuff")
    showStuff.innerHTML = ""

    for (let i in dataIngredientes) {
        const div = document.createElement('div')
        const div2 = document.createElement('div')
        const h1 = document.createElement('h1')

        div.classList.add('flex', 'items-center', 'justify-between', 'gap-3', 'border-2', 'border-[#b15d3b]', 'p-1', 'rounded', 'bg-white',)
        div2.classList.add('cursor-pointer', 'delete')
        h1.classList.add('text-[#b15d3b]', 'uppercase')

        div2.setAttribute('id', dataIngredientes[i].id)
        h1.innerText = dataIngredientes[i].description
        div2.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 stroke-[#b15d3b]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
    `

        div.appendChild(h1)
        div.appendChild(div2)
        showStuff.appendChild(div)

        valueStuff.value = ""
        div.querySelectorAll('.delete').forEach(item => {
            item.addEventListener('click', () => {
                const ids = item.getAttribute('id')
                deleteStuff(ids)
            })
        })
    }
   
}


function deleteStuff(id) {
    console.log(id)
   
    const data = dataIngredientes.findIndex(item =>item.id === item.id)
    if (data !== -1) {
        dataIngredientes.splice(data, 1)
    }
    console.log(data)
    showStuff.innerHTML = ""
    plussStufs()
}