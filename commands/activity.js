exports.run = (client, message, args) => {
    var activ = message.content.replace('~activity ','')
    client.user.setActivity(activ);
}