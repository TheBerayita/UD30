function dni() {
    do {
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
                    'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        do {
            var num = prompt("Introduce tu número de DNI (sin la letra)");
            var l = num.length;
            if (num < 0 || num > 99999999 || l != 8 || l > 8) {
                alert("El número proporcionado no es válido");
            }
        } while (num < 0 || num > 99999999);

        var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
        letra.toUpperCase();   
        var letraCalculada = letras[num % 23];
        if(letraCalculada != letra) {
            alert("La letra proporcionada no es correcta");
        } else {
            alert("El número de DNI y su letra son correctas");
        }
    } while (letraCalculada != letra);
}