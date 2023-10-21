public with sharing class collegeRec 
{
  
  public collegeRec() {}

 
   @AuraEnabled
   
 public static void getAll(String nam,String stat,Integer marks)
{
       
 College__c c=new College__c(Name=nam,Status__c=stat,Marks__c=marks);
  
      insert c;
  
  }

   

 @AuraEnabled(cacheable=true)
  
  public static List< College__c> searchName(String s)
{
      
 String d='%'+s+'%';
      
 List<College__c> m=[select Id ,Name,Status__c,Marks__c from  College__c where Name like :d];
        return m;
   
 }

}
