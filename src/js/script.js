import { closeDialogs, showDialogs } from "../utils/dialog/dialog.js";
import { plussStufs } from "../zone/ingredientes/plusIngredientes.js";
import { showPass, plussPass } from "../zone/ingredientes/plusPass.js";

let addReceitas = document.querySelector("#addReceitas")
addReceitas.addEventListener('click', showDialogs)

let close = document.querySelector("#close")
close.addEventListener('click', closeDialogs)

let plusStuff = document.querySelector("#plusStuff")
plusStuff.addEventListener('click', plussStufs)

let plusPass = document.querySelector("#plusPass")
plusPass.addEventListener('click', plussPass)
showPass()