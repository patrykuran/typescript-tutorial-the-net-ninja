import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const ul = document.querySelector('ul')!;
const listElem = new ListTemplate(ul);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', e => {
    e.preventDefault();

    let doc: HasFormatter;

    let invoice: [string, string, number];
    invoice = [tofrom.value, details.value, amount.valueAsNumber];

    if (type.value === 'invoice') {
        doc = new Invoice(...invoice);
    } else {
        doc = new Payment(...invoice);
    }

    listElem.render(doc, type.value, 'start');
});
