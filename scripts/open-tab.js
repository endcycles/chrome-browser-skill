import puppeteer from 'puppeteer';

const PORT = 9222;
const url = process.argv[2];

if (!url) {
    console.error("Usage: node open-tab.js <url>");
    process.exit(1);
}

async function main() {
    try {
        const browserURL = `http://127.0.0.1:${PORT}`;
        const browser = await puppeteer.connect({ browserURL });
        
        const page = await browser.newPage();
        await page.goto(url);
        
        console.log(`Opened ${url}`);
        // We disconnect, but the page stays open in the browser process
        await browser.disconnect();
    } catch (e) {
        console.error("Error:", e.message);
        process.exit(1);
    }
}

main();
