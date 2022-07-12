import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }
  static get hoverMe(){
    return cy.get ('[id="toolTipButton"]');
  }
  static get validateHoverMe(){
    return cy.get ('[aria-describedby="buttonToolTip"]');
  }
  static get hoverTextField(){
    return cy.get ('[id="toolTipTextField"]');
  }
  static get validateTextField(){
    return cy.get ('[aria-describedby="textFieldToolTip"]');
  }
  static get hoverContrary(){
    return cy.get ('[href="javascript:void(0)"]').contains('Contrary');
  }
  static get validateContrary(){
    return cy.get ('[aria-describedby="contraryTexToolTip"]');
  }
  static get hoverNumbers(){
    return cy.get ('[href="javascript:void(0)"]').contains('1.10.32');
  }
  static get validateNumbers(){
    return cy.get ('[aria-describedby="sectionToolTip"]');
  }
  static get validateText1(){
    return cy.get ('[class="tooltip-inner"]');
  }

  
 
  
  

  




    
  

}

export default ToolTipsPage;