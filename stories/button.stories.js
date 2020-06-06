import buildAndRegisterCustomElement from './utils/build-custom-element';
import Button from 'c/button';

buildAndRegisterCustomElement('c-button', Button);

export default {
    title: "Base Components/Button"
};
  
export const base = () => `
        <div class="slds-p-around_medium">
            <c-button label="Base Button"></c-button>
        </div>    
    `
export const neutral = () => `
        <div class="slds-p-around_medium">
            <c-button variant="neutral" label="Neutral Button"></c-button>
        </div>    
    `
export const brand =  () => `
        <div class="slds-p-around_medium">
            <c-button variant="brand" label="Brand Button"></c-button>
        </div>    
    `
export const destructive = () => `
        <div class="slds-p-around_medium">
            <c-button variant="destructive" label="Destructive Button"></c-button>
        </div>    
    `
export const success = () => `
        <div class="slds-p-around_medium">
            <c-button variant="success" label="Success Button"></c-button>
        </div>    
    `
