function converter(){
    const valor = document.getElementById("valor").value;
    const base_origem = document.getElementById("base_origem").value;
    const base_destino = document.getElementById("base_destino").value;
    
    let resultado;

    if (base_origem === "binario"){
        resultado = converter_binario(valor, base_destino);
    }
    else if (base_origem === "hexadecimal"){
        resultado = converter_hexadecimal(valor, base_destino);
    }   
    else if (base_origem === "octal"){
        resultado = converter_octal(valor, base_destino);
    }
    else if (base_origem === "decimal"){
        resultado = converter_decimal(valor, base_destino);
    }

    document.getElementById("resultado").value = resultado;
}

function converter_binario(valor, tipo){
    switch (tipo) {
        case "hexadecimal":
            return parseInt(valor, 2).toString(16);
        case "octal":
            return parseInt(valor, 2).toString(8);
        case "decimal":
            return parseInt(valor, 2).toString(10);
        default:
            return valor;
            break;
    }
}

function converter_hexadecimal(valor, tipo){
    switch (tipo) {
        case "binario":
            return parseInt(valor, 16).toString(2);
        case "octal":
            return parseInt(valor, 16).toString(8);
        case "decimal":
            return parseInt(valor, 16).toString(10);
        default:
            return valor;
            break;
    }
}

function converter_octal(valor, tipo){
    switch (tipo) {
        case "binario":
            return parseInt(valor, 8).toString(2);
        case "hexadecimal":
            return parseInt(valor, 8).toString(16);
        case "decimal":
            return parseInt(valor, 8).toString(10);
        default:
            return valor;
            break;
    }
}

function converter_decimal(valor, tipo){
    switch (tipo) {
        case "binario":
            return parseInt(valor, 10).toString(2);
        case "octal":
            return parseInt(valor, 10).toString(8);
        case "hexadecimal":
            return parseInt(valor, 10).toString(16);
        default:
            return valor;
            break;
    }
}