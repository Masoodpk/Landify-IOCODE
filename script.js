document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".navbar-res-bar");
    const closeIcon = document.querySelector(".navbar-res-close");
    const menuList = document.querySelector(".navres-list");
  
    // Function to open the menu
    menuIcon.addEventListener("click", () => {
      menuList.style.display = "flex"; // Show the menu
      menuIcon.style.display = "none"; // Hide the bars icon
      closeIcon.style.display = "block"; // Show the close icon
    });
  
    // Function to close the menu
    closeIcon.addEventListener("click", () => {
      menuList.style.display = "none"; // Hide the menu
      closeIcon.style.display = "none"; // Hide the close icon
      menuIcon.style.display = "block"; // Show the bars icon
    });
  });
  