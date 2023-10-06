let Flarga = document.querySelector('#Flarga')
Flarga.addEventListener("submit", (e) => {
    e.preventDefault();

    let micadena = e.target.Ilarga.value
    let mispalabras = micadena.split(' ')
    let = ''
    let longitud = 0

    mispalabras.forEach(element => {

        if (element.length > longitud) {

            longitud = element.length
            lapalabra = element

            Swal.fire({
                icon: 'success',
                text: 'La palabra Mas larga es ' + lapalabra + '" con ' + longitud + ' caracteres'
      })
        }
    });
})


