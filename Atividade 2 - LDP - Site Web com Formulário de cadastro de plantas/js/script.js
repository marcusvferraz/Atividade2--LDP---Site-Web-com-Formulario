function salvar() {
    let form = document.getElementById("form-cadastro");
    let planta = form.planta.value;
    let especie = form.especie.value;
    let altura = form.altura.value;

    if (planta.trim() == "") {
        alert("Preencha o nome")
        return false
    }

    if (especie.trim() == "") {
        alert("Preencha a Especie")
        return false
    }


    alert(`CADASTRADO COM SUCESSO!
    Nome: ${planta} Especie: ${especie} Altura:${altura}`)

}