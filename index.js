document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const InicioLink = document.querySelector("#Inicio");
InicioLink.addEventListener("click", (e) => {
  e.preventDefault();
  const seccionInicio = document.querySelector(".hero"); 
  seccionInicio.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#Consultorias").addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".asistente-ia").scrollIntoView({ behavior: "smooth" });
});