let totalPrecio = 0;
let totalElemento = 0;

function aggcarrito(id){
    let sumar = Number(document.getElementById(id).textContent);
    totalElemento ++;
    totalPrecio += sumar;

    document.getElementById('total-items').textContent = totalElemento;
    document.getElementById('total-precio').textContent = totalPrecio;
    
}