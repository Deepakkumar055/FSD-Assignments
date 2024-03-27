function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var menuToggle = document.querySelector('.menu-toggle');
  
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
  
    if (sidebar.classList.contains('collapsed')) {
      menuToggle.innerHTML = '☰';
    } else {
      menuToggle.innerHTML = '✕';
    }
  }
  