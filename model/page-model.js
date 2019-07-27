import {Selector, t} from 'testcafe';

const faker = require('faker');
faker.locale = 'pl';


export default class Page {
    constructor() {
        this.loginInput = Selector('#userLoginEmail');
        this.passwordInput = Selector('#userLoginPassword');
        this.signInButton = Selector('.width-80').withText('ZALOGUJ');
    }

    async login(name, password) {
        await t
            .typeText(this.loginInput, name)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }

    async addToBasket() {
        await t
            .navigateTo('https://sklep2-dev.merida.com.pl/produkt/wnekowy-pojemnik-maxi-na-reczniki-papierowe-zintegrowany-z-koszem-profile-stal-matowa')
            .click(Selector('.button-add-to-cart').withText('DO KOSZYKA'))
            .wait(2000)
            .navigateTo('https://sklep2-dev.merida.com.pl/koszyk')
    }

    async stepOne() {
        await t
            .click(Selector('.nav-link').withText('KUPUJĘ BEZ ZAKŁADANIA KONTA'))
            .click(Selector('.on-line').parent().parent().parent().find('.custom-control-input'))
            .click(Selector('.delivery-method-module').find('.custom-control-input'))
            .wait(1000)
            .click(Selector('.btn-primary').withText('PRZEJDŹ DO DANYCH ZAMÓWIENIA'));
    }

    async stepTwo(person) {
        let email = faker.internet.email();

        switch (person) {
            case 'Private':
                await t
                    .click(Selector('.nav-link').withText('OSOBA PRYWATNA'))

                    .wait(1000);

                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
        await t
            .typeText(Selector('#customerName'), faker.name.findName())
            .typeText(Selector('#customeraddress'), faker.address.streetAddress())
            .typeText(Selector('#zipcode'), faker.address.zipCode())
            .typeText(Selector('#city'), faker.address.city())
            .typeText(Selector('#customerphone'), '323232')
            .typeText(Selector('#email'), email)
            .typeText(Selector('#reemail'), email)
            .click(Selector('.btn-primary').withText('PRZEJDŹ DO PODSUMOWANIA'))
            .wait(2000)

        ;

    }

    async stepThree() {

        await t


            .click(Selector('#checkbox1'))
            .click(Selector('#checkbox2'))
            .click(Selector('#checkbox3'))
            .click(Selector('.btn-primary').withText('ZAMAWIAM'));

    }
}
