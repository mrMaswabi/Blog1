  // Sidebar resposnivenss

  const menuIcon = document.querySelector(".menu-icon");

  const sidebar = document.querySelector(".sidebar");
  const navMenu = document.querySelector(".navmenu");
  const navOverlay = document.querySelector(".nav-overlay");

  function toggleSidebar() {
    sidebar.classList.toggle("open");
    navOverlay.classList.toggle("open");
  }

  menuIcon.addEventListener("click", toggleSidebar);
  navOverlay.addEventListener("click", toggleSidebar);