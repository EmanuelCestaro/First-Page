document.getElementById("imagemMengao").addEventListener("click", function() {
  document.querySelector("h1.titulo").textContent = "Flamengo O Melhor Time!";
});


document.getElementById("btnAlterarCor").addEventListener("click", function() {
  document.body.style.backgroundColor = "#FFFFFF"; 
});

document.getElementById("btnAlterarCor2").addEventListener("click", function() {
  document.body.style.backgroundColor = "#000000"; 
});
$(document).ready(function() {
  $('#esconderImagem').click(function() {
      $('#imagemMengao').fadeOut();
  });

});