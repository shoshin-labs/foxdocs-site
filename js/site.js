(function () {
  const navCheck = document.getElementById("nav-on");
  const burger = document.querySelector(".nav-burger");

  if (navCheck && burger) {
    const sync = function () {
      burger.setAttribute("aria-expanded", String(navCheck.checked));
    };
    burger.setAttribute("aria-controls", "primary-nav");
    sync();
    navCheck.addEventListener("change", sync);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navCheck.checked) {
        navCheck.checked = false;
        sync();
        burger.focus();
      }
    });
  }

  const form = document.getElementById("demo-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const org = String(data.get("org") || "").trim();
    const note = String(data.get("note") || "").trim();
    const lines = [
      "Demo request from the Foxdocs site",
      "",
      "Name: " + name,
      "Work email: " + email,
      "Organisation: " + (org || "(not given)"),
      "",
      note || "(no note)"
    ];
    const href =
      "mailto:contact@foxdocs.com?subject=" +
      encodeURIComponent("Foxdocs demo" + (org ? ": " + org : "")) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
    window.location.href = href;
  });
})();
