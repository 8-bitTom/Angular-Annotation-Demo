'use strict';

angular.module('aadApp')
  .filter('upDown', function () {
    return function (input) {
	    var out = 'down';
	    if(input === 'down'){
		    out = 'up'
	    };
      return out;
    };
  });
