window.onload = function (){
    
    document.getElementById("comprobar").onclick = function(){
        let min= false;
        let mayus = false;
        let txt = document.getElementById("text").value;
        console.log(txt);
        const txtArray = txt.split("");
        console.log(txtArray);

        //comprobar si las letras son mayusculas o minisculas
        for (let index = 0; index < txtArray.length; index++) {
            if (txtArray[index] == txtArray[index].toUpperCase()){
                mayus = true;
            }
            if (txtArray[index] == txtArray[index].toLowerCase()){
                min = true;
            }
            
        }

        if (!min && mayus) {
            alert("cadena de texto formada solo por mayusculas");

        }else if(min && !mayus){
            alert("cadena de texto formada solo por minusculas");
        }else{
            alert("cadena de texto formada por mayusculas y minusculas");
        }
    

    }

}