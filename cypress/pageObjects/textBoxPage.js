import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullName() {
    return cy.get('[id="userName"]');
  }
  static get eMail(){
    return cy.get('[id="userEmail"]');
  }
  static get cAdress(){
    return cy.get('[id="currentAddress"]');
  }
  static get pAdress(){
    return cy.get('[id="permanentAddress"]');
  }
  static get submit(){
    return cy.get('[id="submit"]');
  }
  static get validateName(){
    return cy.get('[id="name"]');
  }
  static get validateEMail(){
    return cy.get('[id="email"]');
  }
  static get validateCAdress(){
    return cy.get('[id="currentAddress"]');
  }
  static get validatePAdress(){
    return cy.get('[id="output"]');
  }
  
  
}

export default TextBoxPage;
