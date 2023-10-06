let Fcant = document.querySelector('#Fcant')
Fcant.addEventListener("submit", (e) => {
    e.preventDefault();

    const lasvocales = "aáeéiíoóuú"
    let micadena = e.target.Icant.value
    cantidad= 0

    for (x of micadena){
        if (lasvocales.includes(x.toLowerCase())){
            cantidad++
        }
    }
    Swal.fire({
        icon: 'success',
        text: 'Hay ' + cantidad + ' vocales en la cadena'
      })
})



