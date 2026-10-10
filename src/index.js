const fs = require("fs");

const linkTexto = process.argv[2];

fs.readFile(linkTexto, "utf-8", (erro, texto) => {
  let textoInteiro = texto.trim();
  console.log(textoInteiro);
  let palavras = textoInteiro.split(/\s+/);
  console.log(palavras.length)
  
});
 