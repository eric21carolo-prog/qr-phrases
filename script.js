const phraseEl = document.getElementById('phrase');
const authorEl = document.getElementById('author');
const newBtn = document.getElementById('new-phrase');
const copyBtn = document.getElementById('copy');
const shareLink = document.getElementById('share');

let phrases = [];

// URL absoluta pro seu repo (garante que carregue no Pages)
const PHRASES_URL = "https://eric21carolo-prog.github.io/qr-phrases/phrases.json";

// Carrega frases
async function loadPhrases(){
  try{
    const res = await fetch(PHRASES_URL);
    if(!res.ok) throw new Error('JSON não encontrado');
    const data = await res.json();
    if(!Array.isArray(data) || data.length === 0) throw new Error('Formato inválido');
    phrases = data;
    showRandom();
  }catch(err){
    console.error('Erro ao carregar frases:', err);
    phraseEl.textContent = "Erro ao carregar frases. Tente novamente mais tarde.";
  }
}

// Escolhe e mostra frase aleatória
function showRandom(){
  if(!phrases || phrases.length === 0) return;

  const raw = phrases[Math.floor(Math.random() * phrases.length)];
  let text = "", author = "";

  if(typeof raw === "string") {
    const parts = raw.split(' — ');
    text = parts[0];
    author = parts[1] || "";
  } else if(typeof raw === "object" && raw !== null) {
    text = raw.text || "";
    author = raw.author || "";
  }

  phraseEl.style.opacity = 0;
  setTimeout(()=> {
    phraseEl.textContent = text;
    authorEl.textContent = author ? `— ${author}` : "";
    phraseEl.style.opacity = 1;
  }, 260);

  const shareText = encodeURIComponent(text + (author ? ` — ${author}` : ""));
  shareLink.href = `https://api.whatsapp.com/send?text=${shareText}`;
}

// copiar para área de transferência
async function copyToClipboard(){
  const txt = phraseEl.textContent || "";
  if(!txt) return;

  try{
    await navigator.clipboard.writeText(txt);
    copyBtn.textContent = "Copiado!";
    setTimeout(()=> copyBtn.textContent = "Copiar", 1500);
  }catch{
    copyBtn.textContent = "Falha";
    setTimeout(()=> copyBtn.textContent = "Copiar", 1500);
  }
}

// eventos
newBtn.addEventListener('click', showRandom);
copyBtn.addEventListener('click', copyToClipboard);

// iniciar
loadPhrases();
