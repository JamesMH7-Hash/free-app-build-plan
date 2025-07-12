import { createFFmpeg, fetchFile } from './libs/ffmpeg.min.js';

const ffmpeg = createFFmpeg({
  corePath: './libs/ffmpeg-core.js',
  log: true
});

// 🎤 Voice Preview Using Web Speech API
document.getElementById('speakBtn').addEventListener('click', () => {
  const script = document.getElementById('script').value.trim();
  if (!script) return alert('Please enter a script first.');

  const utterance = new SpeechSynthesisUtterance(script);
  utterance.lang = 'en-US';
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
});

// 🖼️ Placeholder Image Generation Button
document.getElementById('generateImageBtn').addEventListener('click', () => {
  const preview = document.getElementById('imagePreview');
  preview.innerHTML = '<em>🧠 AI-generated image would appear here.</em><br><br>' +
    '<img src="https://via.placeholder.com/640x360?text=Generated+Scene" width="100%" />';
});

// 🎞️ Coming Soon: Export Button
document.getElementById('exportBtn').addEventListener('click', () => {
  alert('Export feature coming soon (will use ffmpeg.wasm).');
});
