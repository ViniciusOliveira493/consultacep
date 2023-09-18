document.getElementById("btnBuscar").addEventListener("click",
    function (e) {
        e.preventDefault();
        buscarCep();
    }
);

function buscarCep() {
    let cep = document.getElementById("txtBuscaCep").value;

    if(cep.length > 8){
        alert("CEP inválido");
        return
    }

    console.log(cep.length)
    if(cep.length < 8){
        alert("CEP inválido");
        return
    }

    consultarApi(cep);
}

function consultarApi(cep) {
    let url = "http://www.viacep.com.br/ws/"+cep+"/json/";

    console.log(url);
    
    fetch(url,{mode:'no-cors'})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)            
        }).catch((e) => console.log(e));
}