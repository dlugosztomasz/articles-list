/**
 * !! DO NOT MODIFY THIS FILE !!
 * If you feel something is wrong here - contact us.
 * In general you shouldn't be using up your time looking through this file ;)
 */
const http = require('http');

const fakeArticlesData = [
    { id: 789702, date: '2. februar 2019', image: 'https://placeimg.com/280/180/nature', category: 'sport', title: 'Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender', preamble: 'MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.' },
    { id: 123544, date: '1. oktober 2018', image: 'https://placeimg.com/280/180/nature', category: 'sport', title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!', preamble: 'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.' },
    { id: 157489, date: '5. februar 2019', image: 'https://placeimg.com/300/180/arch', category: 'fashion', title: 'Kongen stilte i Moon Boots: – Helt konge!', preamble: 'Kong Harald (81) får moteskryt for spenstig skovalg.' },
    { id: 126432, date: '24. mai 2018', image: '', category: 'sport', title: 'Dortmund drar fra etter overraskende Bayern-tap', preamble: 'Selv om Borussia Dortmund bare klarte 1-1 borte mot Eintracht Frankfurt, fikk de god hjelp av Leverkusen som slo Bayern München 3-1 i tysk bundesliga.' },
    { id: 872133, date: '13. desember 2018', image: 'https://placeimg.com/320/200/any', category: 'fashion', title: 'Cara Delevingne gjenskaper Janet Jacksons toppløsbilde for Balmain', preamble: 'Se de dristige bildene av supermodellen.' },
    { id: 432351, date: '8. november 2018', image: 'https://placeimg.com/320/200/any', category: 'fashion', title: '10 varme gensere til kalde vintermåneder', preamble: 'Jula varer helt til påske, og det samme gjør minusgradene. Her er genserne vi vil pakke oss inn i denne vinteren.' },
    { id: 846253, date: '19. september 2018', image: 'https://placeimg.com/320/200/any', category: 'sport', title: 'Kraftig snøvær avlyser VM-generalprøven', preamble: null },
    { id: 986521, date: '7. februar 2019', image: 'https://placeimg.com/280/200/any', category: 'fashion', title: 'Bør du følge smokingreglene?', preamble: 'Det finnes mange skrevne og uskrevne regler som beskriver hva en smoking egentlig er. Vi har tatt en titt på hvilke du bør følge, og hvilke du kan bryte.' },
    { id: 122866, date: '15. januar 2019', image: 'https://placeimg.com/280/180/any', category: 'sport', title: 'Her får lillebror gode råd av Petter Northug', preamble: 'Før NM-sprinten i fristil i Grova i Meråker, fikk Even Northug gode råd av storebror Petter.' },
];
const PORT = 6010;

function requestHandler(req, res) {
    let content;
    let status;
    if (Math.random() > 0.1) {
        if (req.url === '/articles/sports') {
            content = {articles: fakeArticlesData.filter(a => a.category === 'sport')};
            status = 200;
        } else if (req.url === '/articles/fashion') {
            content = {articles: fakeArticlesData.filter(a => a.category === 'fashion')};
            status = 200;
        } else {
            content = {message: 'Not found'};
            status = 404;
        }
    } else {
        content = { message: 'Ooooops! this shouldn\'t be shown to clients probably...' };
        status = 500;
    }

    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS * for simplicity
    res.setHeader('Content-Type', 'application/json'); // always json
    res.writeHead(status);
    res.end(JSON.stringify(content), 'utf-8');
}

http.createServer(requestHandler).listen(PORT, err => {
    if (err) {
        console.log('something bad happened', err);
        return;
    }
    console.log(`server is listening on port: ${PORT}`);
});
