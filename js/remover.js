var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target;
    //ar paiDoAlvo  = alvoEvento.parentNode;
    //paiDoAlvo.remove(); 
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});
