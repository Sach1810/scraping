var socket = io.connect();

socket.on('onStart', function(tracker) {
    $(".list").empty();
    var data = Object.keys(tracker);
    for (var i = 0; i < data.length; i++) {
        var reference = data[i];
        $(".list").append('<div id="' + data[i] + '" class="all">' + data[i] + '</div>');
        $('#' + data[i]).css('font-size', tracker[reference] * 10 + "px");
    }
});
