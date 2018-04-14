exports.run = (client, message, args) => {
    var fs = require('fs');
    var text = message.content.replace('~write ','')

    fs.appendFileSync("./doc.txt", text + "\n")
    message.channel.send("Wrote the text '" + text + "' to doc.txt.")
}