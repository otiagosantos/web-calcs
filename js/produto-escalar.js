var largura = document.querySelector("input#largura");
var altura = document.querySelector("input#altura");
var btnRender = document.querySelector("input#montar");
var btnCalc = document.querySelector("input#calcular");

var xValue = document.querySelector("input#valorX");

var tableInput = document.querySelector("div#tableInput");
var tableOutput = document.querySelector("div#tableOutput");

var matriz = [];

// variaveis seletoras de popup
var popup_1 = document.querySelector("#popup1");
var popup_2 = document.querySelector("#popup2");


//pega o valor de cada celula
function createDataStructure(){
    var i = 0;
    for(var row = 0; row < altura.value; row++)
    {
        for(var data = 0; data < largura.value; data++)
        {
            var celulaIndex = data + (largura.value * row);
            var teste = document.getElementById(celulaIndex);
            matriz[i] = teste.value;
            i++;
        }
    }
    console.log(matriz);
    calculateData();
}

//calcula valores da estrutura de celulas
function calculateData(){
    for(var i = 0; i < altura.value * largura.value; i++)
    {
            matriz[i] = matriz[i] * xValue.value;
    }
    console.log(matriz);
    renderOutTable();
}

//renderiza tabela com valores
function renderTable(){
    if(largura.value > 5 || largura.value <= 0)
    {
        // alert("Valor da Largura e Altura devem ser maior que 0 e menor que 6!");
        popup(1);
    }
    else if(altura.value > 5 || altura.value <= 0){
        popup(2);
    }
    else{
        btnCalc.style.color = "#D89216";
        btnCalc.onmouseover = function(){btnCalc.style.color = "#109D4F";};
        btnCalc.onmouseout = function(){btnCalc.style.color = "#D89216";};
        btnCalc.style.cursor = "pointer";

        var html = '<table>';

        for(var row = 0; row < altura.value; row++){
            html += '<tr>';

            for(var data = 0; data < largura.value; data++){
                var celulaIndex = data + (largura.value * row);

                html += '<td>';
                html += '<div class="celula">'+celulaIndex+'</div>';
                html += '<input type="tel" class="celValue" id="'+celulaIndex+'">';
                html += '</td>';
            }
            html += '</tr>';
        }
        html += '</table>';
    
        tableInput.innerHTML = html;
    }
   
}

function renderOutTable(){   
    var html = '<table>';
    var i = 0;
    for(var row = 0; row < altura.value; row++){
        html+='<tr>';
        for(var data = 0; data < largura.value; data++){
            var celulaIndex = data + (largura.value * row)
            
            html+='<td>';
            html+= matriz[i];
            i++;

            html += '<div class="celula">'+celulaIndex+'</div>';
            html+='</td>';
        }
        html+='</tr>';    
    }
    html+='</table>';
    tableOutput.innerHTML = html;
}

function popup(popNumber){
    if(popNumber == 1){
        popup_1.style.display = "unset";
        popup_1.style.opacity = "1";
        popup_1.style.transition = "opacity 0s ease-out";
        setTimeout(popupClear, 2300);
        function popupClear(){
            popup_1.style.transition = "opacity 2s ease-out";
            popup_1.style.opacity = "0";
            setTimeout(displayClear, 2000);
            function displayClear(){
                popup_1.style.display = "none";
            }
        }
    }
    else if(popNumber == 2){
        popup_2.style.display = "unset";
        popup_2.style.opacity = "1";
        popup_2.style.transition = "opacity 0s ease-out";
        setTimeout(popupClear, 3000);
        function popupClear(){
            popup_2.style.transition = "opacity 2s ease-out";
            popup_2.style.opacity = "0";
            setTimeout(displayClear, 2700);
            function displayClear(){
                popup_2.style.display = "none";
            }
        }
    }
}


btnRender.onclick = renderTable;


btnCalc.onclick = createDataStructure;