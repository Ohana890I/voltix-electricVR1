const password = prompt("סיסמת מנהל");

if (password !== "voltix2026") {
  window.location.href = "/";
}

document.querySelector('#app').innerHTML = `
<h1>⚡ פאנל ניהול Voltix</h1>

<p>ברוך הבא מנהל</p>
`;