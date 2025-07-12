// Load entries on page load
document.addEventListener("DOMContentLoaded", () => {
  loadEntries();
});

// Save entry on form submit
document.getElementById("checkin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const entry = document.getElementById("entry").value.trim();
  if (!entry) return;

  const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
  const timestamp = new Date().toLocaleString();
  savedEntries.unshift({ text: entry, time: timestamp });

  localStorage.setItem("entries", JSON.stringify(savedEntries));
  document.getElementById("entry").value = "";
  loadEntries();
});

// Load and display entries with delete buttons
function loadEntries() {
  const list = document.getElementById("entry-list");
  list.innerHTML = "";
  const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];

  savedEntries.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${item.time}</strong><br>${item.text}
      </div>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    list.appendChild(li);
  });

  // Attach delete handlers
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.getAttribute("data-index");
      savedEntries.splice(i, 1);
      localStorage.setItem("entries", JSON.stringify(savedEntries));
      loadEntries();
    });
  });
}
