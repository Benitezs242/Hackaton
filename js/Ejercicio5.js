let Fprimo = document.querySelector('#Fprimo')
Fprimo.addEventListener("submit", (e) => {
    e.preventDefault();

    let minumero = e.target.Iprimo.value
    let divisible = 0

    for (let x = 1; x <= minumero; x++) {
        if(minumero%x == 0){
            divisible++
        }
    
    
        if (divisible>2){
            break
        }
    

    }

    
if (divisible>2){
    Swal.fire({
        icon: 'error',
        text: 'El Numero ' + minumero + '  no es Primo '
      })
    }else{
        Swal.fire({
            icon: 'success',
            text: 'El Numero ' + minumero + ' es Primo '
          })
    }
})











