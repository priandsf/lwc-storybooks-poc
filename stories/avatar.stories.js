import buildAndRegisterCustomElement from '../stories/utils/build-custom-element';
import Avatar from 'c/avatar';

buildAndRegisterCustomElement('c-avatar', Avatar);

export default {
    title: "Base Components/Avatar"
};

export const withInitials = () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar initials="RG" fallback-icon-name="custom:custom92"></c-avatar>
        </div>    
    `
export const withImage = () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar src="assets/images/avatar1.jpg"></c-avatar>
        </div>    
    `
export const withIcon = () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar fallback-icon-name="standard:account"></c-avatar>
        </div>
    `
export const variants = () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar variant="circle" src="assets/images/avatar1.jpg"></c-avatar>
            <c-avatar variant="square" src="assets/images/avatar1.jpg"></c-avatar>
        </div>    
    `
