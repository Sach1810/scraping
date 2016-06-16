var socket = io.connect();
var list = [];
socket.on('new', function(obj) {
    if (obj.tracker[obj.word] == 1) {
        $(".list").append('<div id="' + obj.word + '" class="all" ' + obj.tracker[obj.word] + '">' + obj.word + "  " + '</div>').find('div.cloud1').fadeIn('slow');
        console.log($('#' + obj.word).data().id);
    }

});
socket.on('update', function(obj) {
    $('#' + obj.word).addClass('show');
    $('#' + obj.word).css('font-size', obj.tracker[obj.word] * 50 + "%");
    $('#' + obj.word).css('width', obj.tracker[obj.word] * 15 + "vw");
    var all = Object.keys(obj.tracker);
    $('.all').addClass('show');
});
