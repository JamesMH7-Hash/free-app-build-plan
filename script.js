// ✅ Hugging Face API key (keep private!)
const HF_TOKEN = atob("aGZfanhTcldQbmFld3ZVRUd4amFiQ25ad3hkZ0ljVndVY016"); // your token in base64


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

// 🖼️ Generate real AI image using Hugging Face API
document.getElementById("generateImageBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("script").value.trim();
  const preview = document.getElementById("imagePreview");

  if (!prompt) {
    preview.innerHTML = "<p><em>Please enter a script first.</em></p>";
    return;
  }

  preview.innerHTML = "<p><em>Generating AI image... please wait ⏳</em></p>";

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    preview.innerHTML = `
      <p><em>AI-generated image for: <strong>${prompt}</strong></em></p>
      <img src="${imageUrl}" width="100%" alt="AI generated result" />
    `;
  } catch (err) {
    preview.innerHTML = `<p style="color:red;">❌ Failed to generate image. Error: ${err.message}</p>`;
  }
});

// 🎞️ Coming soon: Export to video
document.getElementById("exportBtn").addEventListener("click", () => {
  alert("Export to video is coming soon!");
});
