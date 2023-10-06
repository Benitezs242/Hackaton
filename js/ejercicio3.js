let FText = document.querySelector('#FText')
FText.addEventListener("submit", (e) => {
    e.preventDefault();

    let micadena = e.target.iText.value
    let mispalabras = micadena.split(' ')
    mispalabras.sort()

    Swal.fire({
        icon: 'success',
        text: 'El orden de tu cadena es ' + mispalabras
      })
})




