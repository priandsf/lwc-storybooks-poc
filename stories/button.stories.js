import { LightningElement } from 'lwc';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Button from './cw/button';

buildAndRegisterCustomElement('cw-button', Button);

export default {
    title: "Base Components/Button"
};
  
export const base = () => `
        <div class="slds-p-around_medium">
            <cw-button label="Base Button"></cw-button>
        </div>    
    `
export const neutral = () => `
        <div class="slds-p-around_medium">
            <cw-button variant="neutral" label="Neutral Button"></cw-button>
        </div>    
    `
export const brand =  () => `
        <div class="slds-p-around_medium">
            <cw-button variant="brand" label="Brand Button"></cw-button>
        </div>    
    `
export const destructive = () => `
        <div class="slds-p-around_medium">
            <cw-button variant="destructive" label="Destructive Button"></cw-button>
        </div>    
    `
export const success = () => `
        <div class="slds-p-around_medium">
            <cw-button variant="success" label="Success Button"></cw-button>
        </div>    
    `
