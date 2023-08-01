 import ehUmCpf from "./valida-cpf.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo){
    if (campo.value == cpf) {
        
    }
}


