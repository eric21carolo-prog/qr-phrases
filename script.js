const phraseBox = document.getElementById("phrase-box");
const newBtn = document.getElementById("new-phrase");

let phrases = [];

// Carregar o JSON
fetch("https://eric21carolo-prog.github.io/qr-phrases/phrases.json")
    .then(response => response.json())
    .then(data => {
        phrases = data;
        showRandomPhrase();
    })
    .catch(() => {
        phraseBox.textContent = "Erro ao carregar frases.";
    });

function showRandomPhrase() {
    if (phrases.length === 0) return;

    const phrase = phrases[Math.floor(Math.random() * phrases.length)];

    // animação de saída
    phraseBox.classList.add("fade");

    setTimeout(() => {
        phraseBox.textContent = phrase;
        phraseBox.classList.remove("fade");
    }, 300);
}

newBtn.addEventListener("click", showRandomPhrase);
