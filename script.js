// 🎤 Play voice using browser speech
document.getElementById('speakBtn').addEventListener('click', () => {
  const text = document.getElementById('script').value.trim();

  if (!text) {
    alert('Please enter a script to read.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
  speech.pitch = 1;
  speech.rate = 1;
  speechSynthesis.speak(speech);
});

// 🖼️ Show AI-related image based on script text
document.getElementById('generateImageBtn').addEventListener('click', () => {
  const text = document.getElementById('script').value.trim();
  const imageArea = document.getElementById('imagePreview');

  if (!text) {
    imageArea.innerHTML = `<p><em>Please enter a script before generating an image.</em></p>`;
    return;
  }

  // Replace spaces with + for URL encoding
  const searchQuery = encodeURIComponent(text);

  // Use Unsplash to get a themed image based on the text
  const imageUrl = `https://source.unsplash.com/640x360/?${searchQuery}`;

  imageArea.innerHTML = `
    <p><em>AI-generated image preview for: <strong>${text}</strong></em></p>
    <img src="${imageUrl}" width="100%" alt="AI image for ${text}" />
  `;
});

// 🎞️ Future export button
document.getElementById('exportBtn').addEventListener('click', () => {
  alert('Export to video is coming soon!');
});
