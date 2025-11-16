async function loadPhrase() {
  const phraseElement = document.getElementById('phrase');
  phraseElement.innerText = "Carregando...";

  try {
    const response = await fetch("phrases.json");
    const phrases = await response.json();

    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.innerText = phrases[randomIndex];

  } catch (error) {
    phraseElement.innerText = "Erro ao carregar frase. Tente novamente.";
    console.error(error);
  }
}

document.getElementById('newPhrase').addEventListener('click', loadPhrase);

// Carrega a primeira frase ao abrir a página
loadPhrase();
