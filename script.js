// Load entries and any saved draft on page load
document.addEventListener("DOMContentLoaded", () => {
  loadEntries();
  const savedDraft = localStorage.getItem("draft");
  if (savedDraft) {
    document.getElementById("entry").value = savedDraft;
    updateWordCount();
  }
});

// Auto-save what's typed (draft)
document.getElementById("entry").addEventListener("input", (e) => {
  localStorage.setItem("draft", e.target.value);
  updateWordCount();
});

// Save entry on form submit
document.getElementById("checkin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const entry = document.getElementById("entry").value.trim();
  const mood = document.getElementById("mood").value;
  if (!entry) return;

  const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
  const timestamp = new Date().toLocaleString();
  savedEntries.unshift({ text: entry, time: timestamp, mood });

  localStorage.setItem("entries", JSON.stringify(savedEntries));
  localStorage.removeItem("draft");
  document.getElementById("entry").value = "";
  updateWordCount();
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
        <strong>${item.time} ${item.mood || ""}</strong><br>${item.text}
      </div>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    list.appendChild(li);
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.getAttribute("data-index");
      savedEntries.splice(i, 1);
      localStorage.setItem("entries", JSON.stringify(savedEntries));
      loadEntries();
    });
  });
}

// Live word count display
function updateWordCount() {
  const text = document.getElementById("entry").value.trim();
  const count = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("word-count").innerText = `${count} word${count !== 1 ? "s" : ""}`;
}
