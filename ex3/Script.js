function adicionarItem() {
    const lista = document.getElementById("minhaLista");
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo item da lista";
    lista.appendChild(novoItem);
}
