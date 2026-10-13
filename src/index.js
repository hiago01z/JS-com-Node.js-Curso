//importando o módulo fs
const fs = require("fs");

//será usado para capturar o caminho do arquivo pelo terminal
const linkTexto = process.argv[2];

//usando a função readFile de fs para capturar nosso texto e usar como argumento da função verificaPalavrasDuplicadas
fs.readFile(linkTexto, "utf-8", (erro, texto) => {
  separaPorParagrafo(texto);
});

//verificando palavras duplicadas
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(/\s+/);
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  return resultado; 
}

 //separando o texto por parágrafos e verificando palavras duplicadas por parágrafo
function separaPorParagrafo(texto) {
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}
