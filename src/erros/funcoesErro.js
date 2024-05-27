function trataErros(erro) {
  if (erro.code === 'ENOENT') {
    // dessa forma mostra a stack trace toda do erro
    throw new Error('Arquivo nao encontrado');
    // se quiser ter uma mensagem mais amigavel ao usuario:
    // return ('Arquivo nao encontrado');
  } else {
    return 'Erro na aplicacao';
  }
}

module.exports = trataErros;
