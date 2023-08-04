
var cpf = '056930440';

    let soma = 0;
    let multiplicador = 10;
    for( let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;  
    }
    soma = (soma * 10) % 11;

    var cpf2 = cpf += soma;
    let somar = 0;
    let add = 11;
    for( let i = 0; i < 10; i++) {
        somar += cpf2[i] * add;
        add--;   
    }     
    somar = (somar * 10) % 11 ;

    
console.log("Primeiro digito",soma);
console.log("Segundo digito", somar);