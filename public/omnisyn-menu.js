const menuRoot = document.querySelector(".product-shared-header")?.shadowRoot ?? document;

for (const link of menuRoot.querySelectorAll("a")) {
  if (link.textContent.trim() === "P&D") {
    link.setAttribute("href", "/pt-br/pd/");
  }
}

for (const menu of menuRoot.querySelectorAll(".omnisyn-solutions-menu")) {
  const trigger = menu.previousElementSibling;
  const wrapper = menu.parentElement;
  const setOpen = open => {
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  };

  trigger.addEventListener("click", () => setOpen(menu.hidden));
  document.addEventListener("pointerdown", event => {
    if (!event.composedPath().includes(wrapper)) setOpen(false);
  });
  wrapper.addEventListener("focusout", event => {
    if (!wrapper.contains(event.relatedTarget)) setOpen(false);
  });
  wrapper.addEventListener("keydown", event => {
    if (event.key !== "Escape" || menu.hidden) return;
    setOpen(false);
    trigger.focus();
  });

  const navigation = menu.closest(".mega-menu-wrap");
  const mobileToggle = navigation.querySelector(".mega-toggle-animated");
  mobileToggle?.addEventListener("click", () => {
    const open = navigation.classList.toggle("omnisyn-mobile-open");
    mobileToggle.setAttribute("aria-expanded", String(open));
    if (!open) setOpen(false);
  });
}
