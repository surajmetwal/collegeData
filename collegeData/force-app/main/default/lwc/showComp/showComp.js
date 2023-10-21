import { LightningElement,track,wire} from 'lwc';

import fetch from '@salesforce/apex/collegeRec.searchName';

import name_f from'@salesforce/schema/College__c.Name';

import stat_f from'@salesforce/schema/College__c.Status__c';

import mark_f from'@salesforce/schema/College__c.Marks__c';




export default class ShowComp extends LightningElement {
  
 allRec=[];
  
 searchVal;
   
 pageS=3;
  
 dataSize;
    
currentP=1;
 
  fixedData=[];
   
 totalP;





col=[
 
   {label:'Name',fieldName:name_f.fieldApiName,type:'text'},
    {label:'Marks',fieldName:mark_f.fieldApiName,type:'number'},
    {label:'Status',fieldName:stat_f.fieldApiName,type:'text'}
];



SearchD(event){
  
  this.searchVal=event.target.value;

}


searchData(event){

}


 

 @wire(fetch,{s:'$searchVal'})
 recs({data,error}){
   
  if(data){
 this.allRec=data;
 console.log(data);
  
this.dataSize=this.allRec.length;

 this.totalP=Math.ceil(this.dataSize/this.pageS);
  
  
this.updateView();

     
}
   
  else if (error){
  
   console.error(error);
  
 }
  }
 
 prevData(event){
  
  if(this.currentP>1){
    
     this.currentP=this.currentP-1;

        this.updateView();
       
  
 

   }

  }
  
nextData(event){

 if(this.currentP<this.totalP){
  
    this.currentP=this.currentP+1;
  
   this.updateView();
    
  }
 }


updateView(){
   
 const start=(this.currentP-1)*this.pageS;
  
  const end=(this.pageS)*this.currentP;
      
 
    this.fixedData=this.allRec.slice(start,end);
  
 }
}