const tempo = window.document.getElementById('horas');
var x = document.getElementById("select");

const relogio = setInterval(function time() {
    var date = new Date().toLocaleTimeString('pt-br');

    tempo.textContent = date;
})

function adicionar() {
    var texto = document.getElementById("entrada").value;
    if (texto == null || texto == '') {
        window.alert('campo vazio')
    }
    var option = document.createElement("option");
    option.text = texto;
    x.add(option);

}

function remover() {
    x.remove(x.selectedIndex);
    limparText();
}

function limpar() {
    var input = document.getElementById("entrada");
    var inputText = input.value;
    input.value = "";
}

function mostarSelecao() {
    var x = document.getElementById("select").value;
    document.getElementById("result").innerHTML = x;
}

function limparText() {
    var x = document.getElementById("result").value;
    document.getElementById("result").innerHTML = "";
}

