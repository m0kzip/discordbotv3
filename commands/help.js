/*/
What does this command do?

This command outputs a help message, with each command and it's usage listed.
/*/



exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [{
            name: "Utility:",
            value: "\n**help**\nShow available commands.\n**info**\nShow some information about the bot.\n**invite**\nShow the bot invite link.\n**ping**\nPing the bot.\n"
          },
          {
            name: "Fun:",
            value: "\n**arrays**\nWhat do arrays start at?\n**stupidquestion**\nAsk a stupid question, get a stupid answer.\n"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
        }
      }
    });
}