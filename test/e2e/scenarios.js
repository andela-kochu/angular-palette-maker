'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Palettemaker App', function() {

  browser.get('#/anyother');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('Home View', function() {

    beforeEach(function() {
      browser.get('#/home');
    });
      it('should open the landing page', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/home");
      });
      it('should expect the name of link to match CLick', function() {
        expect(element(by.css("#palette")).getText()).toMatch("Click");
      });
  });

  describe('Palette View', function() {

    beforeEach(function() {
      browser.get('#/palette');
    });
      it('should open the main palette page', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/palette");
      });
      it('should get the name of the buttons', function() {
        expect(element(by.binding("addUpdateBtn")).getText()).
          toMatch("ADD COLOR");
        expect(element(by.binding("editCancelBtn")).getText()).
          toMatch("EDIT COLOR");
      });
      it('should test to confirm preview binding', function () {
        element.all(by.css("my-sliders input")).get(0).clear().sendKeys("100");
        element.all(by.css("my-sliders input")).get(1).clear().sendKeys("50");
        element.all(by.css("my-sliders input")).get(2).clear().sendKeys("25");
        var hex = element(by.binding("colorData2 | hexacolor")).getText();
         expect(hex).toMatch("#356020");
      });
      it('add button should create a new color tab', function () {
        var add = element(by.binding("addUpdateBtn"));
        add.click();
        var colorTab = element(by.css('my-color')); 
        expect(colorTab).toBeDefined();
      });
      it('removeall button should remove all colors in the color tab', function (){
        element(by.binding("addUpdateBtn")).click();
        element(by.binding("addUpdateBtn")).click();
        var removeAll = element(by.css("md-button"));
        removeAll.click()
        /*console.log(removeall.getText())
        var colorTab = element(by.css('my-color')); 
        expect(colorTab).toBeDefined();*/
      });
  });
});