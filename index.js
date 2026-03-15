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
"T'inquiète t'auras pas la calvitie a ton big daron par ce que lui ne l'avais pas a ton âge.",
"T'es tellement moche que Google Maps te demande la confirmation pour te localiser.",
"Ton existence est la preuve que la nature fait des erreurs.",
"Si le con était une science, tu serais prix Nobel.",
"T'as un visage qui pourrait faire fuir même les démons.",
"T'es tellement paresseux que ton lit t'a envoyé un message de plainte.",
"Ton QI est tellement bas que même les plantes vertes te jugent.",
"Ta gueule ressemble à un accident de voiture en slow motion.",
"T'es tellement inutile que même les moustiques t'ignorent.",
"Si t'étais une blague, personne ne rirait même par politesse.",
"T'as autant de charme qu'une borne d'escalier en béton.",
"Ton souffle sent la mort d'un rat dans une canalisation.",
"T'es tellement con que même les mèmes ont du mal à comprendre tes blagues.",
"Ta mère aurait dû t'avaler, c'était plus propre.",
"T'as un sourire qui pourrait faire pleurer un clown.",
"T'es tellement laid que ton miroir a demandé un exorcisme.",
"T'as un ego plus gros que ta liste de compétences, ce qui est pas difficile.",
"T'es tellement insignifiant que même les spams t'ignorent.",
"T'as une intelligence si brillante qu'elle éclaire... l'obscurité totale.",
"T'es tellement lent que même les limaces te doublent en mode sport.",
"T'as une personnalité aussi plate qu'une route en Alsace.",
"Ton corps est une insulte à la biologie.",
"T'as l'hygiène d'un rat des égouts en grève.",
"T'es tellement pourri que même les vers refusent de te manger.",
"T'as un talent si rare pour la merde que même les toilettes te refusent.",
"T'es tellement nul que même les cheats te refusent leur aide.",
"T'as une gueule de porc qui a fait une chute dans l'acide.",
"T'es tellement dégueulasse que même les égouts te refusent l'accès.",
"Ta présence est si toxique que les plantes meurent à trois mètres de toi.",
"T'es tellement prévisible que même une horloge cassée te devance.",
"T'as autant de swagger qu'un distributeur de tickets de métro en panne.",
"T'es tellement ennuyeux que même les murs s'endorment quand tu parles.",
"T'as un sens de l'humour aussi sec que ton compte en banque.",
"T'es tellement con que même les comas t'abandonnent.",
"J'échangerai ta vie contre un demi et je m'estimerai encore volé.",
"Si je voulais voir un trou du cul, je regarderais ta photo de profil.",
"T'as la valeur d'un bout de papier toilette déjà utilisé.",
"T'es tellement laid que même les aveugles te sentent venir.",
"T'as plus de chances de réussir à respirer sous l'eau que de réussir dans ta vie de merde.",
"Si l'ignorance était une maladie, tu serais en soins palliatifs.",
"T'as le charisme d'une chaussette sale et la pertinence d'un distributeur de papier toilette en panne.",
"Si la bêtise était de l'or, tu serais plus riche que Bezos après avoir racheté l'univers.",
"T'es le genre de personne qui mettrait des couverts pour manger une banane.",
"Si tu étais un légume, tu serais un cornichon en dépression.",
"Ton cerveau fonctionne comme Windows 95 : lent, bugué et obsolète depuis 25 ans.",
"T'as autant de game que mon GPS en mode avion.",
"T'es tellement nul que même les bots te griefent.",
"Ton ping est plus élevé que ton nombre de neurones actifs.",
"T'as la précision d'un joueur de Fortnite sur un Nokia 3310.",
"Si tu étais un code, tu serais plein de bugs et personne voudrait te débugger.",
"Ton opinion a autant de valeur qu'une pièce de monnaie collée dans une porte.",
"T'as une odeur aussi forte que ton incompétence.",
"T'es tellement faible que même le vent te pousse par pitié.",
"T'as un visage qui fait peur aux fantômes.",
"T'es tellement con que tu te ferais arnaquer par une machine à sous.",
"T'as la dextérité d'un hippopotame sur de la glace.",
"T'es tellement lâche que ta propre ombre te quitte la nuit.",
"T'as un corps qui crie 'abandon' à chaque pas.",
"T'es tellement sale que même les microbes te refusent comme habitat.",
"T'as une voix qui pourrait briser du verre à dix mètres.",
"T'es tellement stupide que tu crois que 'exponentiel' c'est une marque de café.",
"T'as le talent d'une porte et la personnalité d'un mur.",
"T'es tellement insignifiant que si tu disparaissais, personne ne s'en rendrait compte.",
"T'as une gueule qui ferait fuir un convoyeur de fonds.",
"T'es tellement moche que les caméras de surveillance te pixellisent par respect.",
"T'as un cerveau qui tourne sous Windows Vista.",
"T'es tellement nul que tu te perds dans un couloir sans issue.",
"T'as le sex-appeal d'un parpaing.",
"T'es tellement con que tu pourrais te noyer dans une flaque d'eau.",
"T'as une gueule de mec qui a mangé un citron en se faisant mordre par une guêpe.",
"T'es tellement lent que même les escargots te font des coups de klaxon.",
"T'as autant de style qu'un frigo en panne.",
"T'es tellement chiant que même les pubs YouTube te zappent.",
"T'as une intelligence qui rivalise avec celle d'une brique.",
"T'es tellement moche que ton reflet te met un doigt d'honneur.",
"T'as une présence aussi agréable qu'une crise de goutte.",
"T'es tellement con que tu confonds 'hommage' et 'fromage'.",
"T'as le charme d'une plaque de tôle rouillée.",
"T'es tellement laid que les masques à gaz te font peur.",
"T'as une personnalité aussi passionnante qu'un mode d'emploi pour un grille-pain.",
"T'es tellement nul que même les plus gros loosers te prennent de haut.",
"T'as une gueule qui ferait pleurer un broyeur d'ordures.",
"T'es tellement con que tu as besoin d'un GPS pour trouver tes mains.",
"T'as autant de talent qu'un tronc d'arbre mort.",
"T'es tellement inintéressant que même les livres s'endorment quand tu les ouvres.",
"T'as une hygiène personnelle qui relève du crime contre l'humanité.",
"T'es tellement paresseux que la sieste te considère comme un sport.",
"T'as un visage qui pourrait servir de test de résistance pour les matériaux.",
"T'es tellement con que tu penses que 'solitaire' c'est un sport de équipe.",
"T'as le charisme d'une note de frais impayée.",
"T'es tellement laid que les oiseaux changent de continent en te voyant.",
"T'as une intelligence qui fait passer une pomme de terre pour un génie.",
"T'es tellement nul que tu pourrais rater une fusée en étant assis dedans.",
"T'as une gueule de personne qui a perdu un combat contre un essuie-glace.",
"T'es tellement con que tu te ferais avoir par un poisson d'avril en octobre.",
"T'as autant de grâce qu'un éléphant dans un magasin de porcelaine.",
"T'es tellement lourd que même la gravité se plaint de toi.",
"T'as une voix qui pourrait faire fuir une meute de loups.",
"T'es tellement moche que les zombies te recracheraient.",
"T'as une personnalité aussi excitante qu'un pot de peinture qui sèche.",
"T'es tellement con que tu pourrais te faire arnaquer par un panneau 'sortie de secours'.",
"T'as le style d'un meuble IKEA mal monté.",
"T'es tellement laid que même les aveugles ferment les yeux.",
"T'as une intelligence qui fait passer un rocher pour un grand penseur.",
"T'es tellement nul que tu te fais battre par un enfant au morpion.",
"T'as une gueule qui ferait fuir même un affamé.",
"T'es tellement con que tu crois que 'cryptomonnaie' c'est une monnaie pour les morts.",
"T'as autant de charme qu'une facture d'hôpital.",
"T'es tellement lent que même les glaciers te trouvent lent.",
"T'as une hygiène buccale qui effraie les dentistes.",
"T'es tellement paresseux que tu demandes à quelqu'un d'autre de respirer pour toi.",
"T'as un visage qui pourrait faire peur à un croque-mort.",
"T'es tellement con que tu confonds 'sarcasme' et 'saucisson'.",
"T'as le talent d'un trou dans une poche.",
"T'es tellement laid que les photos de toi sont interdites dans plus de 50 pays"
  // … ajoute ici toutes les autres punchlines (500+)
];

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!punch')) {

    const user = message.mentions.users.first();

    if (!user) {
      return message.channel.send("Tu dois mentionner quelqu'un !");
    }

    // si quelqu'un punch le bot
    if (user.id === client.user.id) {
      return message.channel.send("Tu crois vraiment pouvoir punch le bot ? Mauvaise idée...");
    }

    // Liste des comptes protégés
const protectedUsers = [
  "1258841903575597117", // premier compte
  "1011257897734389790" // <-- remplace par le vrai ID
];

// si quelqu'un punch un compte protégé
if (protectedUsers.includes(user.id)) {
  return message.channel.send("On ne clash pas le BOSS sale chienne 😎");
}

    const randomPunch = punchlines[Math.floor(Math.random() * punchlines.length)];
    message.channel.send(`${user}, ${randomPunch}`);
  }
});

client.login(TOKEN);
