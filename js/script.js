document.getElementById("btnBuscar").addEventListener("click",
    function (e) {
        e.preventDefault();
        buscarCep();
    }
);

document.getElementById("txtBuscaCep").addEventListener("input",
    function () {
        let cep = document.getElementById("txtBuscaCep");
        const onlyNumbers = new RegExp('^[0-9]+$');

        if((!onlyNumbers.test(cep.value)) || cep.value.length > 8){
            cep.value = cep.value.substring(0,cep.value.length-1);
        }    
    }
);

function buscarCep() {
    let cep = document.getElementById("txtBuscaCep").value;

    if(cep.length > 8){
        alert("CEP inválido");
        return
    }

    if(cep.length < 8){
        alert("CEP inválido");
        return
    }

    consultarApi(cep);
}

function consultarApi(cep) {
    let url = "https://viacep.com.br/ws/"+cep+"/json/";    
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            carregarFields(data);
        }).catch((e) => console.log(e));    
}

function  carregarFields(data){
    let txtBuscaCep = document.getElementById('txtBuscaCep');
    //txtBuscaCep.value = "";

    let txtCep = document.getElementById('txtCep');
    let txtLogr = document.getElementById('txtLogradouro');
    let txtComp = document.getElementById('txtComplemento');
    let txtBairro = document.getElementById('txtBairro');
    let txtLocal = document.getElementById('txtLocalidade');
    let txtDDD = document.getElementById('txtDDD');

    if(data.cep==undefined){
        alert("CEP não encontrado");
        return
    }

    txtCep.value = data.cep;
    txtLogr.value = data.logradouro;
    txtComp.value = data.complemento;
    txtBairro.value = data.bairro;
    txtLocal.value = data.localidade+" - "+data.uf;
    txtDDD.value = data.ddd;
}