// by Marcos Bertucci
let amigos = [];


atualizarListaAmigos()


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

let lista = document.getElementById('listaAmigos');

function atualizarListaAmigos(){
    lista.innerHTML = "";
    for(i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
adicionarAmigo();

let li = document.querySelector('ul')
function listarAmigos(){
    li.innerHTML = "";

}