//import { buildCustomElementConstructor } from 'lwc';

export default function buildAndRegisterCustomElement(elementName, elementClass) {
    if (!customElements.get(elementName)) {
        // buildCustomElementConstructoris deprecated
        //const customElement = buildCustomElementConstructor(elementClass);
        const customElement = elementClass.CustomElementConstructor
        customElements.define(elementName, customElement);
    }
}
