import { LightningElement } from 'lwc';

export default class PrevComp extends LightningElement {
    showPrev(event){
        this.dispatchEvent(new CustomEvent('back'));
    }
}