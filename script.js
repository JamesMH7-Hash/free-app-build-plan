// Load entries and any saved draft on page load
document.addEventListener("DOMContentLoaded", () => {
  loadEntries();
  const savedDraft = localStorage.getItem("draft");
  if (savedDraft) {
    document.getElementById("entry").value = savedDraft;
  }
});

// Auto-save what's typed (draft)
document.getElementById("entry").addEventListener("input", (e) => {
  localStorage.setItem("draft", e.target.value);
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
  localStorage.removeItem("draft");
  document.getElementById("entry").value = "";
  loadEntries();
});

// Load and display entries with delete buttons
function loadEntries() {
  const list = document.getElementById("entry-list");
  list.innerHTML = "";
  const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];

  savedEntries.forEach((item, index) =>
