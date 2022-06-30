const formulario = document.querySelector("#forms")
formulario.addEventListener("submit" , obtener)
function obtener (){
    var numero1 = document.querySelector("#A").value
    var numero2 = document.querySelector("#B").value
    var numero3 = document.querySelector("#C").value
    var numero4 = document.querySelector("#D").value

    var ban = 0

    if(numero1 == numero2 || numero3 == numero4){
        alert(" ERROR HAY NUMEROS IGUALES ")
        ban = 1
    } else {
        if(numero1 == numero3 || numero2 == numero4){
            alert(" ERROR HAY NUMEROS IGUALES ")
            ban=1
        }else {
            if(numero2 == numero3 || numero1 == numero4){
                alert(" ERROR HAY NUMEROS IGUALES ")
                ban=1
            } 
        }
    }
    
    if(ban == 0){
        var mayor = 0
        var menor = 0
         
        var vec = [numero1 , numero2 , numero3 , numero4]
        
        //busco el mayor
        for(var x=0; x<=4 ; x++){
            if(mayor < vec[x]){
                mayor = vec[x]
            }
        }

        //busco el menor
        for(var y=0 ; y<=4 ; y++){
            if(y==0){
                menor= vec[y]
            }else {
                if(menor > vec[y]){
                    menor = vec[y]
                }
            }
        }

        alert("El numero Mayor es : "+ " " + mayor + " " + " El numero menor es : " + " " + menor)

    }

}