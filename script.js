/* === Global === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body {
  background: #f4f7fa;
  color: #222;
  transition: background 0.3s, color 0.3s;
  text-align: center;
}

/* === Navbar === */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 12px 24px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 1000;
}

.logo {
  font-size: 1.6em;
  font-weight: bold;
  text-align: left;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
  font-size: 1rem;
}

.nav-links a:hover,
.nav-links a.active {
  color: #ffe15d;
}

.dark-btn {
  background: none;
  border: none;
  font-size: 1.4em;
  cursor: pointer;
  color: white;
}

/* === Section === */
.section {
  display: none;
  padding: 60px 20px;
  animation: fadeIn 0.6s ease-in-out;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === Beranda === */
.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
  display: block;
  border: 4px solid #007bff;
}

#home h2 {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

#home h2 span {
  color: #007bff;
}

#home p {
  font-size: 1.05rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* === Grid Layouts === */
.about-grid, .portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 35px;
  justify-items: center;
}

.card, .about-grid div {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
  width: 100%;
  max-width: 320px;
  text-align: center;
}

.card:hover, .about-grid div:hover {
  transform: translateY(-5px);
}

/* === Form === */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
  align-items: center;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
}

button.glow {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1em;
}

button.glow:hover {
  background: #0056b3;
}

/* === Popup Sambutan === */
.popup {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.popup.show {
  display: flex;
  animation: fadeIn 0.4s ease;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  animation: popUp 0.5s ease;
  max-width: 350px;
}

@keyframes popUp {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.popup-content button {
  margin-top: 15px;
  padding: 10px 25px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1em;
}

.popup-content button:hover {
  background: #0056b3;
}

/* === Dark Mode === */
body.dark-mode {
  background: #121212;
  color: #f1f1f1;
}

body.dark-mode .navbar {
  background: #222;
}

body.dark-mode .card,
body.dark-mode .about-grid div {
  background: #1e1e1e;
  color: #eee;
}

body.dark-mode footer {
  background: #222;
}

/* === Footer === */
footer {
  text-align: center;
  padding: 20px;
  background: #007bff;
  color: white;
  margin-top: 50px;
  font-size: 0.95rem;
}

/* === Responsif (HP & Laptop Rata Tengah) === */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }

  .logo {
    text-align: center;
  }

  .nav-links {
    justify-content: center;
    gap: 15px;
  }

  .section {
    padding: 40px 20px;
  }

  #home h2 {
    font-size: 1.5rem;
  }

  #home p {
    font-size: 1rem;
    padding: 0 10px;
  }

  .profile-img {
    width: 140px;
    height: 140px;
  }

  .card, .about-grid div {
    max-width: 95%;
  }

  form {
    width: 90%;
  }
}
