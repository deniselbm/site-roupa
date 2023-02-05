// Adicionando funcionalidade ao botão de compra
var botoesComprar = document.querySelectorAll('.comprar');

for (var i = 0; i < botoesComprar.length; i++) {
    botoesComprar[i].addEventListener('click', function () {
        alert('Produto adicionado ao carrinho!');
    });
}

// Adicionando toggle ao menu de navegação
var botaoMenu = document.querySelector('.botao-menu');
var menu = document.querySelector('nav ul');

botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('exibir');
});