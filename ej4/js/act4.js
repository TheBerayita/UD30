var valores = [true, 5, false, "hola", "adios", 2];

maslargo(valores);
operaciones(valores);
istrue(valores);

function maslargo(valores){

    if(valores[3].length > valores[4].lenth){
        console.log(valoers[3] + " es mas largo con " + valores[3].length + " letras");
    }else{
        console.log(valores[4] + " es mas largo con " + valores[4].length+ " letras");
    } 

}

function operaciones(valores){

    var suma = valores[1] + valores[5];
    var resta = valores[1] - valores[5];
    var multiplicacion = valores[1] * valores[5];
    var division = valores[1] / valores[5];
    var modulo = valores[1] % valores[5];

    console.log("suma = " + suma);
    console.log("resta = "+ resta);
    console.log("multiplicaion = " +multiplicacion);
    console.log("division = " +division);
    console.log("modulo = " + modulo);

}

function istrue(valores){

    if(valores[0] == true){    
        console.log(valores[0] + " es true");
    }else{
        console.log(valores[0] + " es falso");
    }

    if(valores[2] == true){    
        console.log(valores[1] + " es true");
    }else{
        console.log(valores[2] + " es falso");
    }

}