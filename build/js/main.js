/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(2);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	console.log('main.js has loaded!');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	  Automatically instantiates modules based on data-attrubiutes
	  specifying module file-names.
	*/

	var moduleElements = document.querySelectorAll('[data-module]');

	for (var i = 0; i < moduleElements.length; i++) {
	  var el = moduleElements[i];
	  var name = el.getAttribute('data-module');
	  var Module = __webpack_require__(3)("./" + name).default;
	  new Module(el);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./example": 4,
		"./example.js": 4,
		"./index": 2,
		"./index.js": 2,
		"./spc_testfile": 5,
		"./spc_testfile.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Example = function Example(element) {
	  _classCallCheck(this, Example);

	  this.width = element.offsetWidth;
	  this.height = this.width / 2;

	  // Get attribute
	  var example = element.getAttribute('data-example');
	  console.log('data-example:' + example);

	  // Set attribute
	  element.setAttribute('style', 'width:' + this.width + 'px;height:' + this.height + 'px;background-color:#eee;');
	};

	exports.default = Example;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_testfile = function Spc_testfile(element) {
	    _classCallCheck(this, Spc_testfile);

	    // Log load-verification for module
	    var verification = element.getAttribute('data-spc_testfile');
	    console.log(verification);

	    var headingSize = function headingSize() {

	        // Set basic style to heading
	        var h1 = element.querySelector('h1');
	        h1.style.display = 'inline-block';
	        h1.style.fontSize = 48 + 'px';

	        // Get width of the content
	        // (Width for heading is supposed to line with
	        // the content width no matter what screensize)
	        // Safemargin prevents unwanted linebreaking in heading
	        var responsiveBreakingPoint = 800;
	        var maxWidth = 530;
	        var safeMargin = 20;

	        var screenWidth = window.innerWidth;
	        if (screenWidth > responsiveBreakingPoint) {
	            screenWidth = screenWidth / 10 * 5 - safeMargin;
	            if (screenWidth >= maxWidth) {
	                screenWidth = maxWidth - safeMargin;
	            }
	        } else {
	            screenWidth = screenWidth / 10 * 8 - safeMargin;
	        }

	        // Element-, content width and fontsize to int
	        var x = h1.offsetWidth;
	        var y = screenWidth;
	        var z = parseInt(h1.style.fontSize.replace('px', ''));

	        // If heading is smaller than element
	        if (x < y) {

	            for (var i = x; i < y; z++) {
	                h1.style.fontSize = z + 'px';
	                i = h1.offsetWidth;
	            }

	            // If content is smaller than element
	        } else {

	            for (var i = x; i > y; z--) {
	                h1.style.fontSize = z + 'px';
	                i = h1.offsetWidth;
	            }
	        }
	    };

	    /* Init */
	    headingSize();
	    window.addEventListener('resize', headingSize);
	};

	exports.default = Spc_testfile;

/***/ }
/******/ ]);