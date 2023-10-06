let FPoliandroma = document.querySelector('#FPoliandroma')
FPoliandroma.addEventListener("submit", (e) => {
    e.preventDefault();

    let micadena = e.target.IPoliandroma.value
    
    let palindroa = micadena.replace(/ /g,'').toLowerCase()
    let palindrob = palindroa.split('').reverse().join('')

    if (palindroa == palindrob){
    
        Swal.fire({
            icon: 'success',
            text: 'Muy bien!! la frase o palabra es un palindromo'
        })
    }else {
    
        Swal.fire({
            icon: 'success',
            text: 'Que mal!!la frase o palabra no es un palindromo'
        })
    }
})








