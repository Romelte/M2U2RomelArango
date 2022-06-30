const formulario = document.querySelector("#forms");
 formulario.addEventListener("submit" , obtener )

function obtener() {
    var nombre = document.querySelector("#nombre").value
    var materia = document.querySelector("#materia").value
    var valor = document.querySelector("#valor").value
    
    var costo = materia*valor
    var desc = costo*0.20
    var valorf = costo - desc
    var valorf = valorf + 28000

    alert(" El Costo total es :" + " " + valorf);
};

