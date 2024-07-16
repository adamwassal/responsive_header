let menu = document.getElementById('links')
let dropmenu = document.getElementById('dropmenu')
let closee = document.getElementsByClassName('close')
let opene = document.getElementsByClassName('open')

function openmenu() {
    menu.style.visibility = 'visible'
    dropmenu.style.display = 'block'
    for (let i = 0; i < opene.length; i++) {
        opene[i].style.display = 'none'
        closee[i].style.display = 'block'}
}

function closemenu() {
    menu.style.visibility = 'hidden'
    dropmenu.style.display = 'none'
    for (let i = 0; i < opene.length; i++) {
        opene[i].style.display = 'block'
        closee[i].style.display = 'none'}
}