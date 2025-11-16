// generator.js
const fs = require('fs');
const parts = [
  "Você é capaz de",
  "Nunca esqueça:",
  "Dica:",
  "Lembre-se sempre:",
  "Experimente:",
  "O segredo é",
  "Uma verdade simples:"
];
const ends = [
  "dar o primeiro passo.",
  "rien en français.",
  "ser gentil consigo mesmo.",
  "rir antes do café.",
  "persistir com calma.",
  "não desistir.",
  "transformar o medo em escada."
];

const out = [];
for(let i=0;i<1000;i++){
  const a = parts[Math.floor(Math.random()*parts.length)];
  const b = ends[Math.floor(Math.random()*ends.length)];
  const flair = Math.random() < 0.15 ? " — autor desconhecido" : "";
  out.push(${a} ${b}${flair});
}
fs.writeFileSync('phrases.json', JSON.stringify(out, null, 2), 'utf8');
console.log('phrases.json gerado com', out.length, 'frases');
