const puppeteer = require('puppeteer');
const fs = require('fs');
const https  =require('https')
const listaSpot = [];

(async () => {
    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.xbzbrindes.com.br/brindes');

        /*
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
        */

        const links = await page.$$eval(".img-prod a", el => el.map(link => link.href))
        
        for(const [index, link] of links.entries()){
            console.log(link)
            console.log(index)
            await page.goto(link)
            await page.waitForTimeout(2000);
            const titulo = await page.$eval(".produto-nome", el => el.innerText)
            const ref = await page.$eval("#item_referencia", el => el.innerText)
            const descricao = await page.$eval(".desc-sub", el => el.innerText)
            const cores = await page.$$eval(".cor_ref_descricao ul li img", el => el.map(e => e.src))
            const imagens = await page.$$eval(".fancybox img", el => el.map(e => e.src))
            const imagemProduto = imagens
            

            for(let i = 0; i < imagemProduto.length; i++){ 
                const urlImage = imagemProduto[i].toString()
                let nameImage = urlImage.split("/").pop()
                saveImageToDisck(urlImage, "../public/img-xbz/" + nameImage)       
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
        fs.writeFileSync("../src/api/xbz.json", jsonData);
        
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