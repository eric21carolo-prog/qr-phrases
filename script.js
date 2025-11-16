const phraseBox = document.getElementById("phrase-box");
const newBtn = document.getElementById("new-phrase");

let phrases = [];

// Carrega o JSON com as frases
fetch("https://eric21carolo-prog.github.io/qr-phrases/phrases.json")
    .then(response => response.json())
    .then(data => {
        phrases = data;
        showRandomPhrase();
    })
    .catch(err => {
        phraseBox.textContent = "Erro ao carregar frases.";
        console.error(err);
    });

// Função para exibir frase aleatória com transição
function showRandomPhrase() {
    if (phrases.length === 0) return;

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomIndex];

    phraseBox.style.opacity = 0;

    setTimeout(() => {
        phraseBox.textContent = phrase;
        phraseBox.style.opacity = 1;
    }, 300);
}

newBtn.addEventListener("click", showRandomPhrase);
