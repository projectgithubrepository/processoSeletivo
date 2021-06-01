const btn = document.getElementById("addProduto");
const container = document.getElementById("container2");

btn.addEventListener("click", () => {
    AddProduto();
});

function AddProduto () {
    const btnExcluir = document.createElement('button');

    btnExcluir.classList.add('btn');
    
    btnExcluir.innerText = "Deletar";

    btnExcluir.addEventListener('click', () => {
        ApagaProduto();

    });
    
    const produtoCadastrado = document.createElement("div");
    produtoCadastrado.classList.add("toast");
    
    const produtoCadastrado2 = document.createElement("div");
    produtoCadastrado2.classList.add("toast");

    const produtoCadastrado3 = document.createElement("div");
    produtoCadastrado3.classList.add("toast");

    const produtoCadastrado4 = document.createElement("div");
    produtoCadastrado3.classList.add("toast");

    const produtoCadastrado5 = document.createElement("div");
    produtoCadastrado3.classList.add("toast");

    produtoCadastrado.innerText = document.getElementById("nomeProduto").value;
    produtoCadastrado2.innerText = document.getElementById("fabricanteProduto").value;
    produtoCadastrado3.innerText = document.getElementById("categoriaProduto").value;
    produtoCadastrado4.innerText = document.getElementById("quantidade").value;
    produtoCadastrado5.innerText = document.getElementById("valorUnidade").value;


    container.appendChild(produtoCadastrado)
    container.appendChild(produtoCadastrado2)
    container.appendChild(produtoCadastrado3)
    container.appendChild(produtoCadastrado4)
    container.appendChild(produtoCadastrado5)
    container.appendChild(btnExcluir)

    function ApagaProduto() {
        produtoCadastrado.remove();
        produtoCadastrado2.remove();
        produtoCadastrado3.remove();
        produtoCadastrado4.remove();
        produtoCadastrado5.remove();
        btnExcluir.remove();
    }
}

