let btn = document.querySelectorAll("button");
let primerNum = document.querySelector('#primaryDisplay');
let segundNum = document.querySelector('#secondDisplay');
let simbol = document.querySelector('#simbolDisplay');


btn.forEach(e => {
    e.addEventListener('click', () => {
        var value = e.value;
        var valorPrimerLabel = primerNum.textContent;
        var valorSegundoLabel = segundNum.textContent;
        var valorTercerLabel = simbol.textContent;
        let resultado = 0; 
        switch (true) {
            case value == 'C' :
                limpiarDatosPlus();
                break;

            case value == '+' :
                simbol.innerText = '+';
                if (valorSegundoLabel != "") {
                    resultado = Number(valorSegundoLabel) + Number(valorPrimerLabel);
                    limpiarDatos();
                    primerNum.innerText += resultado;
                }else{
                    calculo();
                }
                break;

            case value == '-' :
                simbol.innerText = '-';
                if (segundNum.textContent != "") {
                    resultado = Number(valorSegundoLabel) - Number(valorPrimerLabelLabel);
                    limpiarDatos();
                    primerNum.innerText += resultado;
                }else{
                    calculo();
                }
                break;

            case value == '*':
                simbol.innerText = '*'
                if (segundNum.textContent != "") {
                    resultado = Number(valorSegundoLabel) * Number(valorPrimerLabel);
                    limpiarDatos();
                    primerNum.innerText += resultado;
                }else{
                    calculo();
                }
                break;

            case value == '/':
                simbol.innerText = '/';
                if (valorSegundoLabel != "") {
                    resultado = Number(valorSegundoLabel) / Number(valorPrimerLabel);
                    limpiarDatos();
                    primerNum.innerText += resultado;
                }else{
                    calculo();
                }
                break;

            case value == '=':
                resultado = eval(valorSegundoLabel + valorTercerLabel + valorPrimerLabel);
                limpiarDatosPlus();
                primerNum.innerText += resultado;
                break;
                
            default:
                primerNum.innerText += value;
            
        }
        

        
        
    })
});

const limpiarDatos = () => {
    primerNum.innerText = '';
    segundNum.innerText = '';
}

const limpiarDatosPlus = () => {
    limpiarDatos();
    simbol.innerText = "";
}

const calculo = () => {
    segundNum.innerText += primerNum.textContent;
    primerNum.innerText = "";
}
