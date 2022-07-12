import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }
  static get doubleClick(){
    return cy.get ('[id="doubleClickBtn"]');
  }
  static get validateDoubleClick(){
    return cy.get ('[id="doubleClickMessage"]');
  }
  static get rightClickButton(){
    return cy.get ('[id="rightClickBtn"]');
  }
  static get validateRightClick(){
    return cy.get ('[id="rightClickMessage"]');
  }
  static get dynamicClick(){
    return cy.get ('[id="xYpLk"]');
  }
  static get validateDynamicClick(){
    return cy.get ('[id="dynamicClickMessage"]');
  }
  
  
  
  

}

export default ButtonsPage;