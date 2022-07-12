import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import WebTablePage from "../../pageObjects/webTablePage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import ToolTipsPage from "../../pageObjects/toolTipsPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.fullName.type("Hairry Potter");
      TextBoxPage.eMail.type("Hairry@gmail.com");
      TextBoxPage.cAdress.type("Hairrys street 1");
      TextBoxPage.pAdress.type("Hairrys street 2");
      TextBoxPage.submit.click();
      TextBoxPage.validateName.should('contain','Hairry Potter');
      TextBoxPage.validateEMail.should('contain','Hairry@gmail.com');
      TextBoxPage.validateCAdress.should('contain','Hairrys street 1');
      TextBoxPage.validatePAdress.should('contain','Hairrys street 2');
    });
    
  });

  context ("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });


        it("Filling in check Boxes scenario 1", () => {
          CheckBoxPage.expandOptions.click();
          CheckBoxPage.check.contains('Notes').click();
          CheckBoxPage.check.contains('React').click();
          CheckBoxPage.check.contains('Angular').click();
          CheckBoxPage.check.contains('General').click();
          CheckBoxPage.check.contains('Excel File.doc').click();
          CheckBoxPage.validateOptions.should('contain', 'notes');
          CheckBoxPage.validateOptions.should('contain', 'react');
          CheckBoxPage.validateOptions.should('contain', 'angular');
          CheckBoxPage.validateOptions.should('contain', 'general');
          CheckBoxPage.validateOptions.should('contain', 'excelFile');
        });
        it("Filling in check Boxes scenario 2", () => {
          CheckBoxPage.expandOptions.click();
          CheckBoxPage.check.contains('Office').click();
          CheckBoxPage.validateOptions.should('contain', 'office');
          CheckBoxPage.validateOptions.should('contain', 'public');
          CheckBoxPage.validateOptions.should('contain', 'private');
          CheckBoxPage.validateOptions.should('contain', 'classified');
          CheckBoxPage.validateOptions.should('contain', 'general');

        });
  
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it("RadioButtons scenario 1", () => {
    RadioButtonPage.yesRadio.click();
    RadioButtonPage.validateRadio.should('contain','Yes');
    RadioButtonPage.impressiveRadio.click();
    RadioButtonPage.validateRadio.should('contain', 'Impressive');
    RadioButtonPage.noRadio.should('be.disabled');
    })
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablePage.visit();

    });
    it("webTable scenario 1", () => {
      WebTablePage.addRecord.click();
      WebTablePage.addFirstName.type('Hairry');
      WebTablePage.addLastName.type('Potter');
      WebTablePage.addEmail.type('Hairry@gmail.com');
      WebTablePage.addAge.type('5');
      WebTablePage.addSalary.type('5000');
      WebTablePage.addDepartment.type('CEO');
      WebTablePage.addSubmit.click();
      WebTablePage.personTable.contains('Hairry').should('contain','Hairry');
      WebTablePage.personTable.contains('Potter').should('be.visible');
      WebTablePage.personTable.contains('Hairry@gmail.com').should('be.visible');
      WebTablePage.personTable.contains('5').should('be.visible');
      WebTablePage.personTable.contains('5000').should('be.visible');
      WebTablePage.personTable.contains('CEO').should('be.visible');


    });
    it("webTable scenario 2", () => {
      WebTablePage.deleteTable1.click();
      WebTablePage.deleteTable2.click();
      WebTablePage.deleteTable3.click();
      WebTablePage.validateTable.should('contain', 'No rows found');
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();

    });
    it("buttons scenario 1", () => {
      ButtonsPage.doubleClick.dblclick();
      ButtonsPage.validateDoubleClick.should('contain','You have done a double click');
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.validateRightClick.should('contain', 'You have done a right click');
      ButtonsPage.dynamicClick.click();
      ButtonsPage.validateDynamicClick.should('contain','You have done a dynamic click');
    });

  });
  context("ToolTips scenarios", () => {
    beforeEach(() => {
      ToolTipsPage.visit();

    });
    it.only("toolTips scenario 1", () => {
     ToolTipsPage.hoverMe.trigger('mouseover');
     ToolTipsPage.validateHoverMe.should('be.visible');
     ToolTipsPage.hoverTextField.trigger('mouseover');
     ToolTipsPage.validateTextField.should('be.visible');
     ToolTipsPage.hoverContrary.trigger('mouseover');
     ToolTipsPage.validateContrary.should('be.visible');
     ToolTipsPage.hoverNumbers.trigger('mouseover');
     ToolTipsPage.validateNumbers.should('be.visible');


    });

  });
});
