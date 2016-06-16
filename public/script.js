var socket = io.connect();
var list = [];
socket.on('new', function(obj) {
    if (obj.tracker[obj.word] == 1) {
        $(".list").append('<div id="' + obj.word + '" class="all" '+ obj.tracker[obj.word] +'">' + obj.word + "  " + '</div>');
        console.log($('#' + obj.word).data().id);
    }

});

socket.on('update', function(obj) {
    $('#' + obj.word).css('font-size', obj.tracker[obj.word] * 10 + "px");
    $('#' + obj.word).css('width', obj.tracker[obj.word] * 7 + "vw");
});
