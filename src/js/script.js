import { closeDialogs, showDialogs } from "../utils/dialog/dialog.js";

let addReceitas = document.querySelector("#addReceitas")
addReceitas.addEventListener('click', showDialogs)

let close = document.querySelector("#close")
close.addEventListener('click', closeDialogs)