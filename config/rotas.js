module.exports = function (app) {

    // Rotas para cada solicitacao SQL como modulos
    var insereProduto = require ('../rotas/insereProduto') (app);

    var alteraProduto = require ('../rotas/alteraProduto') (app);

    var removeProduto = require ('../rotas/removeProduto') (app);
};