'use strict';

describe('Filter: upDown', function () {

  // load the filter's module
  beforeEach(module('aadApp'));

  // initialize a new instance of the filter before each test
  var upDown;
  beforeEach(inject(function ($filter) {
    upDown = $filter('upDown');
  }));

  it('should return the input prefixed with "upDown filter:"', function () {
    var text = 'angularjs';
    expect(upDown(text)).toBe('upDown filter: ' + text);
  });

});
