const botao = document.getElementById('meubotao');
const titulo = document.getElementById('titulo');
const imagem = document.getElementById('imagemsegredo');
botao.addEventListener('click', function() {
    imagem.style.display = 'block';
    alert('O texto foi alterado! (Mentira, ou será que não...)');
});
