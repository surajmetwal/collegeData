import { LightningElement } from 'lwc';

export default class NextComp extends LightningElement {
    showNext(event){
        this.dispatchEvent(new CustomEvent('ahead'));
    }

}