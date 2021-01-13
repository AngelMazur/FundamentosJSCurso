function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 3600 * 24
  const diferencia = Math.abs(fecha1 - fecha2) //las fechas son expresadas en ms
  //Math.abs: Da un número absoluto, si da un num negativo lo transforma a positivo
  return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1990, 1, 11)

let result = diasEntreFechas(hoy, nacimiento)
alert(`Días entre que nací y hoy: ${result}`)
let años = Math.round(result / 365)
//Math.round: redondea el número
alert(`Tengo ${años} años`)
