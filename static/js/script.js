var tabela = document.getElementById("tableFiles");
var linhas = tabela.querySelectorAll("tr");
var netChoose = document.querySelector("#netChoose");


for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i];
    linha.addEventListener("click", function() {
        selLinha(this, false);
    });
}

function selLinha(linha, multiplos) {
    if (!multiplos) {
        var linhas_ = linha.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas_.length; i++) {
            var linha_ = linhas_[i];
            linha_.classList.remove("selecionado");
        }
    }
    linha.classList.toggle("selecionado");
    putField(linha);
}

function putField(linha) {
    let val = linha.querySelector(".nameNetLine").innerHTML;
    netChoose.value = val;
}

function ajax(){
    console.log("FUNCIONOU")
}