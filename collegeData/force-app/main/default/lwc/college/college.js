import { LightningElement } from 'lwc';

export default class College extends LightningElement {
    showModal=false;

    showMod(event){
        this.showModal=true;
    }
    closeMod(event){
        this.showModal=false;
    }
}