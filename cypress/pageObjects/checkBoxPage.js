import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }
  static get expandOptions(){
    return cy.get ('[class="rct-icon rct-icon-expand-all"]');
  }
  static get check(){
    return cy.get ('[class="rct-title"]');
  }
  static get validateOptions(){
    return cy.get ('[class="display-result mt-4"]');
  }
  


    
}

export default CheckBoxPage;
