window.onload = function (){

    document.getElementById("comprobar").onclick = function(){
        let txt = document.getElementById("text").value.toLowerCase();
        const newtxt = txt.replace(/[\W_]/g, "");
        console.log(newtxt);
        let txtRever = newtxt.split("").reverse().join("").toLowerCase();
        console.log(txtRever);

        if(newtxt === txtRever){
            alert("cadena de texto es un palindromo");
        }else{
            alert("cadena de texto no es un palindromo");
        }
    }
}