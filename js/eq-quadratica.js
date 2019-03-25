// var container = document.querySelector("div#container");
var inputA = document.querySelector("input#a");
var inputB = document.querySelector("input#b");
var inputC = document.querySelector("input#c");

var btnCalc = document.querySelector("input.submit");

var divResult = document.querySelector("div.resultado");

var popup = document.querySelector(".popup");

function render(x1, x2)
{
    divResult.innerHTML = '';

    if(!(isNaN(x1)) && !(isNaN(x2)))
    {
        var pResult = document.createElement("p");
        divResult.appendChild(pResult)
        var result = document.createTextNode("x1: " + x1 + " | " + "x2: " + x2);
        pResult.appendChild(result);
    }
    else 
    {
        var pResult = document.createElement("p");
        divResult.appendChild(pResult)
        var result = document.createTextNode("RESULTADO IMPRECISO");
        pResult.appendChild(result);
        pResult.style.color = "#f30";
        pResult.style.fontWeight = "400";
        pResult.style.fontSize = "15pt";
    }
}

function calc()
{       
    var a = inputA.value;
    var b = inputB.value;
    var c = inputC.value;

    if(a!=0){
        var delta;
        var raiz;
        var x1, x2;
        
        delta = (b * b) - (4 * a * c);

        raiz = Math.sqrt(delta);

        x1 = ((b * -1) + raiz) / (2 * a);

        x2 = ((b * -1) - raiz) / (2 * a);

        
        if(!(isNaN(x1)) && !(isNaN(x2)))
        {
            console.log("x1: " + x1 + "\nx2: " + x2);
        }
        else{
            console.log("Não é um número válido!");
        }

        render(x1, x2);
    }

    // POPUP TRANSITION
    else if(a==0){
        popup.style.display = "unset";
        popup.style.opacity = "1";
        popup.style.transition = "opacity 0s ease-out";
        setTimeout(popupClear, 2300);
    }
}
function popupClear(){
    popup.style.transition = "opacity 2s ease-out";
    popup.style.opacity = "0";
    setTimeout(displayClear, 2000);
    function displayClear(){
        popup.style.display = "none";
    }
}

btnCalc.onclick = calc;