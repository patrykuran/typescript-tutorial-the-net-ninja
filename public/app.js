import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const listElem = new ListTemplate(ul);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', e => {
    e.preventDefault();
    let doc;
    let invoice;
    invoice = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...invoice);
    }
    else {
        doc = new Payment(...invoice);
    }
    listElem.render(doc, type.value, 'start');
});
