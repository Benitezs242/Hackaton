let Ffactor = document.querySelector('#Ffactor')
Ffactor.addEventListener("submit", (e) => {
    e.preventDefault();

    let minumero = e.target.Ifactor.value
    let factorial = 1

    for (x = 1; x <= minumero; x++) {
        factorial = factorial*x
    }

    Swal.fire({
        icon: 'success',
        text: factorial + ' es el factorial de '+ minumero
      })
})