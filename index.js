// === Serveur HTTP pour Render ===
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot en ligne !');
});

app.listen(PORT, () => {
  console.log(`Serveur HTTP actif sur le port ${PORT}`);
});

// === Discord Bot ===
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Remplace TON_TOKEN_ICI par ton token Discord
const TOKEN = process.env.TOKEN || 'TON_TOKEN_ICI';

// Liste complète de tes punchlines (ici juste un extrait, ajoute toutes tes 500+ punchlines)
const punchlines = [
"T’es tellement nul que même ton ombre te fuit.",
"T’es tellement froid que même un glaçon te trouve glacial.",
"T’es tellement lent que les tortues t’ont doublé en marchant.",
"T’es tellement moche que ton miroir te demande pardon.",
"T’es tellement idiot que Google refuse de répondre à tes questions.",
"T’es tellement ridicule que les clowns te prennent comme exemple.",
"T’es tellement faible que même les feuilles te repoussent.",
"T’es tellement maladroit que même les murs t’évitent.",
"T’es tellement paresseux que ton lit t’a envoyé un message de plainte.",
"T’es tellement con que Siri te dit 'non'.",
"T’es tellement nul que même ton ombre te fuit.",
"T’es tellement froid que même un glaçon te trouve glacial.",
"T’es tellement lent que les tortues t’ont doublé en marchant.",
"T’es tellement moche que ton miroir te demande pardon.",
"T’es tellement idiot que Google refuse de répondre à tes questions.",
"T’es tellement ridicule que les clowns te prennent comme exemple.",
"T’es tellement faible que même les feuilles te repoussent.",
"T’es tellement maladroit que même les murs t’évitent.",
"T’es tellement paresseux que ton lit t’a envoyé un message de plainte.",
"T’es tellement con que Siri te dit 'non'.",
"T’es tellement nul que les zombies t’ignorent.",
"T’es tellement idiot que même ton chat te regarde avec pitié.",
"T’es tellement bizarre que les fantômes t’évitent.",
"T’es tellement fade que le sel refuse de t’accompagner.",
"T’es tellement lent que les limaces te dépassent.",
"T’es tellement nul que même les araignées te fuient.",
"T’es tellement faible que les sacs de riz te dominent.",
"T’es tellement moche que les pierres te rejettent.",
"T’es tellement idiot que les plantes te prennent pour un parasite.",
"T’es tellement ridicule que les escargots te battent en course.",
"T’es tellement paresseux que le canapé te quitte.",
"T’es tellement con que ton réveil te fait des blagues.",
"T’es tellement nul que même ton Wi-Fi t’ignore.",
"T’es tellement froid que les glaciers te remercient.",
"T’es tellement bizarre que ton ombre te fuit.",
"T’es tellement lent que même les escargots te rient au nez.",
"T’es tellement nul que même les ordinateurs te bloquent.",
"T’es tellement idiot que les intelligences artificielles te regardent bizarre.",
"T’es tellement faible que les moustiques te dominent.",
"T’es tellement ridicule que les clowns se moquent de toi.",
"T’es tellement nul que les pigeons te fuient.",
"T’es tellement idiot que même ton miroir te juge.",
"T’es tellement bizarre que ton chat te fuit.",
"T’es tellement moche que les poupées ont peur de toi.",
"T’es tellement nul que ton réveil te réveille pour te dire 'stop'.",
"T’es tellement con que tu as besoin de GPS pour aller aux toilettes.",
"T’es tellement lent que même les escargots font la course contre toi et gagnent.",
"T’es tellement froid que les igloos te demandent conseil.",
"T’es tellement idiot que même les plantes ne veulent pas t’écouter.",
"T’es tellement moche que ton reflet se cache derrière un rideau.",
"T’es tellement nul que les ordinateurs t’ignorent.",
"T’es tellement faible que même les moustiques t’attaquent en groupe.",
"T’es tellement ridicule que les clowns t’invitent à des cours de perfectionnement.",
"T’es tellement paresseux que ton lit a pris un avocat contre toi.",
"T’es tellement con que ton téléphone t’ignore quand tu l’appelles.",
"T’es tellement nul que même ton chien refuse de te suivre.",
"T’es tellement bizarre que les fantômes t’ignorent.",
"T’es tellement fade que le sel te fuit.",
"T’es tellement lent que les limaces te doublent.",
"T’es tellement nul que même les araignées te craignent.",
"T’es tellement faible que les sacs de riz te repoussent.",
"T’es tellement moche que les pierres te détestent.",
"T’es tellement idiot que les plantes te prennent pour un parasite.",
"T’es tellement ridicule que les escargots te battent au sprint.",
"T’es tellement paresseux que le canapé te quitte.",
"T’es tellement con que ton réveil te joue des tours.",
"T’es tellement nul que même ton Wi-Fi te bloque.",
"T’es tellement froid que les glaciers te trouvent tiède.",
"T’es tellement bizarre que ton ombre te fuit.",
"T’es tellement lent que les escargots te doublent.",
"T’es tellement nul que les ordinateurs t’ignorent.",
"T’es tellement idiot que les IA te regardent de travers.",
"T’es tellement faible que les moustiques te dominent.",
"T’es tellement ridicule que les clowns rient de toi.",
"T’es tellement nul que même les pigeons te fuient.",
"T’es tellement idiot que ton miroir se cache.",
"T’es tellement moche que les poupées te craignent.",
"T’es tellement nul que ton réveil te réveille pour te dire 'arrête'.",
"T’es tellement con que tu as besoin de GPS pour t’asseoir.",
"T’es tellement lent que les tortues te doublent en marchant.",
"T’es tellement froid que les igloos te demandent conseil.",
"T’es tellement idiot que même les plantes te fuient.",
"T’es tellement moche que ton reflet se cache derrière un rideau.",
"T’es tellement nul que les ordinateurs t’ignorent.",
"T’es tellement faible que les moustiques t’attaquent.",
"T’es tellement ridicule que les clowns t’invitent à des cours.",
"T’es tellement paresseux que ton lit a pris un avocat contre toi.",
"T’es tellement con que ton téléphone t’ignore.",
"T’es tellement nul que même ton chien refuse de te suivre.",
"T’es tellement bizarre que les fantômes t’ignorent.",
"T’es tellement fade que le sel te fuit.",
"T’es tellement lent que les limaces te doublent.",
"T’es tellement nul que même les araignées te craignent.",
"T’es tellement faible que les sacs de riz te repoussent.",
"T’es tellement moche que les pierres te détestent.",
"T’es tellement idiot que les plantes te prennent pour un parasite.",
"T’es tellement ridicule que les escargots te battent au sprint.",
"T’es tellement paresseux que le canapé te quitte.",
"T’es tellement con que ton réveil te joue des tours.",
"T’es tellement nul que même ton Wi-Fi te bloque.",
"T’es tellement froid que les glaciers te trouvent tiède."
  // … ajoute ici toutes les autres punchlines (500+)
];

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (!message.guild) return; // ignore les messages privés
  if (message.content.startsWith('!punch')) {
    const user = message.mentions.users.first();
    if (!user) {
      return message.channel.send("Tu dois mentionner quelqu'un !");
    }
    const randomPunch = punchlines[Math.floor(Math.random() * punchlines.length)];
    message.channel.send(`${user}, ${randomPunch}`);
  }
});

client.login(TOKEN);
