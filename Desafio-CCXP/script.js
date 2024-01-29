const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const dataEventoArlequina = '01 Dec 2024'

function countDown() {
    const eventoArlequina = new Date(dataEventoArlequina)
    const dataHoje = new Date()

    const segTotal = (eventoArlequina - dataHoje)/1000
    
    const dias = Math.floor(segTotal /60 / 60 / 24)
    const horas = Math.floor(segTotal /60 / 60) % 24
    const minutos = Math.floor(segTotal / 60) % 60
    const segundos = Math.floor(segTotal) % 60

    dia.innerHTML = formatoTempo(dias)
    hora.innerHTML = formatoTempo(horas)
    minuto.innerHTML = formatoTempo(minutos)
    segundo.innerHTML = formatoTempo(segundos) 

    function formatoTempo(tempo) {
        return tempo < 10? `0${tempo}` : tempo
    }
        
}

countDown()
setInterval(countDown, 1000)

