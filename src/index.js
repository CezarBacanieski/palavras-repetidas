export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  //flatMAp esta verificando se o paragrafo esta vazio e fazendo um for each com o map retoranando um array
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
  //   objeto[propriedade] = valor;
}
