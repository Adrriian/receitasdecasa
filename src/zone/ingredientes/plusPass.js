
let dataPass = [

]
export function showPass(){
    let numberPass = document.querySelector("#numberPass")
    if(dataPass.length <= 0){
            numberPass.textContent = 1
    }
}

export function plussPass() {
    let showPass = document.querySelector('#showPass')
    let valuePass = document.querySelector("#valuePass")
    let pass = document.querySelector("#pass")
    let numberPass = document.querySelector("#numberPass")
    let dataNumberPass = numberPass.textContent

    if (!valuePass.value) {
        alert("Adicione um ingrediente")
        return
    }

    const id = Date.now() + Math.random().toString(36).substring(2);

    const divMae = document.createElement('div')
    const divSon = document.createElement('div')
    const divSvg = document.createElement('div')
    const passH1 = document.createElement('h1')
    const descriptionPass = document.createElement('p')

    divMae.classList.add('flex', 'flex-col', 'justify-between', 'gap-2', 'border-2', 'border-[#b15d3b]', 'p-1', 'rounded', 'bg-white',)
    divSon.classList.add('flex', 'items-center', 'justify-between', 'gap-1',)
    divSvg.classList.add('cursor-pointer')
    passH1.classList.add('text-[#b15d3b]', 'font-bold',)
    descriptionPass.classList.add('text-[#b15d3b]', 'overflow-y-scroll', 'overflow-x-hidden', 'break-words')

    divSvg.setAttribute('id', id)

  
    
    divSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-[#b15d3b]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
    `
    descriptionPass.innerText = valuePass.value
    divSon.appendChild(passH1)
    divSon.appendChild(divSvg)

    divMae.appendChild(divSon)
    divMae.appendChild(descriptionPass)

    dataPass.push({
        id: id,
        pass: passH1.textContent,
        description: descriptionPass.textContent
    }
    )
    divSvg.addEventListener('click', deletePass)

    showPass.appendChild(divMae)
   
    valuePass.value = ""
    function deletePass() {
    let idPass = this.id
  
    dataPass = dataPass
    .filter(item => item.id !== id)
    .map((item, index) => ({
      ...item,
      pass: `Passo: ${index + 1} `,
    }));
        console.log(dataPass)

}


    console.log(dataPass)
}
