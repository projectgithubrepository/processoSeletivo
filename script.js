const btn = document.getElementById("addProduto");
const container = document.getElementById("container2");

btn.addEventListener("click", () => {
    AddProduto();
});

function AddProduto () {
    const pulaLinha = document.createElement('br');
    const btnEditar = document.createElement('button');

    btnEditar.classList.add('btn');
    
    btnEditar.innerText = "Editar";
    btnEditar.style.width = "4rem";
    btnEditar.style.float = "right";

    btnEditar.addEventListener('click', () => {
        produtoCadastrado.innerText = document.getElementById("nomeProduto").value;
        produtoCadastrado2.innerText = document.getElementById("fabricanteProduto").value;
        produtoCadastrado3.innerText = document.getElementById("categoriaProduto").value;
        produtoCadastrado4.innerText = document.getElementById("quantidade").value;
        produtoCadastrado5.innerText = document.getElementById("valorUnidade").value;
    });

    const btnExcluir = document.createElement('button');

    btnExcluir.classList.add('btn');
    
    btnExcluir.innerText = "Deletar";
    btnExcluir.style.width = "4rem";
    btnExcluir.style.float = "right";

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
    produtoCadastrado4.classList.add("toast");

    const produtoCadastrado5 = document.createElement("div");
    produtoCadastrado5.classList.add("toast");

    produtoCadastrado.innerText = document.getElementById("nomeProduto").value;
    produtoCadastrado2.innerText = document.getElementById("fabricanteProduto").value;
    produtoCadastrado3.innerText = document.getElementById("categoriaProduto").value;
    produtoCadastrado4.innerText = document.getElementById("quantidade").value;
    produtoCadastrado5.innerText = document.getElementById("valorUnidade").value;

    if (produtoCadastrado.innerText != []) {
        if (produtoCadastrado4.innerText != []) {
            if (produtoCadastrado5.innerText != []) {
                container.appendChild(produtoCadastrado)
                container.appendChild(produtoCadastrado2)
                container.appendChild(produtoCadastrado3)
                container.appendChild(produtoCadastrado4)
                container.appendChild(produtoCadastrado5)
                container.appendChild(btnEditar)
                container.appendChild(btnExcluir)
                container.appendChild(pulaLinha)
                
            } else {alert ("Preencha o campo vazio.");}
        } else {alert ("Preencha o campo vazio.");}
    } else {alert ("Preencha o campo vazio.");}

    function ApagaProduto() {
        produtoCadastrado.remove();
        produtoCadastrado2.remove();
        produtoCadastrado3.remove();
        produtoCadastrado4.remove();
        produtoCadastrado5.remove();
        btnExcluir.remove();
        btnEditar.remove();
        pulaLinha.remove();
    }
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('btnBuscar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("container2");
    li = ul.getElementsByClassName('toast');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName('toast')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  myFunction();