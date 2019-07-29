import {t} from 'testcafe';

export default async function () {
    const {error} = await t.getBrowserConsoleMessages();

    await t.expect(error[0]).notOk();
}
import Page from './model/page-model';
//komentarz
//komentarz
const page = new Page();
import {Selector, RequestLogger} from 'testcafe';


const urlStepOneValidation = 'https://sklep2-dev-api.merida.com.pl/api/public/v1/carts/1/steps/validations';
const urlStepTwoValidation = 'https://sklep2-dev-api.merida.com.pl/api/public/v1/carts/2/steps/validations';

const loggerStepOne = RequestLogger({urlStepOneValidation, method: 'post'}, {
    logResponseHeaders: true,
    logResponseBody: true
});
const loggerStepTwo = RequestLogger({urlStepTwoValidation, method: 'post'}, {
    logResponseHeaders: true,
    logResponseBody: true
});


fixture`merida sklep`
    .page(`https://sklep2-dev.merida.com.pl`)// https://github.com/mzabriskie/react-example;
    // .requestHooks(loggerStepOne)
    .requestHooks(loggerStepTwo);


// test('zamowienie przez osobe prywatna niezalogowana - krok1', async t => {
//     await t
//         .maximizeWindow();
//     await page.addToBasket();
//     await page.stepOne();
//     await t
//
//         .expect(loggerStepOne.contains(r => r.response.statusCode === 200)).ok();
//
//     //   .click(Selector('.btn-primary').withText('PRZEJDŹ DO PODSUMOWANIA'))
//     //   .click(Selector('#checkbox1'))
//     //   .click(Selector('#checkbox2'))
//     //   .click(Selector('#checkbox3'))
//     //   .click(Selector('.btn-primary').withText('ZAMAWIAM'))
//     //   .wait(2000)
//     //   .takeScreenshot('my-fixture/thank-you-page.png');
//
//
// });
test('zamowienie przez osobe prywatna niezalogowana - krok1, krok2', async t => {


    await t
        .maximizeWindow();
    await page.addToBasket();
    await page.stepOne();
    await page.stepTwo('Private')
    await t

        .expect(loggerStepTwo.contains(r => r.response.statusCode === 200)).ok()
    await page.stepThree();
//     await t
// .click(Selector('.nav-link').withText('OSOBA PRYWATNA'))
//     //  .typeText(Selector('#customerTaxNumber'), '123456789')
//         .typeText(Selector('#customerName'), 'TEST CAFE')
//         .typeText(Selector('#customeraddress'), 'TEST CAFE')
//         .typeText(Selector('#zipcode'), '51-655')
//         .typeText(Selector('#city'), 'TEST CAFE')
//         .typeText(Selector('#customerphone'), '123456789')
//         .typeText(Selector('#email'), 'testcafe@lsb.com.pl')
//         .typeText(Selector('#reemail'), 'testcafe@lsb.com.pl');


});

// test('zamowienie przez osobe prywatna niezalogowana - krok1, krok2,krok3', async t => {
//     console.log(logger);
//
//     await page.addToBasket();
//     await t
//         .maximizeWindow()
//
//         .expect(logger.contains(r => r.response.statusCode === 200)).ok()
//         .click(Selector('.nav-link').withText('OSOBA PRYWATNA'))
//         //  .typeText(Selector('#customerTaxNumber'), '123456789')
//         .typeText(Selector('#customerName'), 'TEST CAFE')
//         .typeText(Selector('#customeraddress'), 'TEST CAFE')
//         .typeText(Selector('#zipcode'), '51-655')
//         .typeText(Selector('#city'), 'TEST CAFE')
//         .typeText(Selector('#customerphone'), '123456789')
//         .typeText(Selector('#email'), 'testcafe@lsb.com.pl')
//         .typeText(Selector('#reemail'), 'testcafe@lsb.com.pl');
//     //   .click(Selector('.btn-primary').withText('PRZEJDŹ DO PODSUMOWANIA'))
//     //   .click(Selector('#checkbox1'))
//     //   .click(Selector('#checkbox2'))
//     //   .click(Selector('#checkbox3'))
//     //   .click(Selector('.btn-primary').withText('ZAMAWIAM'))
//     //   .wait(2000)
//     //   .takeScreenshot('my-fixture/thank-you-page.png');
//
//
// });
