let FCadena = document.querySelector('#FCadena')
FCadena.addEventListener("submit", (e) => {
    e.preventDefault();
    let cadena = e.target.iCadena.value

        let valMay = false
        let valMin= false
        let valNum = false
        let valLen = false

let misletras = cadena.split('')

misletras.forEach((element) => {
   
    if(esNumero(element)){
        if (valNum == false){


            valNum = esNumero(element)
        }
    }else{


        if (valMay == false){


            valMay = esMayuscula(element)
        }
   
        if (valMin == false){
            valMin = esMinuscula(element)
        }
   
    }
});

valLen = longitud(cadena)




function longitud(cadena){


    return cadena.length >= 8
}


function esMayuscula(carater)
{


    return carater === carater.toUpperCase();
}


function esMinuscula(carater)
{
    return carater === carater.toLowerCase();
}  




function esNumero(carater)
{
    return Number.isInteger(parseInt(carater));
}  

 
// Swal.fire('Cadena' +valMay)

console.log('mayusc '+valMay)
console.log('minusc '+valMin)
console.log('numero '+valNum)
console.log('longi '+valLen)


if (valMay && valMin && valNum && valLen){
    Swal.fire({
        icon: 'success',
        text: 'La cadena cumple las condiciones'
      })
}else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La cadena no cumple las condiciones'
      })
}
})
