const puppeteer = require('puppeteer');
const fs = require('fs');
const https  =require('https')
const listaSpot = [];

(async () => {
    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.spotgifts.com.br/pt/catalogo/');

        let lastHeight = await page.evaluate('document.body.scrollHeight');
        while (true) {
            await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
            await page.waitForTimeout(1000);
            let newHeight = await page.evaluate('document.body.scrollHeight');
            if (newHeight === lastHeight) {
                break;
            }
            lastHeight = newHeight;
        }

        const links = await page.$$eval(".produto", el => el.map(link => link.href))
        
        for(const [index, link] of links.entries()){
            console.log(index)
            await page.goto(link)
            await page.waitForTimeout(2000);
            const titulo = await page.$eval(".titulo", el => el.innerText)
            const ref = await page.$eval(".ref", el => el.innerText)
            const descricao = await page.$eval(".texto", el => el.innerText)
            const cores = await page.$$eval(".color span", el => el.map(e => e.style.backgroundColor))
            const imagens = await page.$$eval(".img-wrap img", el => el.map(e => e.src))
            const imagemProduto = imagens.filter(e => e.indexOf("_1.") > -1)
            

            for(let i = 0; i < imagemProduto.length; i++){ 
                const urlImage = imagemProduto[i].toString()
                let nameImage = urlImage.split("/").pop()
                saveImageToDisck(urlImage, "../public/img-spot/" + nameImage)       
            }

            const obj = {
                titulo,
                ref,
                descricao,
                cores,
                imagemProduto
            }

            listaSpot.push(obj)
        }
      
        const jsonData = JSON.stringify(listaSpot, null, 1);
        fs.writeFileSync("../src/api/spot_v3.json", jsonData);
        
        await browser.close();
    
    }catch(erro){
        console.log(erro)
    }
})();

function saveImageToDisck(url, path){
    const localPath = fs.createWriteStream(path)
    const request = https.get(url, response => {
        response.pipe(localPath)
    })
}