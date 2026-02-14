document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");

  if (menuButton && menuOverlay) {
    menuButton.addEventListener("click", () => {
      menuOverlay.classList.toggle("is-open");
    });
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("is-open");
      }
    });
  }
});









window.addEventListener('load', () => {
  // オープニングアニメーションが終了した後に、コンテンツを表示する
  const openingAnimation = document.querySelector('.opening-animation');
  setTimeout(() => {
    openingAnimation.style.display = 'none'; // アニメーション終了後にオープニングを非表示
  }, 2000); // アニメーション時間（ミリ秒）
});

