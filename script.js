// 🎤 Play voice using browser speech
document.getElementById("speakBtn").addEventListener("click", () => {
  const text = document.getElementById("script").value.trim();
  if (!text) {
    alert("Please enter a script to read.");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  speechSynthesis.speak(speech);
});

// 🖼️ Show a stable image that fits the topic
document.getElementById("generateImageBtn").addEventListener("click", () => {
  const text = document.getElementById("script").value.toLowerCase().trim();
  const preview = document.getElementById("imagePreview");

  if (!text) {
    preview.innerHTML = "<p><em>Please enter a script first.</em></p>";
    return;
  }

  // Basic keyword to image map
  const keywordImages = {
    spaceship: "https://images.unsplash.com/photo-1612197529786-3a662492c570?auto=format&fit=crop&w=640&q=80",
    robot: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=640&q=80",
    forest: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=640&q=80",
    city: "https://images.unsplash.com/photo-1486308510493-aa64833634ef?auto=format&fit=crop&w=640&q=80",
    default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80"
  };

  // Pick best match or use default
  let match = Object.keys(keywordImages).find((keyword) =>
    text.includes(keyword)
  );

  const imageUrl = keywordImages[match || "default"];

  preview.innerHTML = `
    <p><em>Image shown for topic: <strong>${match || "default"}</strong></em></p>
    <img src="${imageUrl}" width="100%" alt="Image preview" />
  `;
});

// 🎞️ Coming soon: export to video
document.getElementById("exportBtn").addEventListener("click", () => {
  alert("Export to video is coming soon!");
});
