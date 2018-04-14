
exports.run = (client, message, args) => {
    if(message.author.id === '98457620586721280'){
        var command = message.content.replace('~eval','')

        eval(command)
    }
    else{
        message.channel.send("You ain't the owner, m8.")
    }
}