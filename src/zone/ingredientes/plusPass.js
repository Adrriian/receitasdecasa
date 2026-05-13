
export let dataPass = [

]
export function showPass() {
    let pass = document.querySelector("#pass")
    let numberPass = document.querySelector("#numberPass")
    if (dataPass.length <= 0) {
        pass.textContent = "Passo:"
        numberPassText.textContent = "1"
    }
}

export async function plussPass() {
    let valuePass = document.querySelector("#valuePass")
    let pass = document.querySelector("#pass")
    let numberPassText = document.querySelector("#numberPassText")

    if (!valuePass.value) {
        alert("Adicione um ingrediente")
        return
    }

    const id = Date.now() + Math.random().toString(36).substring(2);
    await dataPass.push({
        id: id,
        pass: pass.textContent,
        numberPass: numberPassText.textContent,
        description: valuePass.value
    })

    numberPassText.textContent = await Number(dataPass[dataPass.length - 1].numberPass) + 1;
    showData()

}
export async function showData() {
    let showPass = document.querySelector('#showPass')
    showPass.innerHTML = ""

    for (let i in dataPass) {
        const divMae = document.createElement('div')
        const divSon = document.createElement('div')
        const divSvg = document.createElement('div')
        const passH1 = document.createElement('h1')
        const numberPassH1 = document.createElement('h1')
        const descriptionPass = document.createElement('p')
        const divSonTitle = document.createElement('div')

        divMae.classList.add('flex', 'flex-col', 'justify-between', 'gap-2', 'border-2', 'border-[#b15d3b]', 'p-1', 'rounded', 'bg-white',)
        divSon.classList.add('flex', 'items-center', 'justify-between', 'gap-1',)
        divSonTitle.classList.add('flex', 'items-center', 'justify-between', 'gap-1',)

        divSvg.classList.add('cursor-pointer', 'delete')
        passH1.classList.add('text-[#b15d3b]', 'font-bold',)
        numberPassH1.classList.add('text-[#b15d3b]', 'font-bold',)
        descriptionPass.classList.add('text-[#b15d3b]', 'overflow-y-scroll', 'overflow-x-hidden', 'break-words')

        passH1.textContent = dataPass[i].pass
        numberPassH1.textContent = dataPass[i].numberPass
        descriptionPass.innerText = dataPass[i].description
        divSvg.setAttribute('id', dataPass[i].id)
        divSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-[#b15d3b]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        `
        divSonTitle.appendChild(passH1)
        divSonTitle.appendChild(numberPassH1)

        divSon.appendChild(divSonTitle)
        divSon.appendChild(divSvg)

        divMae.appendChild(divSon)
        divMae.appendChild(descriptionPass)

        valuePass.value = ""

        divMae.querySelectorAll('.delete').forEach(item => {
            item.addEventListener('click', () => {
                const ids = item.getAttribute('id')
                deletePass(ids)
            })
        })
        showPass.appendChild(divMae)


    }

}

function deletePass(id) {
    let numberPassText = document.querySelector("#numberPassText")
    let showPass = document.querySelector('#showPass')
    dataPass = dataPass
        .filter(item => item.id !== id)
        .map((item, index) => ({
            ...item,
            numberPass: index + 1
        }));

    if (dataPass.length <= 0) {
        numberPassText.textContent = "1";
    } else {
        numberPassText.textContent = Number(dataPass[dataPass.length - 1].numberPass) + 1;
    }

    showPass.innerHTML = ""
    showData()
}