const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const route = require('color-convert/route');
const { Promise } = require('workerpool');
let testMessages = {
    1: {
        author: 'Ivan',
        content: 'My message'
    },
    2: {
        author: 'Pesho',
        content: 'My Pesho'
    }
}
let testSendMessage = {
    1: {
        author: 'Krisi',
        content: 'I love Ivan',
        _id: 3
    }
}
function fakeResposnse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}
let clientUrl = 'http://127.0.0.1:5500/index.html'
let browser, page;
describe('E2E tests', function () {
    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 1000 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); })
    afterEach(async () => { await page.close(); });

    // describe('load message', function () {
    //     it('shoud call server', async () => {
    //         await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResposnse(testMessages)))
    //         await page.goto(clientUrl)
    //         const [response] = await Promise.all([
    //             page.waitForResponse('**/jsonstore/messenger'),
    //             page.click('#refresh'),
    //         ])
    //         let result = await response.json();

    //         expect(result).to.eql(testMessages);
    //     })

    //     it('shoud data in text area', async () => {
    //         await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResposnse(testMessages)))
    //         await page.goto(clientUrl)

    //         const [response] = await Promise.all([
    //             page.waitForResponse('**/jsonstore/messenger'),
    //             page.click('#refresh'),
    //         ])

    //         let textAreaText = await page.$eval('#messages', (textArea) => textArea.value);
    //         let text = Object.values(testMessages).map(x => `${x.author}: ${x.content}`).join('\n');
    //         expect(textAreaText).to.eql(text);

    //     })
    // })
    describe('send messages', function () {
        it.only('shoud send messagas', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Ivan',
                content: 'I love Ivan',
            }
            await page.route('**/jsonstore/messenger', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResposnse(testSendMessage));
                }
            })
            await page.goto(clientUrl)

            await page.fill('#author', expected.author);
            await page.fill('#content', expected.content);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit'),
            ])

            let result = JSON.parse(requestData);
            expect(result).to.eql(expected)


        })
    })
})