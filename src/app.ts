import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from './interfaces/HasFormatter.js';
import {ListTemplate} from "./classes/ListTemplate.js";

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

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    listElem.render(doc, type.value, 'start');
});
