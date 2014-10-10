module.exports = function(server) {
  var buttonQuery = server.where({type: 'button'});

  server.observe([buttonQuery], function(button){

    button.on('click', function(b){
      console.log(b);
    })

  });
}
