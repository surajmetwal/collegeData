import { LightningElement } from 'lwc';
import fill from '@salesforce/apex/collegeRec.getAll';

export default class AddRec extends LightningElement {
    cName;
    cMark;
    cStatus;

    get choices(){
        return [{label:'Open',value:'Open'},{label:'Close',value:'Close'}];
    }
     
    getName(event){
        this.cName=event.target.value;
    }
    getMark(event){
        this.cMark=event.target.value;
    }
    getStatus(event){
        this.cStatus=event.target.value;
    }
    saveMethod(event){
        fill({nam:this.cName,stat:this.cStatus,marks:this.cMark});
        location.reload();


    }
    cancelMethod(event){
        this.dispatchEvent(new CustomEvent('close'));
    }
}
