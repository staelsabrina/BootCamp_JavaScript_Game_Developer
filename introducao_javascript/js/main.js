


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento");)
    //alert("Bem mandado");
}

function redirecionar(){
    window.open("http://linkedin/in/staelsabrina"); //redireciona abrindo uma nova aba
    window.location.href = "https://web.digitalinnovation.one/users/staelsabrina" //redireciona para o site, abrindo na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse"
    //document.getElementById("mousemove").innerHTML = "Passou o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange (elemento){
    console.log(elemento.value);
}

/* 
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    } 
    return validar;   
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

function setReplace(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Holanda"));


var d= new Date();
alert("Minutos " + d.getMinutes());
alert("Horas " + d.getHours());
alert("Dia " + d.getDay()); 
alert("Mês " + d.getMonth());



var count;
for(count=0; count <=5; count++){
    alert(count);
};


var count = 0;
while(count <5){
    console.log(count);
    count=count+1; //posso colocar count++, faz com que receba ele mesmo mais um.
};


var idade = prompt("Qual sua idade? ");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
};



var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);



var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);


var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));


var nome = "Stael Sabrina";
var idade = 33;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade+idade2);
console.log(nome);
console.log(n1 * idade);
console.log(frase.replace("Japão", "Africa do Sul"));
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Holanda"));*/
