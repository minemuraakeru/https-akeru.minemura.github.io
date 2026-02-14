document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-enter");

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

  // 画面遷移を滑らかに（内部リンクでフェードアウト→遷移）
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || a.href.startsWith("javascript:") || a.getAttribute("href")?.startsWith("#")) return;
    try {
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
    } catch (_) { return; }
    e.preventDefault();
    document.body.classList.remove("page-enter");
    document.body.classList.add("page-leaving");
    setTimeout(() => { window.location.href = a.href; }, 350);
  });

  // 円形・ガラス風カスタムカーソル（スムーズに追従・クリックで小さく）
  const cursor = document.createElement("div");
  cursor.className = "cursor-circle";
  document.body.appendChild(cursor);
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  document.addEventListener("mousedown", () => cursor.classList.add("is-pressed"));
  document.addEventListener("mouseup", () => cursor.classList.remove("is-pressed"));
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.45;
    cursorY += (mouseY - cursorY) * 0.45;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
});









window.addEventListener('load', () => {
  // オープニングアニメーションが終了した後に、コンテンツを表示する
  const openingAnimation = document.querySelector('.opening-animation');
  setTimeout(() => {
    openingAnimation.style.display = 'none'; // アニメーション終了後にオープニングを非表示
  }, 2000); // アニメーション時間（ミリ秒）
});

