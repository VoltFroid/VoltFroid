
  const botones = document.querySelectorAll('.nav-btn');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      
      botones.forEach(b => b.classList.remove('nav-btn-a'));
      
      
      boton.classList.add('nav-btn-a');
    });
  });
