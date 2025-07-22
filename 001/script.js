let contador1 = 0
let contador2 = 0
let contador3 = 0




function web(){
    contador1 ++
    let contador = document.getElementById("voto-w").innerHTML = contador1;
    alert("Gracias por tu voto!")
    if (contador1 % 5 == 0){
        console.log("Acumulado Diseño web: ", contador1 )
    }
}

function js(){
    contador2 ++
    document.getElementById("voto-js").innerHTML = contador2;
    alert("Gracias por tu voto!")
    if (contador2 % 5 == 0){
        console.log("Acumulado JavaScript: ", contador2 )
    }
}

function bases(){
    contador3 ++
    let contador = document.getElementById("voto-b").innerHTML = contador3;
    alert("Gracias por tu voto!")
    if (contador3 % 5 == 0){
        console.log("Acumulado Bases de datos: ", contador3 )
    }

}