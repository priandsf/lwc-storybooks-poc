import buildAndRegisterCustomElement from '../stories/utils/build-custom-element';
import Badge from 'c/badge';

buildAndRegisterCustomElement('c-badge', Badge);

export default {
    title: "Base Components/Badge"
};


export const default_ = () => `
        <div class="slds-p-around_medium">
            <c-badge label="Default"></c-badge>
        </div>    
    `
export const inverse = () => `
        <div class="slds-p-around_medium">
            <c-badge variant="inverse" label="Inverse"></c-badge>
        </div>    
    `
export const lightest = () => `
        <div class="slds-p-around_medium">
            <c-badge variant="lightest" label="Lightest"></c-badge>
        </div>    
    `    
