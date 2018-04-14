/*/
exports.run = (client, message, args) => {
    var x = message.content.replace('~reaction','')
    if (x === " joy"){
        console.log("joy emoji sent")
        message.channel.send("Hell yes!", {files: ["https://i.imgur.com/GXZmtJF.jpg"]});
    }
    
}
/*/

exports.run = (client, message, args) => {
    var x = message.content.replace('~reaction ', '');
    console.log(x);
    switch(x)
    {
        case("joy"):
        message.channel.send("Haha yes!", {files: ["https://i.imgur.com/GXZmtJF.jpg"]});
        break;
    }
}