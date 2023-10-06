let FNumero = document.querySelector('#FNumero')
FNumero.addEventListener("submit", (e) => {
    e.preventDefault();
    let max = 0
    let ValorInput = e.target.iNumero.value
    let misnumeros = ValorInput.split(',')
    
    misnumeros.forEach((element) => {
        if(parseInt(element)>max){
            max=element
        }
    })
Swal.fire({
    icon: 'success',
    text: 'El número mayor obtenido es ' + max
  })
})






