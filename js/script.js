// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

//-------------PRIMA SOLUZIONE-------------
// 1. stampiamo i numeri da 1 a 100
for (var i = 1; i < 100; i++){
    // console.log(i);

    // 2. verificare SE multipli di 3 o 5 o entrambi e aggiungere Fit o Buzz
    if (i % 3 == 0 && i % 5 == 0){
        var msg = i + ' - FizzBuzz';
    } else if (i % 3 == 0){
        var msg = i + ' - Fizz';
    } else if (i % 5 == 0){
        var msg = i + ' - Buzz';
    } else {
        var msg = i;
    }

    document.getElementById('risultato').innerHTML += msg + '<br>';
}




//-------------SOLUZIONE ALTERNATIVA-------------
// 1. stampiamo i numeri da 1 a 100
for (var i = 1; i < 100; i++){

    // 2. verificare SE multipli di 3 o 5 o entrambi e aggiungere Fit o Buzz
    
    var msg = i;

    // Verifico se numero è multiplo di 3
    if (i % 3 == 0){
        msg += 'Fizz';
    }

    // verifico se numero è multiplo di 5
    if(i % 5 == 0){
        msg += 'Buzz';
    }

    document.getElementById('risultato').innerHTML += msg + '<br>';
}