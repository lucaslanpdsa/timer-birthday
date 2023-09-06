var contador = document.getElementById("contador")

function contadorInicial(){
  const dataDoEvento = new Date('april 12, 2024, 00:00:00');
  const dataAtual = new Date
  const eventoMS = dataDoEvento.getTime()
  var atualMs = dataAtual.getTime()

  var restante = eventoMS - atualMs

  var dias = restante / 1000 / 60 / 60 /24
  var horas = dias % 1 * 24
  var minutos = horas % 1 * 60
  var segundos = minutos % 1 * 60

  contador.innerHTML = `${parseInt(dias)}d ${parseInt(horas)}h ${parseInt(minutos)}m ${parseInt(segundos)}s`
}
contadorInicial()

// essa funcao faz com que a data esteja dentro do span quando a pagina for atualizada e não prescise esperar o segundo do setInterval


setInterval( () => {
  const dataDoEvento = new Date('april 12, 2024, 00:00:00');
  const dataAtual = new Date
  const eventoMS = dataDoEvento.getTime()
  var atualMs = dataAtual.getTime()

  var restante = eventoMS - atualMs

  var dias = restante / 1000 / 60 / 60 /24
  var horas = dias % 1 * 24
  var minutos = horas % 1 * 60
  var segundos = minutos % 1 * 60

  // console.log(`${dias}d ${horas}h ${minutos}m ${segundos}s`)

  if(restante < 0 ){
    contador.innerHTML = "ja fiz meus 22 anos!"
    clearInterval()
  }else{
    contador.innerHTML = `${parseInt(dias)}d ${parseInt(horas)}h ${parseInt(minutos)}m ${parseInt(segundos)}s`
  }
  },1000
)