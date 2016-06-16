var socket = io.connect();
// console.log("hi");


// function sendFunction() {
//     socket.emit('new message', $('#new-message').val());
//     $('#new-message').val('');
//
//
//   }

  socket.on('onStart', function(tracker){
    var data = Object.keys(tracker);
    for (var i = 0; i < data.length; i++) {
        var reference = data[i] ;
        $(".list").append('<div id="'+ data[i] + '">' + data[i] + '</div>');
        $('#' + data[i]).css('font-size', tracker[reference] );
            // '<div class="'data[i]'""> 'data[i]"</div>");

        // + tracker[reference]
    }
  });
