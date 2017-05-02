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
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	module.exports = __webpack_require__(12);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	if (window.location.href.includes('startpage')) {

		document.getElementsByTagName('body')[0].style.transition = 'all 0.5s';

		var setSiteTopMargin = function setSiteTopMargin() {
			var headingHeight = document.getElementsByClassName('spc_fullwidth_heading')[0].offsetHeight;
			var heroHeight = document.getElementsByClassName('spc_hero_article')[0].offsetHeight;
			var menuHeight = document.getElementsByClassName('spc_inline_menu')[0].offsetHeight;
			var heroTopMargin = window.innerHeight - (headingHeight + heroHeight + menuHeight);

			if (heroTopMargin <= 0) {
				heroTopMargin = window.innerHeight / 100;
			}

			if (window.innerWidth < 1024) {
				heroTopMargin = 55;
			}

			document.getElementsByTagName('body')[0].style.paddingTop = heroTopMargin + 'px';
			document.getElementsByTagName('body')[0].scrollTop = 0;
		};

		var fadeInOnLoad = function fadeInOnLoad() {
			document.getElementsByTagName('body')[0].style.opacity = '1';
		};

		/* Init */
		setSiteTopMargin();
		window.addEventListener('resize', setSiteTopMargin, false);
		window.addEventListener('load', fadeInOnLoad, false);
	}

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
		"./spc_article": 5,
		"./spc_article.js": 5,
		"./spc_article_excerpts": 6,
		"./spc_article_excerpts.js": 6,
		"./spc_fullwidth_heading": 7,
		"./spc_fullwidth_heading.js": 7,
		"./spc_hero_article": 8,
		"./spc_hero_article.js": 8,
		"./spc_inline_menu": 9,
		"./spc_inline_menu.js": 9,
		"./spc_more_button": 10,
		"./spc_more_button.js": 10,
		"./spc_simple_footer": 11,
		"./spc_simple_footer.js": 11,
		"./spc_social_widget": 12,
		"./spc_social_widget.js": 12
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_article = function () {
	    function Spc_article(element) {
	        _classCallCheck(this, Spc_article);

	        var that = this;

	        this.element = element;
	        this.heading = element.querySelector('h1');
	        this.heading.style.display = 'inline-block';

	        this.setHeadingSize();
	        window.addEventListener('resize', function () {
	            that.setHeadingSize();
	        });
	    }

	    _createClass(Spc_article, [{
	        key: 'setHeadingSize',
	        value: function setHeadingSize() {

	            var fontSize = parseFloat(window.getComputedStyle(this.heading, null).getPropertyValue('font-size'));
	            var safeMargin = 20;

	            // Element width, content width and fontsize
	            var x = this.heading.offsetWidth;
	            var y = this.heading.parentElement.offsetWidth - safeMargin;
	            var z = fontSize;

	            // If content is smaller than parentelement
	            if (x < y) {

	                for (var i = x; i < y; z++) {
	                    this.heading.style.fontSize = z + 'px';
	                    this.heading.style.lineHeight = z + 'px';
	                    i = this.heading.offsetWidth;
	                }

	                // If content is bigger than parentelement
	            } else {

	                for (var i = x; i > y; z--) {
	                    this.heading.style.fontSize = z + 'px';
	                    this.heading.style.lineHeight = z + 'px';
	                    i = this.heading.offsetWidth;
	                }
	            }
	        }
	    }]);

	    return Spc_article;
	}();

	exports.default = Spc_article;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_article_excerpts = function () {
	    function Spc_article_excerpts(element) {
	        _classCallCheck(this, Spc_article_excerpts);

	        var that = this;
	        this.element = element;

	        this.setBoxHeight();
	        window.addEventListener('resize', function () {
	            that.setBoxHeight();
	        });

	        var _loop = function _loop() {
	            var thisEl = element.children[i].querySelectorAll('svg');
	            element.children[i].addEventListener('mousemove', function (e) {
	                that.moveArrow(e, thisEl);
	            });
	        };

	        for (var i = 0; i < element.children.length; i++) {
	            _loop();
	        }
	    }

	    _createClass(Spc_article_excerpts, [{
	        key: 'setBoxHeight',
	        value: function setBoxHeight() {

	            var boxWidth = this.element.firstElementChild.firstElementChild.offsetWidth;

	            for (var i = 0; i < this.element.children.length; i++) {
	                this.element.children[i].firstElementChild.style.height = boxWidth + 'px';
	            }
	        }
	    }, {
	        key: 'moveArrow',
	        value: function moveArrow(e, thisEl) {

	            var node = 'rotate(' + (e.clientY - e.clientX) / 2 + 'deg)';
	            thisEl[0].style.transform = node;
	        }
	    }]);

	    return Spc_article_excerpts;
	}();

	exports.default = Spc_article_excerpts;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_fullwidth_heading = function () {
	    function Spc_fullwidth_heading(element) {
	        _classCallCheck(this, Spc_fullwidth_heading);

	        var that = this;

	        this.element = element;
	        this.heading = element.querySelector('a');

	        this.setHeadingSize();
	        window.addEventListener('resize', function () {
	            that.setHeadingSize();
	        });
	    }

	    _createClass(Spc_fullwidth_heading, [{
	        key: 'setHeadingSize',
	        value: function setHeadingSize() {

	            var fontSize = parseFloat(window.getComputedStyle(this.heading, null).getPropertyValue('font-size'));
	            var safeMargin = 27;

	            // Element width, content width and fontsize
	            var x = this.heading.offsetWidth;
	            var y = this.element.offsetWidth - safeMargin;
	            var z = fontSize;

	            // If content is smaller than parentelement
	            if (x < y) {

	                for (var i = x; i < y; z++) {
	                    this.heading.style.fontSize = z + 'px';
	                    this.heading.style.lineHeight = z + 'px';
	                    i = this.heading.offsetWidth;
	                }

	                // If content is bigger than parentelement
	            } else {

	                for (var i = x; i > y; z--) {
	                    this.heading.style.fontSize = z + 'px';
	                    this.heading.style.lineHeight = z + 'px';
	                    i = this.heading.offsetWidth;
	                }
	            }
	        }
	    }]);

	    return Spc_fullwidth_heading;
	}();

	exports.default = Spc_fullwidth_heading;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_hero_article = function () {
	    function Spc_hero_article(element) {
	        _classCallCheck(this, Spc_hero_article);

	        var that = this;
	        var hoverElement = element.firstElementChild.firstElementChild;
	        this.element = element;
	        this.thisEl = element.firstElementChild.firstElementChild.lastElementChild;

	        this.setArrowSize();
	        window.addEventListener('resize', function () {
	            that.setArrowSize();
	        });

	        hoverElement.addEventListener('mouseover', function () {
	            that.arrowMouseOverEffect();
	        });

	        hoverElement.addEventListener('mouseout', function () {
	            that.arrowMouseOutEffect();
	        });
	    }

	    _createClass(Spc_hero_article, [{
	        key: 'setArrowSize',
	        value: function setArrowSize() {
	            var boxSize = this.element.firstElementChild.firstElementChild.firstElementChild.offsetHeight;
	            var borderSize = boxSize / 2;

	            this.thisEl.style.borderTop = borderSize + 'px solid transparent';
	            this.thisEl.style.borderBottom = borderSize + 'px solid transparent';
	            this.thisEl.style.borderLeft = '0px solid';
	        }
	    }, {
	        key: 'arrowMouseOverEffect',
	        value: function arrowMouseOverEffect() {
	            var boxSize = this.element.firstElementChild.firstElementChild.firstElementChild.offsetHeight;
	            var arrowSize = boxSize / 4;

	            this.thisEl.style.borderLeft = arrowSize + 'px solid';
	        }
	    }, {
	        key: 'arrowMouseOutEffect',
	        value: function arrowMouseOutEffect() {

	            this.thisEl.style.borderLeft = '0px solid';
	        }
	    }]);

	    return Spc_hero_article;
	}();

	exports.default = Spc_hero_article;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_inline_menu = function () {
		function Spc_inline_menu(element) {
			_classCallCheck(this, Spc_inline_menu);

			var that = this;

			this.element = element;
			this.menu = element.getElementsByClassName('toggleMenu')[0];
			var menuButton = element.getElementsByClassName('menuButton')[0];

			this.setListItemWidth();
			this.setListItemFontSize();
			window.addEventListener('resize', function () {
				that.setListItemWidth();
			});

			menuButton.addEventListener('click', function () {
				that.toggleMenu();
			});

			this.menu.addEventListener('click', function () {
				that.toggleMenu();
			});
		}

		_createClass(Spc_inline_menu, [{
			key: 'setListItemWidth',
			value: function setListItemWidth() {

				var listItems = this.element.getElementsByClassName('menuItem');
				var itemWidth = 100;
				var responsiveBreakingPoint = 1024;

				if (window.innerWidth > responsiveBreakingPoint) {
					itemWidth = itemWidth / listItems.length;
				}

				for (var i = 0; i < listItems.length; i++) {
					listItems[i].style.width = itemWidth + '%';
				}
			}
		}, {
			key: 'toggleMenu',
			value: function toggleMenu() {

				if (this.menu.classList.contains('fade-in-out')) {
					this.menu.classList.remove('fade-in-out');
				} else {
					this.menu.classList.add('fade-in-out');
				}
			}
		}, {
			key: 'setListItemFontSize',
			value: function setListItemFontSize() {

				var mainMenuItems = this.element.getElementsByClassName('menuItem');
				var aElements = this.element.getElementsByTagName('a');
				var fontSize = 25 - mainMenuItems.length;

				for (var i = 0; i < aElements.length; i++) {

					aElements[i].style.fontSize = fontSize + 'px';

					if (aElements[i].textContent.length > 9) {

						var smFontSize = fontSize - aElements[i].textContent.length / 3;
						aElements[i].style.fontSize = smFontSize + 'px';
					}
				}
			}
		}]);

		return Spc_inline_menu;
	}();

	exports.default = Spc_inline_menu;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_more_button = function () {
	    function Spc_more_button(element) {
	        _classCallCheck(this, Spc_more_button);

	        this.node = element.getAttribute('data-spc_more_button');
	        this.btn = element.querySelectorAll('button')[0];
	        this.insertNode();
	    }

	    _createClass(Spc_more_button, [{
	        key: 'insertNode',
	        value: function insertNode() {
	            this.btn.append(this.node);
	        }
	    }]);

	    return Spc_more_button;
	}();

	exports.default = Spc_more_button;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_simple_footer = function () {
	    function Spc_simple_footer(element) {
	        _classCallCheck(this, Spc_simple_footer);

	        this.company = element.getAttribute('data-spc_simple_footer');
	        var d = new Date();
	        this.year = d.getFullYear();
	        this.El = element.querySelectorAll('span')[0];
	        this.insertYearCopyright();
	    }

	    _createClass(Spc_simple_footer, [{
	        key: 'insertYearCopyright',
	        value: function insertYearCopyright() {

	            var node = '@' + this.year + ' ' + this.company;
	            this.El.append(node);
	        }
	    }]);

	    return Spc_simple_footer;
	}();

	exports.default = Spc_simple_footer;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spc_social_widget = function () {
	    function Spc_social_widget(element) {
	        _classCallCheck(this, Spc_social_widget);

	        var self = this;
	        this.element = element;
	        var btn = element.firstElementChild;
	        this.menu = element.lastElementChild;

	        btn.addEventListener('click', function () {
	            self.toggleMenu();
	        });

	        this.menu.addEventListener('click', function () {
	            self.toggleMenu();
	        });
	    }

	    _createClass(Spc_social_widget, [{
	        key: 'toggleMenu',
	        value: function toggleMenu() {

	            if (this.menu.classList.contains('fade-in-out')) {
	                this.menu.classList.remove('fade-in-out');
	            } else {
	                this.menu.classList.add('fade-in-out');
	            }
	        }
	    }]);

	    return Spc_social_widget;
	}();

	exports.default = Spc_social_widget;

/***/ }
/******/ ]);