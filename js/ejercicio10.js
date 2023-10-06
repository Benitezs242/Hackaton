let Fentero = document.querySelector('#Fentero')
Fentero.addEventListener("submit", (e) => {
    e.preventDefault();

    let limite = e.target.Ientero.value
    let misprimos = []



    for (let x=1; x <= limite; x++) {


        if(esprimo(x) == true){
            misprimos.push(x)
        }
    }
 
    
function esprimo(estenumero){
    let divisible = 0


    for (let x = 1; x <= estenumero; x++) {
        if(estenumero%x == 0){
            divisible = divisible + 1
        }  


    }


    if (divisible>2){
        return false
    }else{
        return true
    }
}
Swal.fire({
    icon: 'success',
    text: 'todos los numero primos menores o iguales a ' + limite + ' son '+ misprimos
})
})



