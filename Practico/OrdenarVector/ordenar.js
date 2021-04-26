var numeros=[];

function cargarNumero(numero){

    numeros.push(parseInt(numero));
}
function solicitarNumero(){
    var numero=parseInt(document.getElementById("n1").value);
    cargarNumero(numero);
    limpiar();   
}

function limpiar(){
    document.getElementById("n1").value="";
}

function mostrarVector(){
    var imprimir="";

    for(var i=0;i<numeros.length;i++){
    imprimir=imprimir+" "+numeros[i];
    
    }
 console.log(imprimir);

}
function ordenarVectorDesc(){
var auxiliar=0;
for(var i=0;i<numeros.length-1;i++){
    for(var j=i+1;j<numeros.length;j++){
       if(numeros[i]>numeros[j]){
         auxiliar=numeros[i];
         numeros[i]=numeros[j];
         numeros[j]=auxiliar;
       }
    }
}
mostrarVector();
}