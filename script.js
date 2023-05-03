const textEl = document.getElementById('text')
const vitesseText = document.getElementById('vitesse')
const text = 'Je suis entrain de lire ce texte !'
let idx = 1
let vitesse = 300 / vitesseText.value

ecrireTexte()

function ecrireTexte() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, vitesse)
}


vitesseText.addEventListener('input', (e) => vitesse = 300 / e.target.value)