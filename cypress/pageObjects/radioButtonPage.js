import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }
  static get yesRadio(){
    return cy.get ('[for="yesRadio"]');
  }
  static get validateRadio(){
    return cy.get ('[class="mt-3"]');
  }
  static get impressiveRadio(){
    return cy.get ('[for="impressiveRadio"]');
  }
  static get noRadio(){
    return cy.get ('[class="custom-control-input disabled"]');
  }

 

  
  


      
}

export default RadioButtonPage;