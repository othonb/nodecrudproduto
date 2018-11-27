/*
 Modulo de conexao com o banco de dados mysql
*/

module.exports = function (conexao, consultaSQL, msg, resposta) {

    conexao.beginTransaction (function (erro) {
      if (erro) {throw erro;}
  
      conexao.query (consultaSQL, function (erro, resultadoConsultaSQL) {
  
        if (resposta != null) {
  
          resposta.setHeader ('Access-Control-Allow-Origin', '*');
          resposta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          resposta.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
          resposta.setHeader('Access-Control-Allow-Credentials', true);
    
          resposta.send (resultadoConsultaSQL);
        }
      }); // conexao.query
  
      conexao.commit (function (erro) {
        if (erro) {
          conexao.rollback (function (erro) {
            throw erro;
          }); // conexao.rollback
        }
  
        console.log (msg);
  
        conexao.end ();
      }); // conexao.commit
    }); // conexao.beginTransaction
  
  };
  