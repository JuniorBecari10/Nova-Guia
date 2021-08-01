const hour = document.getElementById("hour"); // Última Edição: 21/06/2021 - 17:57
const date = document.getElementById("date");

const saudacao = document.getElementById("saudacao");

const frase = document.getElementById("frase");
const autor = document.getElementById("autor");

const body = document.getElementsByTagName("body")[0];

const divlinks = document.getElementsByClassName("link")[0];

const box = document.getElementById("box");

const enter = 13;

function addKeyListeners() {
   window.onkeydown = keydown;
   window.onkeyup = keyup;
}

function keydown(e) {
    if (e.keyCode === enter) {
        let url = "https://duckduckgo.com/?q=" + box.value;
        let encoded = encodeURI(url);
        
        // codificar o que o encodeURI não codifica
        encoded = encoded.replace("#", "%23");
        encoded = encoded.replace("&", "%26");
        
        window.open(encoded, "_self");
    }
}

function keyup(e) {
    
}

function time() {
    var d = new Date();

    hour.innerHTML = (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes() + ":" + (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
    date.innerHTML = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) + "/" + d.getFullYear();

    let hnow = d.getHours(); // hour now

    if (hnow >= 0 && hnow <= 12)
     saudacao.innerHTML = "Bom dia, Boot.";

    if (hnow >= 12 && hnow <= 18)
     saudacao.innerHTML = "Boa tarde, Boot.";
 
    if (hnow >= 18)
     saudacao.innerHTML = "Boa noite, Boot.";
     
     setTimeout(function () { time(); }, 1000);
}

addKeyListeners();
time();

// -- End Date --

var frases = [
 newFrase("Tudo posso naquele que me fortalece.", "(Filipenses 4:13)"),
 newFrase("Até aqui nos ajudou o Senhor!", "(I Samuel 7:12)"),
 newFrase("O Senhor é o meu pastor, nada me faltará.", "(Salmos 23:1)"),
 newFrase("Não há medo no amor.", "(João 4:18)"),
 newFrase("O mais importante para Deus é o que está no coração.", "(I Samuel 16:7)"),
 newFrase("O que vem de Deus, traz paz.", "(João 14:27)"),
 newFrase("O choro pode durar uma noite, mas a alegria vem pela manhã.", "(Salmos 30:5)"),
 newFrase("Amem-se uns aos outros como Eu os amei.", "(João 15:12)"),
 newFrase("Regozijai-vos, sempre, no Senhor; outra vez digo: regozijai-vos.", "(Filipenses 4:4)"),
 newFrase("Revistam-se do amor, que é o elo perfeito.", "(Colossenses 3:14)"),
 newFrase("A boca fala do que está cheio o coração.", "(Mateus 12:34)"),
 newFrase("A nossa capacidade vem de Deus.", "(II Coríntios 3:5)"),
 newFrase("Se Deus é por nós, quem será contra nós?", "(Romanos 8:31)"),
 newFrase("Ele enxugará dos seus olhos toda lágrima.", "(Apocalipse 21:4)"),
 newFrase("Se Cristo vos libertar, verdadeiramente sereis livres.", "(João 8:36)"),
 newFrase("Bendito é o que vem em nome do Senhor!", "(Mateus 21:9)"),
 newFrase("Os verdadeiros adoradores adorarão o Pai em espírito e em verdade.", "(João 4:23)"),
 newFrase("O amigo ama em todos os momentos; é um irmão na adversidade.", "(Provérbios 17:17)"),
 newFrase("Como é bom um conselho na hora certa!", "(Provérbios 15:23)"),
 newFrase("Ele é fiel em tudo o que faz.", "(Salmos 33:4)"),
 newFrase("Combati o bom combate, acabei a carreira, guardei a fé.", "(II Timóteo 4:7)"),
 newFrase("Bendito é o Rei de Israel!", "(João 12:13)"),
 newFrase("Aproveitem ao máximo todas as oportunidades.", "(Colossenses 4:5)"),
 newFrase("O castigo que nos trouxe paz estava sobre Ele, e pelas Suas feridas fomos curados.", "(Isaías 53:5)"),
 newFrase("Espera no Senhor. anima-te, e ele fortalecerá o teu coração, espera, pois, no Senhor.", "(Salmos 27:14)"),
 newFrase("O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", "(I Coríntios 13:4)"),
 newFrase("O que é nascido de Deus vence o mundo.", "(I João 5:4)"),
 newFrase("Não tema, Eu o ajudarei.", "(Isaías 41:13)"),
 newFrase("Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.", "(Salmos 46:1)"),
 newFrase("Venham a Mim, todos os que estão cansados, Eu darei descanso a vocês.", "(Mateus 11:28)"),
 newFrase("Confie no Senhor de todo o seu coração.", "(Provérbios 3:5)"),
 newFrase("O meu socorro vem do Senhor, que fez os céus e a terra.", "(Salmos 121:2)"),
 newFrase("Quem não ama não conhece a Deus, porque Deus é amor.", "(I João 4:8)"),
 newFrase("Mil cairão ao teu lado; e dez mil à tua direita, mas tu não serás atingido.", "(Salmos 91:7)"),
 newFrase("Direi do Senhor: Ele é o meu Deus, o meu Refúgio, a minha Fortaleza, e Nele confiarei.", "(Salmos 91:2)"),
 newFrase("Porque a loucura de Deus é mais sábia que a sabedoria humana, e a fraqueza de Deus é mais forte que a força do homem.", "(I Coríntios 1:25)"),
 newFrase("Bem-aventurados os pacificadores, pois serão chamados filhos de Deus.", "(Mateus 5:9)"),
 newFrase("Deus justo, que sondas a mente e o coração dos homens, dá fim à maldade dos ímpios e ao justo dá segurança.", "(Salmos 7:9)"),
 newFrase("Mas eu, quando estiver com medo, confiarei em Ti. Em Deus, cuja palavra eu louvo, em Deus eu confio e não temerei. Que poderá fazer-me o simples mortal?", "(Salmos 56:3-4)"),
 newFrase("Pois nada é impossível para Deus.", "(Lucas 1:37)"),
 newFrase("Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.", "(Deuteronômio 31:6)"),
 newFrase("Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.", "(Hebreus 11:1)"),
 newFrase("Deixo a paz a vocês; a Minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.", "(João 14:27)"),
 newFrase("Todavia, Deus, que é rico em misericórdia, pelo grande amor com que nos amou, deu-nos vida com Cristo quando ainda estávamos mortos em transgressões - pela graça vocês são salvos.", "(Efésios 2:4-5)"),
 newFrase("No princípio, era o Verbo e o Verbo estava com Deus, e o Verbo era Deus.", "(João 1:1)"),
 newFrase("Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.", "(Mateus 6:33)"),
 newFrase("Sejam praticantes da Palavra, e não apenas ouvintes, enganando vocês mesmos.", "(Tiago 1:22)"),
 newFrase("Cada palavra de Deus é comprovadamente pura; Ele é um escudo para quem n'Ele se refugia.", "(Provérbios 30:5)"),
 newFrase("Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para todo aquele que Nele crê não pereça, mas tenha a vida eterna.","(João 3:16)"),
 newFrase("Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.","(Romanos 5:8)"),
 newFrase("O vinho é escarnecedor, e a bebida forte, alvoroçadora; e todo aquele que neles errar nunca será sábio.","(Provérbios 20:1)"),
 newFrase("Da soberba só provém a contenda, mas com os que se aconselham, se acha a sabedoria.","(Provérbios 13:10)"),
 newFrase("Não estejais inquietos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplicas, com ação de graças.","(Filipenses 4:6)"),
 newFrase("Lança o teu pão sobre as águas, porque, depois de muitos dias, o acharás.","(Eclesiastes 11:1)")
];
 
 let index = random(frases.length);
 
 frase.innerHTML = frases[index].frase;
 autor.innerHTML = frases[index].autor;
 
function newFrase(frase, autor) { 
 return {
  frase,
  autor
 }
}
 
function random(num) {
  return Math.floor(Math.random() * num);
}

// -- End Frases --

const numimgs = 12;
let indeximg = random(numimgs) + 1;

body.style.backgroundImage = "url(Resources/Images/Backgrounds/" + indeximg + ".jpg)";

// -- End Images --

/*
Links:

YouTube
CMSP
Instagram
Google Drive
GitHub
Classroom
Gmail
Facebook
Messenger
WhatsApp
Canva
*/

let links = [
 newLink("https://youtube.com", "YouTube", "Resources/Images/Icons/youtube.png"),
 newLink("https://cmspweb.ip.tv", "CMSP Web", "Resources/Images/Icons/cmsp.png"),
 //newLink("https://instagram.com", "Instagram", "Resources/Images/Icons/instagram.png"),
 //newLink("https://drive.google.com", "Google Drive", "Resources/Images/Icons/google-drive.png"),
 newLink("https://github.com", "GitHub", "Resources/Images/Icons/github.png"),
 newLink("https://classroom.google.com", "Classroom", "Resources/Images/Icons/classroom.png"),
 newLink("https://mail.google.com", "Gmail", "Resources/Images/Icons/gmail.png"),
 //newLink("https://facebook.com", "Facebook", "Resources/Images/Icons/facebook.png"),
 //newLink("https://messenger.com", "Messenger", "Resources/Images/Icons/messenger.png"),
 //newLink("https://web.whatsapp.com", "WhatsApp Web", "Resources/Images/Icons/whatsapp.png"),
 //newLink("https://canva.com", "Canva", "Resources/Images/Icons/canva.png"),
];

function newLink(link, name, icon) {
 return {
  link,
  name,
  icon
 }
}

for (let ind in links) {
 let l = links[ind];

 var link = document.createElement("div");
 
 var img = document.createElement("img");
 img.src = l.icon;
 
 img.addEventListener("click", function(e) {
  window.location = l.link;
 });
 
 var anchor = document.createElement("a");
 var a_text = document.createTextNode(l.name);
 anchor.href = l.link;
 anchor.appendChild(a_text);
 
 link.appendChild(img);
 link.appendChild(anchor);
 
 link.className = "linknode";
 
 divlinks.appendChild(link);
}
