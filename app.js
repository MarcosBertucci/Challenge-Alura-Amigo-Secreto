// by Marcos Bertucci
let amigos = [];

function adicionarAmigo() {
    let inserirAmigo = document.querySelector('input');
    let nomeDoAmigo = inserirAmigo.value;
    if (nomeDoAmigo === ""){
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(nomeDoAmigo);
    };
inserirAmigo.value = "";
};
adicionarAmigo();

let li = document.querySelector('ul')
function listarAmigos(){
    li.innerHTML = "";
}