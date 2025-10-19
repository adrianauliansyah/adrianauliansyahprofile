// Pesan selamat datang
window.addEventListener("load", () => {
  alert("Selamat datang di Website Profil Saya!");
});

// Dark Mode
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️" : "🌙";
});

// Navigasi Slide antar halaman
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    sections.forEach(sec => sec.classList.remove("active", "prev"));
    target.classList.add("active");
    link.classList.add("active");

    // Update navbar active
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Validasi Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !email || !message) {
    msg.textContent = "⚠️ Semua kolom wajib diisi!";
    msg.style.color = "orange";
  } else if (!email.includes("@")) {
    msg.textContent = "⚠️ Format email tidak valid!";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Pesan berhasil dikirim!";
    msg.style.color = "lightgreen";
    this.reset();
  }
});
