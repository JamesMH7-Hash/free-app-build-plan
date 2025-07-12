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

// 🖼️ Show placeholder image
document.getElementById('generateImageBtn').addEventListener('click', () => {
  const imageArea = document.getElementById('imagePreview');

  imageArea.innerHTML = `
    <p><em>Placeholder image for AI-generated scene:</em></p>
    <img src="https://via.placeholder.com/640x360?text=AI+Generated+Scene" width="100%" />
  `;
});

// 🎞️ Future export button
document.getElementById('exportBtn').addEventListener('click', () => {
  alert('Export to video is coming soon!');
});
