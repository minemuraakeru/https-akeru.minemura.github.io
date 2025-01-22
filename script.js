document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".hamburger-menu");
  const menuContent = document.querySelector(".menu-content");

  menuButton.addEventListener("click", () => {
    menuContent.classList.toggle("active");
  });

  // メニュー外をクリックしたときに閉じる
  menuContent.addEventListener("click", (e) => {
    if (e.target === menuContent) {
      menuContent.classList.remove("active");
    }
  });
});
