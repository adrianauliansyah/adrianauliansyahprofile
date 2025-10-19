// === Pesan Sambutan ===
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    alert("👋 Selamat datang di Website Profil Adrian Auliansyah!");
  }, 800);
});

// === Navigasi Halaman ===
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-page");

    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach((sec) => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// === Dark Mode ===
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// === Validasi Form ===
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.textContent = "⚠️ Semua kolom wajib diisi!";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "⚠️ Format email tidak valid!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Pesan berhasil dikirim!";
  msg.style.color = "green";
  form.reset();
});

// === Animasi Tombol (klik efek) ===
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
});

// === Pesan Tombol "Jelajahi" ===
document.getElementById("exploreBtn").addEventListener("click", () => {
  alert("🎉 Yuk, jelajahi halaman profil saya!");
});
