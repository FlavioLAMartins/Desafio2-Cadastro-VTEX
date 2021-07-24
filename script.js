
function cadastraCliente(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let cpf = document.getElementById("cpf");
    let tel = document.getElementById("tel");
    let endereco = document.getElementById("endereco");

    let data = JSON.parse(localStorage.getItem("dadosCliente"));

    if(data == null){
        localStorage.setItem("dadosCliente", "[]");
        data = [];
    }


    let infos = {
        nome: name.value,
        email: email.value,
        cpf: cpf.value,
        telefone: tel.value,
        endereço: endereco.value
    }

    data.push(infos);

    localStorage.setItem("dadosCliente", JSON.stringify(data));

    name.value = "";
    email.value = "";
    cpf.value = "";
    tel.value = "";
    endereco.value = "";

    let content = document.getElementById('botao1')

    let carregando = `<p>AGUARDE</p>`
    
    let enviado = `<p> DADOS CADASTRADOS ! </p>`

    content.innerHTML = carregando
    
    setTimeout (()=> {
        content.innerHTML = enviado
    }, 1000)

    alert("Esta página é um projeto estudantil, nenhum informação sera coletada");
}


function cadastraProduto(){
    let id = document.getElementById("id");
    let sessao = document.getElementById("sessao");
    let quantidade = document.getElementById("quantidade");
    let marca = document.getElementById("marca");
    let disponibilidade = document.getElementById("disponibilidade");

    let data = JSON.parse(localStorage.getItem("dadosProduto"));

    if(data == null){
        localStorage.setItem("dadosProduto", "[]");
        data = [];
    }
    

    let infos = {
        codigo: id.value,
        produto: sessao.value,
        quantidade: quantidade.value,
        marca: marca.value,
        estoque: disponibilidade.value
    }

    data.push(infos);

    localStorage.setItem("dadosProduto", JSON.stringify(data));

    id.value = "";
    sessao.value = "";
    quantidade.value = "";
    marca.value = "";
    disponibilidade.value = "";



    let content = document.getElementById('botao2')

    let carregando = `<p>AGUARDE</p>`
    
    let enviado = `<p> DADOS CADASTRADOS ! </p>`

    content.innerHTML = carregando
    
    setTimeout (()=> {
        content.innerHTML = enviado
    }, 1000)
    alert("Esta página é um projeto estudantil, nenhuma informação sera coletada");
}