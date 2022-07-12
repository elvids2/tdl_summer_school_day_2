import BasePage from "./basePage";

class WebTablePage extends BasePage {
  static get url() {
    return "/webtables";
  }
  static get addRecord(){
    return cy.get ('[id="addNewRecordButton"]');
  }
  static get addFirstName(){
    return cy.get ('[id="firstName"]');
  }
  static get addLastName(){
    return cy.get ('[id="lastName"]');
  }
  static get addEmail(){
    return cy.get ('[id="userEmail"]');
  }
  static get addAge(){
    return cy.get ('[id="age"]');
  }
  static get addSalary(){
    return cy.get ('[id="salary"]');
  }
  static get addDepartment(){
    return cy.get ('[id="department"]');
  }
  static get addSubmit(){
    return cy.get ('[id="submit"]');
  }
  static get personTable(){
    return cy.get ('[class="rt-tr-group"]');
  }
  static get deleteTable1(){
    return cy.get ('[id="delete-record-1"]');
  }
  static get deleteTable2(){
    return cy.get ('[id="delete-record-2"]');
  }
  
  static get deleteTable3(){
    return cy.get ('[id="delete-record-3"]');
  }
  static get validateTable(){
    return cy.get ('[class="rt-noData"]');
  }
  
  
  

  

  

  
  
      
}

export default WebTablePage;