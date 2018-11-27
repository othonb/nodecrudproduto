// Configurações genéricas do servidor
var app = require ('./config/server');

// Criação do banco de dados e das tabelas
var criaBD = require ('./config/cria_bd') ();

// Rotas do aplicativo
var rotas = require ('./config/rotas') (app);

var server = app.listen(process.env.PORT || 8080, () => {

    //var host = server.address().address;  
    
    var host = '127.0.0.1';
    
    var port = server.address().port;
    
    console.log('App listening at http://%s:%s', host, port);
		  
});	