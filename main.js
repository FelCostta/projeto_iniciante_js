function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br");
    //window.location.href = "https://www.google.com.br"; ---> Esta forma é utilizada quando quer abrir o endereço na mesma página.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    alert(elemento.value);
}