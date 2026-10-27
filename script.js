document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Desplazamiento suave para los enlaces del menú
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Cerrar menú móvil al pulsar un enlace
        const navMenu = document.getElementById('navLinks');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }

        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. Menú desplegable para móviles
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navLinks');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

});

// 3. Sistema de navegación entre vistas (SPA)
function switchView(viewName) {
  const mainView = document.getElementById('main-view');
  const detailView = document.getElementById('detail-view');

  if (viewName === 'main') {
    mainView.classList.add('active-view');
    detailView.classList.remove('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'detail') {
    mainView.classList.remove('active-view');
    detailView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// 4. Abrir detalle del proyecto específico
function openProjectDetail(projectId) {
  if (projectId === 'hotelapp') {
    switchView('detail');
  }
}

// 5. Copiar datos de contacto al portapapeles
function copyToClipboard(text, customMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMessage || '¡Copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}

// 6. Notificación Toast Flotante
function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}