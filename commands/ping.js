exports.run = (client, message, args) => {
    var start = Date.now();
    var stop, diff;
    message.channel.send("Pong!").then(function(newMsg) {
        var stop = Date.now();
        var diff = (stop - start);
        newMsg.edit("Pong! `("+diff+"ms)`");
    });
}