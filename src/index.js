//importando o módulo fs 
const fs = require("fs"); 

 //será usado para capturar o caminho do arquivo pelo terminal
const linkTexto = process.argv[2];

//usando a função readFile de fs para capiturar nosso texto e usar o texto como argumento da função verificaPalavrasDuplicadas
fs.readFile(linkTexto, "utf-8", (erro, texto) => { 
  verificaPalavrasDuplicadas(texto);
});

//função que armazena cada palavra do texto no array listaPalavras, cria o objeto resultado, 
function verificaPalavrasDuplicadas(texto) {//percorre o array listaPalavras adicionando as palavras como propriedadese e a contagem como valor dentro do objeto resultado.
  const listaPalavras = texto.split(/\s+/);//por fim, exibe o objeto resultado
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado)
}
