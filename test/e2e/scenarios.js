'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Palette Maker App', function() {

  it('should redirect index.html to index.html#/', function() {
    browser.get('');
    expect(browser.getLocationAbsUrl()).toBe('/');
      });
  });
});