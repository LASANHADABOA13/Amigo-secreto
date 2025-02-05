let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    
    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    // Sorteia um nome aleatório da lista de amigos
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    mostrarResultado(sorteado);
}

function mostrarResultado(sorteado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<li>O nome sorteado foi: <strong>${sorteado}</strong></li>`;
}