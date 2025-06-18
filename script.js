document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.checkbox-criativo');
  const container = document.querySelector('.container');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const todosSelecionados = [...checkboxes].every(cb => cb.checked);
      
      if (todosSelecionados) {
        container.classList.add('pulsando');
        
        // Adiciona classe especial para formar o coração
        checkboxes.forEach((cb, index) => {
          cb.nextElementSibling.classList.add(`coracao-parte-${index+1}`);
        });
      } else {
        container.classList.remove('pulsando');
        
        // Remove as classes do coração
        checkboxes.forEach((cb, index) => {
          cb.nextElementSibling.classList.remove(`coracao-parte-${index+1}`);
        });
      }
    });
  });
});
