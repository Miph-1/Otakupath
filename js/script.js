
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    const target = link.getAttribute("href").split("/").pop();
    if (target === current || (current.startsWith("oreimo") && target === "blog.html")) {
      link.classList.add("active");
    }
  });
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
