var socket = io.connect();
var list = [];
socket.on('new', function(obj) {
    if (obj.tracker[obj.word] == 1) {
        $(".list").append('<div id="' + obj.word + '" class="all">' + obj.word + "  " + '</div>');
    }

});

socket.on('update', function(obj) {
        obj.tracker[obj.word] 

    $('#' + obj.word).css('font-size', obj.tracker[obj.word] * 10 + "px");
});
