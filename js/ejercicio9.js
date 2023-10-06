let Fanagramas = document.querySelector('#Fanagramas')
Fanagramas.addEventListener("submit", (e) => {
    e.preventDefault();

    let micadena1 = e.target.Ianagramas1.value
    let micadena2 = e.target.Ianagramas2.value


    let anagram1 = micadena1.replace(/ /g, '').toLowerCase()
    anagram1 = anagram1.split('').sort().join('')


    let anagram2 = micadena2.replace(/ /g, '').toLowerCase()
    anagram2 = anagram2.split('').sort().join('')


    if (anagram1 == anagram2) {
        Swal.fire({
            icon: 'success',
            text: 'Muy bien!! las palabras o frases son anagramas'
        })


    } else {
        Swal.fire({
            icon: 'error',
            text: 'Que mal!!as palabras o frases no son anagramas'
        })
    }
})







