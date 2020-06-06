import buildAndRegisterCustomElement from '../stories/utils/build-custom-element';
import Icon from 'c/icon';

buildAndRegisterCustomElement('c-icon', Icon);

export default {
    title: "Base Components/Icon"
};

export const action = () => `
        <div class="slds-p-around_medium">
            <c-icon icon-name="action:approval"></c-icon>
            <c-icon icon-name="action:back"></c-icon>
            <c-icon icon-name="action:call"></c-icon>
        <div class="slds-p-around_medium">    
    `
export const doctype = () => `
        <div class="slds-p-around_medium">
            <c-icon icon-name="doctype:ai"></c-icon>
            <c-icon icon-name="doctype:excel"></c-icon>
            <c-icon icon-name="doctype:folder"></c-icon>
        <div class="slds-p-around_medium">    
    `
export const standard = () => `
        <div class="slds-p-around_medium">
            <c-icon icon-name="standard:account"></c-icon>
            <c-icon icon-name="standard:address"></c-icon>
            <c-icon icon-name="standard:all"></c-icon>
        <div class="slds-p-around_medium">    
    `
export const utitlity = () => `
        <div class="slds-p-around_medium">
            <c-icon icon-name="utility:activity"></c-icon>
            <c-icon icon-name="utility:alert"></c-icon>
            <c-icon icon-name="utility:emoji"></c-icon>
        <div class="slds-p-around_medium">    
    `
