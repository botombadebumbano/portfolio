document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Desplazamiento suave para enlaces del menú
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
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

  // 2. Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navLinks');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

});

// 3. Sistema de Vistas Multi-Proyecto (SPA)
function switchView(viewName) {
  const mainView = document.getElementById('main-view');
  const detailView1 = document.getElementById('detail-view');
  const detailView2 = document.getElementById('detail-view-3d');

  // Ocultar todas primero
  mainView.classList.remove('active-view');
  detailView1.classList.remove('active-view');
  detailView2.classList.remove('active-view');

  if (viewName === 'main') {
    mainView.classList.add('active-view');
  } else if (viewName === 'hotelapp') {
    detailView1.classList.add('active-view');
  } else if (viewName === 'hotel3d') {
    detailView2.classList.add('active-view');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. Abrir detalle según el ID del proyecto
function openProjectDetail(projectId) {
  if (projectId === 'hotelapp') {
    switchView('hotelapp');
  } else if (projectId === 'hotel3d') {
    switchView('hotel3d');
  }
}

// 5. Copiar datos al portapapeles
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
