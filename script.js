document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.checkbox-criativo');
  const container = document.querySelector('.container');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', verificarAnimacao);
  });

  function verificarAnimacao() {
    const todosSelecionados = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    if (todosSelecionados) {
      container.classList.add('pulsando');
    } else {
      container.classList.remove('pulsando');
    }
  }
});
