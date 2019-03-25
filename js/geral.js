var mostrarMais = document.querySelector("span.mostrar-mais");
var textoExtra = document.querySelector("div.spoiler");
var toggle = false;

mostrarMais.onclick = function(){
    toggle = !toggle;

    if(!toggle){
        console.log("vermelho");
        textoExtra.style.display= "none";
    }
    else if(toggle){
    console.log("verde");
    textoExtra.style.display= "unset";
    }
}