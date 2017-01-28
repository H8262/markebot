const Discord = require('discord.js');
const fs = require("fs");
const opus = require('node-opus');

/*var rate = 48000;
var encoder = new opus.OpusEncoder( rate );
 
// Encode and decode. 
var frame_size = rate/100;
var encoded = encoder.encode( buffer, frame_size );
var decoded = encoder.decode( encoded, frame_size );
*/

const bot = new Discord.Client();

const config = require("./config.json");

var voice_handler = null;
var voice_connection = null;

bot.on('ready', () => {
  console.log('Olen valmis taisteluun!');
});

bot.on("guildMemberAdd", member => {
   let guild = member.guild;
    guild.defaultChannel.sendMessage("Moro, " + member.user + "!");
});

bot.on('message', message => {
    if(message.author.id === "113745694136729604"){
        message.channel.sendMessage('tähän kylään mahtuu vain yksi marke');
        return;
    }
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
    if (command === "laske"){
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce((p, c) => p+c);
        if(total !== total){
            message.channel.sendMessage('ei pysty');
        } else
        message.channel.sendMessage(total);
    }
    
    if(command === "sano"){
        message.channel.sendMessage(args.join(" "));
    }
    
    if (command === "ping") {
        message.reply('haista vittu');
  } else
    
    if(command === "kalja") {
        message.reply('Niin paljon alkoholia!');
    }
    else
    if(command === "fuu"){
        
        //return new Promise((resolve, reject) =>
            const voiceChannel = message.member.voiceChannel;
            /*voiceChannel.join().then(connection =>
            const dispatcher = connection.playFile('./lesos.mp3');
            }).catch(console.error);*/
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./lesos.mp3');
            });
 }      else
    if(command === "leave"){
            message.member.voiceChannel.leave();
        } else
    if(command === "marke"){

        
        var valinta = randomInt(0, 6);
        console.log(valinta);
        
        if(valinta == 0) message.channel.sendMessage("no en tiiä", {tts: true});
        if(valinta == 1) message.channel.sendMessage("suattaapi olla", {tts: true});
        if(valinta == 2) message.channel.sendMessage("olen melko varma siitä", {tts: true});
        if(valinta == 3) message.channel.sendMessage("en kommentoi", {tts: true});
        if(valinta == 4) message.channel.sendMessage("en usko", {tts: true});
        if(valinta == 5) message.channel.sendMessage("onhan se mahdollista", {tts: true});
        
        }else
    if(command === "saatana"){
        message.channel.sendMessage("perkele",{tts: true});
}else
    if(command ==="glorious"){
        message.channel.sendMessage("",{file: 'marke.png'});
    }else
    if(command ==="rip"){
        if(message.author.id === "95197201440972800"){
        message.channel.sendMessage('nyt vittu :D');
        return;
        }
        const voiceChannel = message.member.voiceChannel;
        const ytdl = require('ytdl-core');
        const streamOptions = { seek: 0, volume: 1 };
        voiceChannel.join()
        .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=RXmbqiR1Wj8', {filter : 'audioonly'});
            const dispatcher = connection.playStream(stream, streamOptions);
 })
 .catch(console.error);
    }else
    if(command ==="leatherman"){
        const voiceChannel = message.member.voiceChannel;
        const ytdl = require('ytdl-core');
        const streamOptions = { seek: 0, volume: 1 };
        voiceChannel.join()
        .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=vaAWm8yBn3A', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
 })
 .catch(console.error);
    }
});

bot.login(config.token);

function randomInt (low, high){
    return Math.floor(Math.random() * (high - low) + low);
}