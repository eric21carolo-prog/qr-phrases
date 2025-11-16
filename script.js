async function loadPhrase() {
    const phraseElement = document.getElementById("phrase");

    try {
        const response = await fetch("https://eric21carolo-prog.github.io/qr-phrases/phrases.json");

        if (!response.ok) {
            phraseElement.innerText = "Erro ao carregar frases.";
            return;
        }

        const phrases = await response.json();
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phraseElement.innerText = phrases[randomIndex];
    } catch (error) {
        phraseElement.innerText = "Erro de conexão.";
    }
}

loadPhrase();
