let totalPrecio = 0;
let totalElemento = 0;

let productos = []

function vaciar(){
    totalElemento = 0;
    totalPrecio = 0;
    document.getElementById('total-items').textContent = totalElemento;
    document.getElementById('total-precio').textContent = totalPrecio;
}

function aggcarrito(p, id){
    let product_name = document.getElementById(p).textContent;
    console.log(product_name)
    productos.push(product_name);

    let sumar = Number(document.getElementById(id).textContent);
    totalElemento ++;
    totalPrecio += sumar;

    if(totalPrecio > 50){
        alert("Envío gratis aplicado!")
    }

    document.getElementById('total-items').textContent = totalElemento;
    document.getElementById('total-precio').textContent = totalPrecio;
    // let c = 0
    // for (let p of productos){
    //     c++
    //     console.log(`${c}: ${p}`)
    // }
    
}



