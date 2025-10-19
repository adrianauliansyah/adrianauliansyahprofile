// === Navigasi antar halaman ===
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(s => s.classList.remove("active"));
    target.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// === Dark Mode ===
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// === Pesan otomatis saat masuk website ===
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("🚀 Selamat datang di Website Pribadi saya!\nSilakan jelajahi untuk mengenal saya lebih dekat 😊");
  }, 600);
});

// === Validasi Form ===
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("msg");

    if (!name || !email || !message) {
      msg.textContent = "⚠️ Semua kolom wajib diisi.";
      msg.style.color = "orange";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      msg.textContent = "⚠️ Format email tidak valid!";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "✅ Pesan berhasil dikirim!";
    msg.style.color = "lightgreen";
    form.reset();
  });
}
