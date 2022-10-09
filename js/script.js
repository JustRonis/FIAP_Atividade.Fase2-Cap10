function exibirPopup() {
    //alert("Digite o seu nome completo");
    var nome=prompt("Digite o seu nome completo");
    var agradecimento = nome + ', muito obrigado. Volte sempre :)'
    alert(nome + ", muito obrigado por acessar nosso site!");
    document.getElementById("agradecimento_texto").innerHTML= agradecimento;
}