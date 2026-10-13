const fs = require("fs");
const linkTexto = process.argv[2];

fs.readFile(linkTexto, "utf-8", (erro, texto) => {
  if (erro) {
    if (erro.code === "ENOENT") {
      console.log("Erro: ", erro);
    } else {
      console.log("Erro: ", erro);
    }
    return;
  }
  separaPorParagrafo(texto);
});

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(/\s+/);
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    if (palavra.length > 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}

function separaPorParagrafo(texto) {
  const paragrafos = texto.split("\n");
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
}
