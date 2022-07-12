import BasePage from "./basePage";

class ProgressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }
  static get startButton(){
    return cy.get ('[id="startStopButton"]');
  }
  static get ProgressBar(){
    return cy.get ('[class="progress-bar bg-info"]');
  }
  

  
  
     
}

export default ProgressBarPage;