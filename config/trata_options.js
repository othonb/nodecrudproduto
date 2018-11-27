/*
    Trata a resposta CORS 
*/

module.exports = function (resposta) {
    resposta.setHeader ('Access-Control-Allow-Origin', '*');
    resposta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resposta.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    resposta.setHeader('Access-Control-Allow-Credentials', true);

    resposta.send ();
};