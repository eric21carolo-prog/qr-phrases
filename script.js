async function loadPhrase() {
  const phraseElement = document.getElementById("phrase");
  phraseElement.innerText = "Carregando...";

  try {
    const response = await fetch("https://eric21carolo-prog.github.io/qr-phrases/phrases.json");

    if (!response.ok) {
      phraseElement.innerText = "Erro ao carregar frases (404).";
      return;
    }

    const phrases = await response.json();
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.innerText = phrases[randomIndex];

  } catch (error) {
    phraseElement.innerText = "Erro ao carregar frases.";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadPhrase);
