var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    // pegue a possição de pacientes 
    var paciente = pacientes[i]; 

    // pegue texto de peso 
    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent;

    // pegue  o texto altura 
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // inicia verifica se reso e valido 
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // verifica se peso e valido 
    if (!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    // veririca se altura e valida 
    if (!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    // se for valido calcule IMC
    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    
    if (peso >= 0 && peso <= 1000){
            return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}