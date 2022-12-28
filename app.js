
const num_maior = []
const num_menor = []
var numero = Math.floor((Math.random() * 1000) + 1)
var contador = 0
document.getElementById("btn").onclick=function(){
    if(document.getElementById("palpite").value > numero){
        num_maior.push(document.getElementById("palpite").value)
        document.getElementById("num_maior").innerHTML = num_maior.join(" / ");
        contador++
    } else if (document.getElementById("palpite").value < numero){
        num_menor.push(document.getElementById("palpite").value)
        document.getElementById("num_menor").innerHTML = num_menor.join(" / ");
        contador++
    } else {
        document.getElementById("contador").innerHTML = contador
        document.getElementById("acertou").innerHTML = numero
    }
}

var btn = document.querySelector("#recarregar");
btn.addEventListener("click", function() {
    
    location.reload();
});