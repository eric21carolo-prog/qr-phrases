// Fundos diferentes para cada frase
const backgrounds = [
    "linear-gradient(135deg, #ff7eb3, #ff758c)",
    "linear-gradient(135deg, #6a11cb, #2575fc)",
    "linear-gradient(135deg, #00c6ff, #0072ff)",
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #11998e, #38ef7d)",
    "linear-gradient(135deg, #ee0979, #ff6a00)",
    "linear-gradient(135deg, #8e2de2, #4a00e0)",
    "linear-gradient(135deg, #232526, #414345)"
];

async function loadPhrase() {
    const phraseElement = document.getElementById("phrase");
    phraseElement.innerText = "Carregando...";

    try {
        const response = await fetch("https://eric21carolo-prog.github.io/qr-phrases/phrases.json");
        const phrases = await response.json();

        // Sorteia frase
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phraseElement.innerText = phrases[randomIndex];

        // Sorteia fundo novo
        const bgIndex = Math.floor(Math.random() * backgrounds.length);
        phraseElement.style.background = backgrounds[bgIndex];

    } catch (error) {
        phraseElement.innerText = "Erro ao carregar frases.";
        console.error(error);
    }
}

// Carrega frase inicial
document.addEventListener("DOMContentLoaded", loadPhrase);
