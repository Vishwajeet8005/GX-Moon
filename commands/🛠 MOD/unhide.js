const Discord = module.require("discord.js");

module.exports = {
   name: "unhide",
   description: "Unhide a Channel",
   category: "MOD",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("âYou don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['VIEW_CHANNEL'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`ðââï¸ ${message.channel} has been hide â`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}