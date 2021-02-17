function cadastrar(){
    // Resgatar os campos 
    var campoRazao = document.getElementById("razao_social");
    var campoCNPJ = document.getElementById("cnpj");
    var campoTel1 = document.getElementById("tel1");
    var campoTel2 = document.getElementById("tel2");
    var campoEmail = document.getElementById("email");
    var campoFornece = document.getElementById("fornece");
    
    // validando dados
    var razaoSocial = campoRazao.value;
    var cnpj = campoCNPJ.value;
    var tel1 = campoTel1.value;
    var tel2 = campoTel2.value;
    var email = campoEmail.value;
    var fornece = campoFornece.value;
    
    // Processando dados
    if(razaoSocial==""){
        alertaErro("Digite o campo RAZÃO SOCIAL");
    }else if(cnpj==""){
        alertaErro("Digite o campo CNPJ");
    }else if(tel1==""){
        alertaErro("Digite o campo TEL");
    }else if(tel2==""){
        alertaErro("Digite o campo TEL");
    }else if(email==""){
        alertaErro("Digite o campo E-MAIL");
    }else if(fornece==""){
        alertaErro("Digite o campo FORNECE");
    }else{
        alertaSucesso("Fornecedor cadastrado com sucesso!");
    }
    
    // Saida de dados
    function alertaErro(msg){
        $("#alerta_erro_fornecedor .texto").html(msg);
        $("#alerta_erro_fornecedor").slideDown(400).delay(1500).slideUp(400);
    }

    function alertaSucesso(msg){
        $("#alerta_sucesso_fornecedor .texto").html(msg);
        $("#alerta_sucesso_fornecedor").slideDown(400).delay(1500).slideUp(400);
    }

    $(document).ready(function(){
        $(".mascaraTelefone").mask("(99) 99999-9999");
        $(".mascaraCNPJ").mask("99.999.999/9999-99");
    });
}
