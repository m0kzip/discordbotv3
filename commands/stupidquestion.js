exports.run = (client, message, args) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var rand = getRandomInt(4)

        switch(rand)
        {
            case 0:
            message.channel.send("Why does java have 2 different names, Java and Javascript?")
            break;
            case 1:
            message.channel.send("How do I run my code? I typed it all up in notepad but I don't see an option to run it.")
            break;
            case 2:
            message.channel.send("When are we going to learn to hack!?")
            break;
            default:
            message.channel.send("why the frick doesn't python have labels")
        }
}