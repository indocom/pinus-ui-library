'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var require$$1$1 = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = ".button {\n  color: #ffffff;\n  font-weight: 700;\n\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n\n  border: 0;\n  border-radius: 0.5rem;\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.button--primary {\n  background-color: #ff3b3a;\n}\n\n.button--secondary {\n  background-color: rgba(17, 24, 39, 1);\n}\n\n.button--disabled,\nbutton[disabled] {\n  opacity: 0.5;\n  cursor: default;\n}\n";
styleInject(css_248z$b);

var css_248z$a = "html * {\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important;\r\n}\r\n";
styleInject(css_248z$a);

/**
 * Primary UI component for user interaction
 */
const Button = (_a) => {
    var { variant = "primary", bgColor, label, labelColor } = _a, props = __rest(_a, ["variant", "bgColor", "label", "labelColor"]);
    return (React__default['default'].createElement("button", Object.assign({ type: "button", className: `button button--${variant}`, style: { color: labelColor, backgroundColor: bgColor } }, props), label));
};

var css_248z$9 = "header {\n  z-index: 5;\n  width: 90vw;\n}\n\n.wrapper {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  width: calc(100vw - (100vw - 100%));\n  justify-content: space-between;\n  background-color: transparent;\n}\n\n.wrapper2 {\n  padding: 15px 20px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  width: calc(100vw - (100vw - 100%));\n  justify-content: space-between;\n  background-color: transparent;\n  position: relative;\n}\n\n@media (max-width:1050px) {\n  .wrapper {\n    display: none;\n  }\n\n  .wrapper2 {\n    visibility: visible\n  }\n}\n\n@media (min-width:1050px) {\n  .wrapper {\n    visibility: visible;\n  }\n\n  .wrapper2 {\n    display: none;\n  }\n\n  .header2 {\n    display: none;\n  }\n}\n\n.dropdownHeader {\n  outline: none !important;\n  border: none !important;\n  padding: 0 !important;\n  background-color: transparent;\n}\n\n.title {\n  min-width: 150px;\n  overflow: hidden;\n  white-space: nowrap;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.header {\n  min-width: 60%;\n  justify-content: right;\n  justify-items: right;\n  text-align: end;\n}\n\n.header2 {\n  width: calc(100vw - (100vw - 100%));\n  padding: 0 20px;\n  justify-content: center;\n  justify-items: center;\n  text-align: center;\n  background-color: black;\n  position: block;\n}\n\n.logoAndTitle {\n  justify-content: space-between;\n  display: flex;\n}\n\n.logoAndTitle > img {\n  width:auto;\n  height:100%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.logoAndTitleWrapper {\n  display:\"block\";\n  justify-content: left;\n}\n\n.header > a > p {\n  display: inline !important;\n}\n\n.header > a > p:hover {\n  color: red !important;\n  transition: 0.3s;\n}\n\n.header > a + a {\n  margin-left: 30px;\n}\n\n.header2 > a > p {\n  display: block;\n  color: white !important;\n  padding: 5px 0;\n}\n\n.header2 > a > p:hover {\n  color: red !important;\n  transition: 0.3s;\n}\n";
styleInject(css_248z$9);

var logo = "data:image/png;base64,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";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w$1=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$1.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Menu$1 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
});
Menu$1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Menu$1.displayName = 'Menu';
var Menu$2 = Menu$1;

const Header = ({ logoPath, headerTitle, user, headers, homeLink, onLogin, onLogout, isLoginSupported = false, }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    return (React__default['default'].createElement("header", null,
        React__default['default'].createElement("div", { className: "wrapper" },
            React__default['default'].createElement("a", { className: "logoAndTitleWrapper", href: homeLink },
                React__default['default'].createElement("div", { className: "logoAndTitle" },
                    React__default['default'].createElement("img", { src: logoPath ? logoPath : logo }),
                    React__default['default'].createElement("div", { className: "title" }, headerTitle))),
            React__default['default'].createElement("div", { className: "header" }, headers &&
                headers.map((header) => React__default['default'].createElement("a", { href: header.url }, header.label))),
            isLoginSupported &&
                (user ? (React__default['default'].createElement(Button, { onClick: onLogout, label: "Log out", variant: "primary" })) : (React__default['default'].createElement(Button, { onClick: onLogin, label: "Log in", variant: "primary" })))),
        React__default['default'].createElement("div", { className: "wrapper2" },
            React__default['default'].createElement("a", { className: "logoAndTitleWrapper", href: homeLink },
                React__default['default'].createElement("div", { className: "logoAndTitle" },
                    React__default['default'].createElement("img", { src: logoPath ? logoPath : logo }))),
            React__default['default'].createElement("button", { onClick: () => setIsDrawerOpen(!isDrawerOpen), className: "dropdownHeader" },
                React__default['default'].createElement(Menu$2, { size: 32 }))),
        isDrawerOpen && (React__default['default'].createElement("div", { className: "header2" }, headers &&
            headers.map((header) => React__default['default'].createElement("a", { href: header.url },
                " ",
                header.label,
                " "))))));
};

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag$1(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement$1(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet$1 = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement$1(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag$1(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} value
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string} type
 * @param {string[]} props
 * @param {object[]} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {string} value
 * @param {object} root
 * @param {string} type
 */
function copy (value, root, type) {
	return node(value, root.root, root.parent, type, root.props, root.children, 0)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				return delimiter(type === 34 || type === 39 ? type : character)
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// " ' [ (
			case 34: case 39: case 91: case 40:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset:
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, length, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if (charat(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return replace(value, ':', ':' + WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return WEBKIT + value + MS + value + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (!element.return)
		switch (element.type) {
			case DECLARATION: element.return = prefix(element.value, element.length);
				break
			case KEYFRAMES:
				return serialize([copy(replace(element.value, '@', '@' + WEBKIT), element, '')], callback)
			case RULESET:
				if (element.length)
					return combine(element.props, function (value) {
						switch (match(value, /(::plac\w+|:read-\w+)/)) {
							// :read-(only|write)
							case ':read-only': case ':read-write':
								return serialize([copy(replace(value, /:(read-\w+)/, ':' + MOZ + '$1'), element, '')], callback)
							// :placeholder
							case '::placeholder':
								return serialize([
									copy(replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, ':' + MOZ + '$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, MS + 'input-$1'), element, '')
								], callback)
						}

						return ''
					})
		}
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifier(position - 1);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser$3 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$3 ? undefined : weakMemoize(function () {
  return memoize$1(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser$3 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$3) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser$3) {
    var currentSheet;
    var finalizingPlugins = [stringify, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet$1({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$2 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$2 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$1 = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = React.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = React.useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (process.env.NODE_ENV !== 'production') {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, React.useContext(ThemeContext));

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/React.createElement(type, newProps);

  if (!isBrowser$1 && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var pkg = {
	name: "@emotion/react",
	version: "11.4.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.4.0",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.0.2",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.1.3",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.3.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return React.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return React.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, React.useContext(ThemeContext));

  if (!isBrowser$1) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = React.useRef();
  React.useLayoutEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  React.useLayoutEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'EmotionGlobal';
}

function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames$1 = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (process.env.NODE_ENV !== 'production' && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var rules = '';
  var serializedHashes = '';
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);

    if (isBrowser$1) {
      insertStyles(cache, serialized, false);
    } else {
      var res = insertStyles(cache, serialized, false);

      if (res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$1) {
      serializedHashes += " " + serialized.name;
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames$1(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: React.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;

  if (!isBrowser$1 && rules.length !== 0) {
    var _ref;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
});

if (process.env.NODE_ENV !== 'production') {
  ClassNames.displayName = 'EmotionClassNames';
}

if (process.env.NODE_ENV !== 'production') {
  var isBrowser = typeof document !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    var globalContext = isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

var AutosizeInput$1 = {};

Object.defineProperty(AutosizeInput$1, "__esModule", {
	value: true
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react$2 = React__default['default'];

var _react2 = _interopRequireDefault$3(_react$2);

var _propTypes = propTypes.exports;

var _propTypes2 = _interopRequireDefault$3(_propTypes);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits$3(AutosizeInput, _Component);

	_createClass$3(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck$3(this, AutosizeInput);

		var _this = _possibleConstructorReturn$3(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass$3(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends$2({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends$2({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends$2({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react$2.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

var _default$4 = AutosizeInput$1.default = AutosizeInput;

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$2(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$2(this, result);
  };
}

// ==============================
// NO OP
// ==============================
var noop$1 = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof$2(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = _objectWithoutProperties$1(props, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]);

  return _objectSpread2({}, innerProps);
}; // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop$1;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
} // ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36

var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }

}; // check for SSR

var w = typeof window !== 'undefined' ? window : {};

if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop$1, options);
  w.removeEventListener('p', noop$1, false);
}

var supportsPassiveEvents = passiveOptionAccessed;

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _defineProperty$4(_ref3, alignToControl(placement), '100%'), _defineProperty$4(_ref3, "backgroundColor", colors.neutral0), _defineProperty$4(_ref3, "borderRadius", borderRadius), _defineProperty$4(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty$4(_ref3, "marginBottom", spacing.menuGutter), _defineProperty$4(_ref3, "marginTop", spacing.menuGutter), _defineProperty$4(_ref3, "position", 'absolute'), _defineProperty$4(_ref3, "width", '100%'), _defineProperty$4(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/React.createContext({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  _inherits$2(MenuPlacer, _Component);

  var _super = _createSuper$2(MenuPlacer);

  function MenuPlacer() {
    var _this;

    _classCallCheck$2(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  _createClass$2(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(React.Component);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
  return jsx("div", _extends$3({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  _inherits$2(MenuPortal, _Component2);

  var _super2 = _createSuper$2(MenuPortal);

  function MenuPortal() {
    var _this2;

    _classCallCheck$2(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  _createClass$2(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          controlElement = _this$props2.controlElement,
          cx = _this$props2.cx,
          innerProps = _this$props2.innerProps,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = jsx("div", _extends$3({
        css: getStyles('menuPortal', state),
        className: cx({
          'menu-portal': true
        }, className)
      }, innerProps), children);
      return jsx(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/require$$1$1.createPortal(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(React.Component);

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return jsx("div", _extends$3({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return jsx("div", _extends$3({
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, innerProps), children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      getStyles = props.getStyles;
  return jsx("div", _extends$3({
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};

var _templateObject;

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties$1(_ref, ["size"]);

  return jsx("svg", _extends$3({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$1
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return jsx(Svg, _extends$3({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return jsx(Svg, _extends$3({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }, innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }, innerProps), children || jsx(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("span", _extends$3({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return jsx("span", {
    css: /*#__PURE__*/css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return jsx("div", _extends$3({
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }, innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return jsx("div", _extends$3({
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, innerProps), jsx(Heading, _extends$3({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), jsx("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var getStyles = props.getStyles,
      cx = props.cx,
      className = props.className;

  var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = _objectWithoutProperties$1(_cleanCommonProps, ["data"]);

  return jsx("div", _extends$3({
    css: getStyles('groupHeading', props),
    className: cx({
      'group-heading': true
    }, className)
  }, innerProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input$1 = function Input(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;

  var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      innerProps = _objectWithoutProperties$1(_cleanCommonProps, ["innerRef", "isDisabled", "isHidden"]);

  return jsx("div", {
    css: getStyles('input', props)
  }, jsx(_default$4, _extends$3({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return jsx("div", innerProps, children || jsx(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return jsx(ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }, innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return jsx("div", _extends$3({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbmNvbnN0IEExMXlUZXh0ID0gKHByb3BzOiBFbGVtZW50Q29uZmlnPCdzcGFuJz4pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var A11yText = function A11yText(props) {
  return jsx("span", _extends$3({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;

    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';

      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        isDisabled = props.isDisabled;

    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");

      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");

      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
        _props$focused = props.focused,
        focused = _props$focused === void 0 ? {} : _props$focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;

    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };

    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }

    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }

    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live']; // Update aria live message configuration when prop changes

  var messages = React.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]); // Update aria live selected option when prop changes

  var ariaSelected = React.useMemo(function () {
    var message = '';

    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
          removedValue = ariaSelection.removedValue,
          value = ariaSelection.value; // select-option when !isMulti does not return option so we assume selected option is value

      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      var selected = removedValue || option || asOption(value);

      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled(selected),
        label: selected ? getOptionLabel(selected) : ''
      }, ariaSelection);

      message = messages.onChange(onChangeProps);
    }

    return message;
  }, [ariaSelection, isOptionDisabled, getOptionLabel, messages]);
  var ariaFocused = React.useMemo(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused),
        isSelected: isSelected,
        options: options,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }

    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, options, selectValue]);
  var ariaResults = React.useMemo(function () {
    var resultsMsg = '';

    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }

    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = React.useMemo(function () {
    var guidanceMsg = '';

    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }

    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  return jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && jsx(React__default['default'].Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext)));
};

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function DummyInput(_ref) {
  _ref.in;
      _ref.out;
      _ref.onExited;
      _ref.appear;
      _ref.enter;
      _ref.exit;
      var innerRef = _ref.innerRef;
      _ref.emotion;
      var props = _objectWithoutProperties$1(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return jsx("input", _extends$3({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/css$2({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbjogaW5Qcm9wLFxuICBvdXQsXG4gIG9uRXhpdGVkLFxuICBhcHBlYXIsXG4gIGVudGVyLFxuICBleGl0LFxuICBpbm5lclJlZixcbiAgZW1vdGlvbixcbiAgLi4ucHJvcHNcbn06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var isBottom = React.useRef(false);
  var isTop = React.useRef(false);
  var touchStart = React.useRef(0);
  var scrollTarget = React.useRef(null);
  var handleEventDelta = React.useCallback(function (event, delta) {
    // Reference should never be `null` at this point, but flow complains otherwise
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false; // reset bottom/top flags

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    } // bottom limit


    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true; // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    } // cancel scroll


    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, []);
  var onWheel = React.useCallback(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = React.useCallback(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = React.useCallback(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = React.useCallback(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', onWheel, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', onTouchStart, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = React.useCallback(function (el) {
    // bail early if no element is available to detach from
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  React.useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = React.useRef({});
  var scrollTarget = React.useRef(null);
  var addScrollLock = React.useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  }, []);
  var removeScrollLock = React.useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, []);
  React.useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RVIiwiZmlsZSI6IlNjcm9sbE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNjcm9sbENhcHR1cmUgZnJvbSAnLi91c2VTY3JvbGxDYXB0dXJlJztcbmltcG9ydCB1c2VTY3JvbGxMb2NrIGZyb20gJy4vdXNlU2Nyb2xsTG9jayc7XG5cbnR5cGUgUmVmQ2FsbGJhY2s8VD4gPSAoVCB8IG51bGwpID0+IHZvaWQ7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+KSA9PiBFbGVtZW50PCo+LFxuICBsb2NrRW5hYmxlZDogYm9vbGVhbixcbiAgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW4sXG4gIG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQsXG4gIG9uQm90dG9tTGVhdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BBcnJpdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BMZWF2ZT86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkLFxufTtcblxuY29uc3QgYmx1clNlbGVjdElucHV0ID0gKCkgPT5cbiAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmID0gZWxlbWVudCA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

function ScrollManager(_ref) {
  var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return jsx(React__default['default'].Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2
  }), children(targetRef));
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1,
  valueContainer: valueContainerCSS
}; // Merge Utility

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps$1 = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel$1(props, option);
  var value = getOptionValue$1(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if (groupOrOption.options) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }) // Flow limitation (see https://github.com/facebook/flow/issues/1414)
  .filter(function (categorizedOption) {
    return !!categorizedOption;
  });
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}

var getOptionLabel$1 = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue$1 = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue$1(props, option);
  return selectValue.some(function (i) {
    return getOptionValue$1(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select$1 = /*#__PURE__*/function (_Component) {
  _inherits$2(Select, _Component);

  var _super = _createSuper$2(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck$2(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      actionMeta.name = name;

      _this.ariaOnChange(newValue, actionMeta);

      onChange(newValue, actionMeta);
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
      var selectValue = _this.state.selectValue;

      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);

      var isDisabled = _this.isOptionDisabled(newValue, selectValue);

      if (deselected) {
        var candidate = _this.getOptionValue(newValue);

        _this.setValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        }), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);
        } else {
          _this.setValue(newValue, 'select-option');
        }
      } else {
        _this.ariaOnChange(newValue, {
          action: 'select-option',
          name: name
        });

        return;
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;

      _this.onChange(_this.props.isMulti ? [] : null, {
        action: 'clear',
        removedValues: selectValue
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel$1(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue$1(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return defaultComponents(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value: value
        }, actionMeta)
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    return _this;
  }

  _createClass$2(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    } // ==============================
    // Consumer Handlers
    // ==============================

  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;

      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: // ==============================
    // Getters
    // ==============================
    function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    value: // ==============================
    // Composition Handlers
    // ==============================
    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: // ==============================
    // Touch Handlers
    // ==============================
    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form;

      var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;

      var inputIsHidden = this.state.inputIsHidden;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/React__default['default'].createElement(DummyInput, _extends$3({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop$1,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      return /*#__PURE__*/React__default['default'].createElement(Input, _extends$3({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue,
          isFocused = _this$state4.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/React__default['default'].createElement(Placeholder, _extends$3({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/React__default['default'].createElement(MultiValue, _extends$3({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this3.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/React__default['default'].createElement(SingleValue, _extends$3({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React__default['default'].createElement(ClearIndicator, _extends$3({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React__default['default'].createElement(LoadingIndicator, _extends$3({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/React__default['default'].createElement(IndicatorSeparator, _extends$3({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/React__default['default'].createElement(DropdownIndicator, _extends$3({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/React__default['default'].createElement(Option, _extends$3({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var data = item.data,
                options = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/React__default['default'].createElement(Group, _extends$3({}, commonProps, {
              key: groupId,
              data: data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/React__default['default'].createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/React__default['default'].createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/React__default['default'].createElement(MenuPlacer, _extends$3({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/React__default['default'].createElement(Menu, _extends$3({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/React__default['default'].createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/React__default['default'].createElement(MenuList, _extends$3({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/React__default['default'].createElement(MenuPortal, _extends$3({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/React__default['default'].createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/React__default['default'].createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/React__default['default'].createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/React__default['default'].createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/React__default['default'].createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state5 = this.state,
          ariaSelection = _this$state5.ariaSelection,
          focusedOption = _this$state5.focusedOption,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused,
          selectValue = _this$state5.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/React__default['default'].createElement(LiveRegion, _extends$3({}, commonProps, {
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;

      var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/React__default['default'].createElement(SelectContainer, _extends$3({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/React__default['default'].createElement(Control, _extends$3({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/React__default['default'].createElement(ValueContainer, _extends$3({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/React__default['default'].createElement(IndicatorsContainer, _extends$3({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate;
      var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue;
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var selectValue = cleanValue(value);
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      } // some updates should toggle the state of the input visibility


      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props
      });
    }
  }]);

  return Select;
}(React.Component);

Select$1.defaultProps = defaultProps$1;

var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits$2(StateManager, _Component);

    var _super = _createSuper$2(StateManager);

    function StateManager() {
      var _this;

      _classCallCheck$2(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    _createClass$2(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props;
            _this$props2.defaultInputValue;
            _this$props2.defaultMenuIsOpen;
            _this$props2.defaultValue;
            var props = _objectWithoutProperties$1(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/React__default['default'].createElement(SelectComponent, _extends$3({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(React.Component), _class.defaultProps = defaultProps, _temp;
};

var index = manageState(Select$1);

var Select = index;

const customStyles = {
    option: (provided, state) => (Object.assign(Object.assign({}, provided), { borderBottom: "2px", minHeight: "30px", color: state.isSelected ? "black" : "gray", fontWeight: state.isSelected ? "bold" : "normal", backgroundColor: "white", "&:hover": {
            backgroundColor: "orange",
        } })),
    control: (base) => (Object.assign(Object.assign({}, base), { minHeight: "50px", minWidth: "200px", marginTop: "2%" })),
};

const Dropdown = ({ options, placeholder, onChange, isMulti = false, }) => (React__default['default'].createElement(Select, { onChange: onChange, isClearable: true, autoFocus: true, placeholder: placeholder, closeMenuOnSelect: true, options: options, isMulti: isMulti, styles: customStyles }));

var js = {};

var Carousel$2 = {};

var lib = {};

var reactSwipe = {};

(function (exports) {
(function (global, factory) {
  {
    factory(exports, React__default['default'], propTypes.exports);
  }
})(commonjsGlobal, function (exports, _react, _propTypes) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault && event.cancelable) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
            _props.tagName;
            var className = _props.className,
            style = _props.style,
            children = _props.children;
            _props.allowMouseEvents;
            _props.onSwipeUp;
            _props.onSwipeDown;
            _props.onSwipeLeft;
            _props.onSwipeRight;
            _props.onSwipeStart;
            _props.onSwipeMove;
            _props.onSwipeEnd;
            _props.innerRef;
            _props.tolerance;
            var props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});
}(reactSwipe));

(function (exports) {
(function (global, factory) {
  {
    factory(exports, reactSwipe);
  }
})(commonjsGlobal, function (exports, _reactSwipe) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});
}(lib));

var cssClasses = {};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

Object.defineProperty(cssClasses, "__esModule", {
  value: true
});
cssClasses.default = void 0;

var _classnames = _interopRequireDefault$2(classnames.exports);

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default$3 = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty$2({
      'carousel-root': true
    }, customClassName || '', !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected,
      previous: previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected: selected
    });
  }
};
cssClasses.default = _default$3;

var CSSTranslate = {};

Object.defineProperty(CSSTranslate, "__esModule", {
  value: true
});
CSSTranslate.default = void 0;

var _default$2 = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

CSSTranslate.default = _default$2;

var Thumbs$1 = {};

var dimensions = {};

Object.defineProperty(dimensions, "__esModule", {
  value: true
});
dimensions.outerWidth = void 0;

var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

dimensions.outerWidth = outerWidth;

var window$1 = {};

Object.defineProperty(window$1, "__esModule", {
  value: true
});
window$1.default = void 0;

var _default$1 = function _default() {
  return window;
};

window$1.default = _default$1;

Object.defineProperty(Thumbs$1, "__esModule", {
  value: true
});
Thumbs$1.default = void 0;

var _react$1 = _interopRequireWildcard$1(React__default['default']);

var _cssClasses$1 = _interopRequireDefault$1(cssClasses);

var _dimensions = dimensions;

var _CSSTranslate$1 = _interopRequireDefault$1(CSSTranslate);

var _reactEasySwipe$1 = _interopRequireDefault$1(lib);

var _window$1 = _interopRequireDefault$1(window$1);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache$1() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache$1 = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard$1(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache$1(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isKeyboardEvent$1 = function isKeyboardEvent(e) {
  return e.hasOwnProperty('key');
};

var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits$1(Thumbs, _Component);

  var _super = _createSuper$1(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck$1(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty$1(_assertThisInitialized$1(_this), "itemsWrapperRef", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "itemsListRef", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "thumbsRef", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }

      var total = _react$1.Children.count(_this.props.children);

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize,
          visibleItems: visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition: lastPosition,
          showArrows: showArrows
        };
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleClickItem", function (index, item, e) {
      if (!isKeyboardEvent$1(e) || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSwipeMove", function (delta) {
      var deltaX = delta.x;

      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }

      var leftBoundary = 0;

      var childrenLength = _react$1.Children.count(_this.props.children);

      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX); // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate$1.default)(position, '%', _this.props.axis);
        });
      }

      return true;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }

  _createClass$1(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      if (props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: props.selectedItem,
          firstItem: this.getFirstItem(props.selectedItem)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window$1.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window$1.default)().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      (0, _window$1.default)().removeEventListener('resize', this.updateSizes);
      (0, _window$1.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.props.children.map(function (img, index) {
        var itemClass = _cssClasses$1.default.ITEM(false, index === _this2.state.selectedItem);

        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /*#__PURE__*/_react$1.default.createElement("li", _extends$1({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      }

      var isSwipeable = _react$1.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate$1.default)(currentPosition, 'px', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/_react$1.default.createElement("div", {
        className: _cssClasses$1.default.CAROUSEL(false)
      }, /*#__PURE__*/_react$1.default.createElement("div", {
        className: _cssClasses$1.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/_react$1.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /*#__PURE__*/_react$1.default.createElement(_reactEasySwipe$1.default, {
        tagName: "ul",
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /*#__PURE__*/_react$1.default.createElement("ul", {
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /*#__PURE__*/_react$1.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(_react$1.Component);

Thumbs$1.default = Thumbs;

_defineProperty$1(Thumbs, "displayName", 'Thumbs');

_defineProperty$1(Thumbs, "defaultProps", {
  axis: 'horizontal',
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});

var document$1 = {};

Object.defineProperty(document$1, "__esModule", {
  value: true
});
document$1.default = void 0;

var _default = function _default() {
  return document;
};

document$1.default = _default;

Object.defineProperty(Carousel$2, "__esModule", {
  value: true
});
Carousel$2.default = void 0;

var _react = _interopRequireWildcard(React__default['default']);

var _reactDom = _interopRequireDefault(require$$1__default['default']);

var _reactEasySwipe = _interopRequireDefault(lib);

var _cssClasses = _interopRequireDefault(cssClasses);

var _CSSTranslate = _interopRequireDefault(CSSTranslate);

var _Thumbs = _interopRequireDefault(Thumbs$1);

var _document = _interopRequireDefault(document$1);

var _window = _interopRequireDefault(window$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e ? e.hasOwnProperty('key') : false;
};

var Carousel$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.clearAutoPlay();

      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (_this.timer) clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (!_this.carouselWrapperRef) {
        return false;
      }

      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];

      if (!firstItem) {
        return;
      }

      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState({
        itemSize: itemSize
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.moveTo(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);

      _this.clearAutoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });

      _this.props.onSwipeEnd(event);

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var isHorizontal = _this.props.axis === 'horizontal';

      var childrenLength = _react.Children.count(_this.props.children);

      var initialBoundry = 0;

      var currentPosition = _this.getPosition(_this.state.selectedItem);

      var finalBoundry = _this.props.infiniteLoop ? _this.getPosition(childrenLength - 1) - 100 : _this.getPosition(childrenLength - 1);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }

      var position = currentPosition + 100 / (_this.state.itemSize / handledDelta);

      var hasMoved = Math.abs(axisDelta) > _this.props.swipeScrollTolerance;

      if (_this.props.infiniteLoop && hasMoved) {
        // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
        // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
        if (_this.state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (_this.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }

      if (!_this.props.preventMovementUntilSwipeScrollTolerance || hasMoved || _this.state.swipeMovementStarted) {
        if (!_this.state.swipeMovementStarted) {
          _this.setState({
            swipeMovementStarted: true
          });
        }

        _this.setPosition(position);
      } // allows scroll if the swipe was within the tolerance


      if (hasMoved && !_this.state.cancelClick) {
        _this.setState({
          cancelClick: true
        });
      }

      return hasMoved;
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (position, forceReflow) {
      var list = _reactDom.default.findDOMNode(_this.listRef);

      if (list instanceof HTMLElement) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          list.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });

        if (forceReflow) {
          list.offsetLeft;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetPosition", function () {
      var currentPosition = _this.getPosition(_this.state.selectedItem);

      _this.setPosition(currentPosition);
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position, fromSwipe) {
      if (typeof position !== 'number') {
        return;
      }

      var lastPosition = _react.Children.count(_this.props.children) - 1;
      var needClonedSlide = _this.props.infiniteLoop && !fromSwipe && (position < 0 || position > lastPosition);
      var oldPosition = position;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      if (needClonedSlide) {
        // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
        // this is only needed for non-swiping situation
        _this.setState({
          swiping: true
        }, function () {
          if (oldPosition < 0) {
            if (_this.props.centerMode && _this.props.centerSlidePercentage && _this.props.axis === 'horizontal') {
              _this.setPosition(-(lastPosition + 2) * _this.props.centerSlidePercentage - (100 - _this.props.centerSlidePercentage) / 2, true);
            } else {
              _this.setPosition(-(lastPosition + 2) * 100, true);
            }
          } else if (oldPosition > lastPosition) {
            _this.setPosition(0, true);
          }

          _this.selectItem({
            selectedItem: position,
            swiping: false
          });
        });
      } else {
        _this.selectItem({
          // if it's not a slider, we don't need to set position here
          selectedItem: position
        });
      } // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1, true);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1, true);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (newIndex) {
      return function (e) {
        if (!isKeyboardEvent(e) || e.key === 'Enter') {
          _this.moveTo(newIndex);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state, cb) {
      _this.setState(state, cb);

      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img') || [];
      return images[0];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];

      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName('img') || [];

        if (slideImages.length > 0) {
          var image = slideImages[0];

          if (!image.complete) {
            // if the image is still loading, the size won't be available so we trigger a new render after it's done
            var onImageLoad = function onImageLoad() {
              _this.forceUpdate();

              image.removeEventListener('load', onImageLoad);
            };

            image.addEventListener('load', onImageLoad);
          }
        } // try to get img first, if img not there find first display tag


        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    _this.state = {
      initialized: false,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.resetPosition();
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;

      this.bindEvents();

      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      if (this.props.autoFocus) {
        this.forceFocus();
      }

      this.setState({
        initialized: true
      }, function () {
        var initialImage = _this2.getInitialImage();

        if (initialImage && !initialImage.complete) {
          // if it's a carousel of images, we set the mount state after the first image is loaded
          initialImage.addEventListener('load', _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;

      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "getPosition",
    value: function getPosition(index) {
      if (this.props.infiniteLoop) {
        // index has to be added by 1 because of the first cloned slide
        ++index;
      }

      if (index === 0) {
        return 0;
      }

      var childrenLength = _react.Children.count(this.props.children);

      if (this.props.centerMode && this.props.axis === 'horizontal') {
        var currentPosition = -index * this.props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;

        if (index && (index !== lastPosition || this.props.infiniteLoop)) {
          currentPosition += (100 - this.props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - this.props.centerSlidePercentage;
        }

        return currentPosition;
      }

      return -index * 100;
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;

      if (!this.props.children) {
        return [];
      }

      return _react.Children.map(this.props.children, function (item, index) {
        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item)
        };
        var extraProps = {};

        if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
          extraProps.style = {
            minWidth: _this3.props.centerSlidePercentage + '%'
          };
        }

        return /*#__PURE__*/_react.default.createElement("li", _extends({}, slideProps, extraProps), _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;

      var _this$props = this.props,
          showIndicators = _this$props.showIndicators,
          labels = _this$props.labels,
          renderIndicator = _this$props.renderIndicator,
          children = _this$props.children;

      if (!showIndicators) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function (_, index) {
        return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false; // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = this.getPosition(this.state.selectedItem); // if 3d is available, let's take advantage of the performance of transform

      var transformProp = (0, _CSSTranslate.default)(currentPosition, '%', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp
      };

      if (!this.state.swiping) {
        itemListStyles = _objectSpread(_objectSpread({}, itemListStyles), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          MsTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }

      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
          swiperProps.style.height = itemHeight || 'auto';
          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style.height = this.state.itemSize;
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: 0
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: itemListStyles
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(_react.default.Component);

Carousel$2.default = Carousel$1;

_defineProperty(Carousel$1, "displayName", 'Carousel');

_defineProperty(Carousel$1, "defaultProps", {
  axis: 'horizontal',
  centerSlidePercentage: 80,
  interval: 3000,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onClickItem: noop,
  onClickThumb: noop,
  onChange: noop,
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function (item) {
      var img = item; // if the item is not an image, try to find the first image in the item's children.

      if (item.type !== 'img') {
        img = _react.Children.toArray(item.props.children).find(function (children) {
          return children.type === 'img';
        });
      }

      if (!img) {
        return undefined;
      }

      return img;
    });

    if (images.filter(function (image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }

    return images;
  },
  statusFormatter: defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: 'standard',
  width: '100%'
});

var types = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(types);

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
});
Object.defineProperty(exports, "CarouselProps", {
  enumerable: true,
  get: function get() {
    return _types.CarouselProps;
  }
});
Object.defineProperty(exports, "Thumbs", {
  enumerable: true,
  get: function get() {
    return _Thumbs.default;
  }
});

var _Carousel = _interopRequireDefault(Carousel$2);

var _types = require$$1;

var _Thumbs = _interopRequireDefault(Thumbs$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
}(js));

const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: "none",
    borderRadius: "50%"
};
const indicatorStyles = {
    background: "#EBB920",
    display: "inline-block",
    width: "8px",
    height: "8px",
    margin: "0 8px",
    borderRadius: "50%"
};
const arrow = {
    border: "solid black",
    borderWidth: "0 2px 2px 0",
    display: "inline-block",
    padding: "3px"
};
const right = {
    transform: "rotate(-45deg)",
};
const left = {
    transform: "rotate(135deg)",
};

var css_248z$8 = ".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n";
styleInject(css_248z$8);

/**
 * UI Component for responsive carousel
 */
const Carousel = ({ interval = 5000, transitionTime = 1000, imgList }) => {
    const prevArrow = (onClickHandler, hasPrev, label) => {
        return hasPrev &&
            React__default['default'].createElement("button", { type: "button", onClick: onClickHandler, title: label, style: Object.assign(Object.assign({}, arrowStyles), { left: 15 }) },
                React__default['default'].createElement("i", { style: Object.assign(Object.assign({}, arrow), left) }));
    };
    const nextArrow = (onClickHandler, hasNext, label) => {
        return hasNext &&
            React__default['default'].createElement("button", { type: "button", onClick: onClickHandler, title: label, style: Object.assign(Object.assign({}, arrowStyles), { right: 15 }) },
                React__default['default'].createElement("i", { style: Object.assign(Object.assign({}, arrow), right) }));
    };
    const indicator = (onClickHandler, isSelected, index, label) => {
        return isSelected
            ? (React__default['default'].createElement("li", { style: Object.assign(Object.assign({}, indicatorStyles), { background: "#FF1313" }), "aria-label": `Selected: ${label} ${index + 1}`, title: `Selected: ${label} ${index + 1}` }))
            : (React__default['default'].createElement("li", { style: indicatorStyles, value: index, key: index, role: "button", onClick: onClickHandler, tabIndex: 0, title: `${label} ${index + 1}`, "aria-label": `${label} ${index + 1}` }));
    };
    return (React__default['default'].createElement(js.Carousel, { autoPlay: true, infiniteLoop: true, swipeable: true, emulateTouch: true, interval: interval, transitionTime: transitionTime, showThumbs: false, renderArrowPrev: prevArrow, renderArrowNext: nextArrow, renderIndicator: indicator }, imgList.map((src, id) => {
        return (React__default['default'].createElement("div", { key: id },
            React__default['default'].createElement("img", { src: src })));
    })));
};

var css_248z$7 = ".contentCard {\n    display: flex;\n    flex-flow: column;\n    max-width: 20rem;\n    justify-content: flex-start;\n\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    border: 1px;\n    border-radius: 0.5rem;\n}\n\n.image {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    padding-bottom: 1.5rem;\n}\n\nimg {\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: fit;\n}\n\n.title {\n    /* To be replaced with appropriate component */\n    font-size: 1.5rem;\n    line-height: 2rem;\n    margin-top: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n.description {\n    align-items: center;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: justify;\n    text-justify: newspaper;\n}\n\n.hyperlink {\n    display: flex;\n    justify-content: end;\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n.hyperlink > a:visited{\n    color: #FF3B3A;\n    text-decoration: underline;\n}\n\n.hyperlink > a:hover {\n    color: red;\n    text-decoration: underline;\n}\n\n/* sm-min */\n@media screen and (min-width: 640px) {\n    .contentCard {\n        max-width: 20rem;\n    }\n    \n}\n/* md-min */\n@media screen and (min-width: 768px) {\n    .contentCard {\n        max-width: 28rem;\n    }    \n}\n\n/* lg-min */\n@media screen and (min-width: 1024px) {\n    .contentCard {\n        height: auto;\n    }\n    \n    .image {\n        max-width: 32rem;\n    }\n\n    .title {\n        margin-left: 1.5rem;\n        margin-right: 1.5rem;\n    }\n\n    .description {\n        padding-top: 0rem;\n        margin-top: 0.5rem;\n        margin-left: 1.5rem;\n        margin-right: 1.5rem;\n        max-height: 9rem;\n    }\n\n    .hyperlink {\n        margin-left: 1.5rem;\n        margin-right: 1.5rem;\n    }\n    \n}\n\n/* xl-min */\n@media screen and (min-width: 1280px) {\n    .contentCard {\n        padding-bottom: 2rem;\n    }\n}\n\n/* 2xl-min: */\n@media screen and (min-width: 1536px) {\n    .description {\n        max-height: 10rem;\n    }\n}";
styleInject(css_248z$7);

const ContentCard = ({ image, imgAlt, title, description, hyperlink, bgImage = "https://www.publicdomainpictures.net/pictures/210000/nahled/paper-texture-crean-background.jpg", }) => {
    return (React__default['default'].createElement("div", { className: 'contentCard', style: { backgroundImage: `url(${bgImage})` } },
        React__default['default'].createElement("div", { className: 'image' }, image
            ? React__default['default'].createElement("img", { src: image, alt: imgAlt })
            : React__default['default'].createElement(React__default['default'].Fragment, null)),
        React__default['default'].createElement("div", { className: 'title' }, title),
        React__default['default'].createElement("div", { className: 'description' }, description),
        React__default['default'].createElement("div", { className: 'hyperlink' },
            React__default['default'].createElement("a", { href: hyperlink }, "Read More >>>"))));
};

var css_248z$6 = ".input {\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    \n    width: 100%;\n    max-width: 100%;\n\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n\n    color: black;\n}\n\n.input--outlined {\n    border: 0.1em solid gray;\n}\n\n.input--filled {\n    border: 0.1em solid #eeeeee;\n    background-color: #eeeeee;\n}\n\n.input:focus {\n    outline: none !important;\n    border: 0.15em solid #1E88E5;\n}\n\n.input:invalid {\n    outline: none !important;\n    border: 0.15em solid red;\n}";
styleInject(css_248z$6);

/**
 * Primary UI component for user input. Note that an input component by definition is a one-line field. Use textarea component for
 * multi-line data entry
 */
const Input = (_a) => {
    var { variant = "outlined", isRequired = false } = _a, props = __rest(_a, ["variant", "isRequired"]);
    return React__default['default'].createElement("input", Object.assign({ className: `input input--${variant}` }, props, { required: isRequired }));
};

var css_248z$5 = ".text {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.text--xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text--sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text--base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text--lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text--xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text--2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text--3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text--4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text--5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text--6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n\n.text--7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\n\n.text--8xl {\n  font-size: 6rem;\n  line-height: 1;\n}\n\n.text--9xl {\n  font-size: 8rem;\n  line-height: 1;\n}\n\n.text--thin {\n  font-weight: 100;\n}\n\n.text--extralight {\n  font-weight: 200;\n}\n\n.text--light {\n  font-weight: 300;\n}\n\n.text--normal {\n  font-weight: 400;\n}\n\n.text--medium {\n  font-weight: 500;\n}\n\n.text--semibold {\n  font-weight: 600;\n}\n\n.text--bold {\n  font-weight: 700;\n}\n\n.text--extrabold {\n  font-weight: 800;\n}\n\n.text--black {\n  font-weight: 900;\n}\n\n.text--truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text--clip {\n  text-overflow: clip;\n}\n\n.text--underline {\n  text-decoration: underline;\n}\n\n.text--line-through {\n  text-decoration: line-through;\n}\n\n.text--italic {\n  font-style: italic;\n}\n\n.text--no-italic {\n  font-style: normal;\n}\n";
styleInject(css_248z$5);

const Text = (_a) => {
    var { fontSize = "base", fontWeight = "normal", overflow, decoration, display = "block", color = "#212121", fontStyle } = _a, props = __rest(_a, ["fontSize", "fontWeight", "overflow", "decoration", "display", "color", "fontStyle"]);
    return (React__default['default'].createElement("p", { style: { color: color, display: display }, className: `text text--${fontSize} text--${fontWeight} text--${overflow} text--${decoration} text--${fontStyle}` }, props.children));
};

var css_248z$4 = ".textarea {\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    \n    width: 100%;\n    max-width: 100%;\n\n    border-radius: 0.5rem;\n    padding: 1.25rem;\n\n    color: black;\n}\n\n.textarea--outlined {\n    border: 0.1em solid gray;\n}\n\n.textarea--filled {\n    border: 0.1em solid #eeeeee;\n    background-color: #eeeeee;\n}\n\n.textarea:focus {\n    outline: none !important;\n    border: 0.15em solid #1E88E5;\n}\n\n.textarea:invalid {\n    outline: none !important;\n    border: 0.15em solid red;\n}";
styleInject(css_248z$4);

/**
 * UI component for user input. Note that a text area component by definition is a multi-line field. Use input component for
 * single-line data entry
 */
const TextArea = (_a) => {
    var { variant = "outlined", numRows = 3, isRequired = false } = _a, props = __rest(_a, ["variant", "numRows", "isRequired"]);
    return (React__default['default'].createElement("textarea", Object.assign({ className: `textarea textarea--${variant}`, rows: numRows }, props, { required: isRequired })));
};

var css_248z$3 = ".banner--wrapper {\n    padding:0px;\n    width:100vw;\n    overflow-x: hidden;\n    height:100vh;\n    display:flex;\n    justify-content: center;\n    justify-items:center;\n    position:relative;\n    object-fit: cover;\n}\n\n.banner--backgroundImage {\n    min-width: 100vw;\n    justify-content:center;\n    justify-items:center;\n    overflow:hidden;\n    filter:brightness(50%);\n    object-fit:cover;\n}\n\n.banner--title {\n    position:absolute;\n    z-index: 2;\n    top: 45%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.banner--subheader {\n    z-index: 2;\n    display:flex;\n    background-color: rgb(237, 237, 237);\n    position:absolute;\n    bottom:0;\n    width:100%;\n    min-height:10%;\n    justify-content: center;\n    justify-items: center;\n    text-align:center;\n    align-items:center;\n    overflow: auto;\n    padding:20px;\n}";
styleInject(css_248z$3);

var background = "data:image/png;base64,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";

const Banner = (_a) => {
    var { bgImage, title, subHeader = null } = _a; __rest(_a, ["bgImage", "title", "subHeader"]);
    bgImage = bgImage ? bgImage : background;
    return (React__default['default'].createElement("div", { className: `banner--wrapper` },
        React__default['default'].createElement("img", { className: "banner--backgroundImage", src: bgImage }),
        React__default['default'].createElement("div", { className: "banner--title" }, title),
        subHeader != null &&
            React__default['default'].createElement("div", { className: "banner--subheader" }, subHeader)));
};

var css_248z$2 = ".footerWrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100vw;\n    min-height: 24rem;\n    background-color: rgb(237, 237, 237);\n    padding: 46px 10vw;\n    flex-wrap: wrap;\n}\n\n.rightSideWrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    flex-wrap: wrap;\n    margin-left: 10px;\n}\n\n.columnWrapper {\n    justify-content: space-between;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n}\n\n.linksWrapper {\n    min-width: 150px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.footerLogoAndTitle {\n    display: flex;\n    vertical-align: middle;\n}\n\n.footerLogo {\n    width: 50px;\n    height: 50px;\n    margin: 0 10px 0 0;\n}\n\n.footerLink {\n    display: block;\n    padding: 2px 0px;\n}";
styleInject(css_248z$2);

var css_248z$1 = "section {\n  font-family: \"Nunito Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n";
styleInject(css_248z$1);

const Footer = (_a) => {
    var { links, logoPath, logoTitle, rightSide } = _a; __rest(_a, ["links", "logoPath", "logoTitle", "rightSide"]);
    logoPath = logoPath ? logoPath : logo;
    logoTitle = logoTitle ? logoTitle : React__default['default'].createElement(Text, { fontSize: "4xl", fontWeight: "bold", color: "black" }, " PINUS ");
    rightSide = rightSide ? rightSide :
        React__default['default'].createElement("div", { style: { backgroundColor: "black" } },
            React__default['default'].createElement(Text, { color: "white" }, " Put whatever you want here "));
    return (React__default['default'].createElement("div", { className: "footerWrapper" },
        React__default['default'].createElement("div", { className: "columnWrapper" },
            React__default['default'].createElement("div", { className: "footerLogoAndTitle" },
                React__default['default'].createElement("img", { src: logoPath, className: "footerLogo" }),
                logoTitle),
            React__default['default'].createElement(Text, { color: "gray" }, "\u00A92021 Perhimpunan Indonesia NUS. All Rights Reserved.")),
        React__default['default'].createElement("div", { className: "rightSideWrapper" },
            links &&
                links.map((col) => {
                    return (React__default['default'].createElement("div", { className: "linksWrapper" },
                        React__default['default'].createElement(Text, { fontWeight: "bold" },
                            " ",
                            col.title,
                            " "),
                        React__default['default'].createElement("p", null, "\u00A0"),
                        col.pages.map((page) => {
                            return React__default['default'].createElement("a", { href: page.link, className: "footerLink" },
                                React__default['default'].createElement(Text, { color: "black", fontSize: "xs" }, page.title));
                        })));
                }),
            React__default['default'].createElement("div", { className: "linksWrapper" }, rightSide))));
};

var css_248z = ".navbarHeading {\n    margin: 0 0 10px 0;\n}\n\n.navbarLink:hover > p {\n    color: red !important;\n    transition: 0.3s;\n  }";
styleInject(css_248z);

const Navbar = (_a) => {
    var { contents, color } = _a; __rest(_a, ["contents", "color"]);
    function renderContents(contents, level) {
        if (contents.length === 0) {
            return React__default['default'].createElement("div", null);
        }
        return contents.map(content => {
            if (level === 0) {
                return (React__default['default'].createElement("div", { className: "navbarHeading" },
                    React__default['default'].createElement("a", { href: content.path },
                        React__default['default'].createElement(Text, { fontSize: "3xl", fontWeight: "bold", color: color },
                            " ",
                            content.title,
                            " ")),
                    renderContents(content.children, level + 1)));
            }
            else {
                const numberOfTabs = level - 1;
                const tabs = Array(numberOfTabs * 4).fill('\xa0').join('');
                console.log(tabs);
                return (React__default['default'].createElement("div", null,
                    React__default['default'].createElement("a", null, tabs),
                    React__default['default'].createElement("a", { href: content.path, className: "navbarLink" },
                        React__default['default'].createElement(Text, { fontSize: "lg", color: color, display: "inline" },
                            tabs,
                            " ",
                            content.title,
                            " ")),
                    renderContents(content.children, level + 1)));
            }
        });
    }
    return (React__default['default'].createElement("div", null, renderContents(contents, 0)));
};

exports.Banner = Banner;
exports.Button = Button;
exports.Carousel = Carousel;
exports.ContentCard = ContentCard;
exports.Dropdown = Dropdown;
exports.Footer = Footer;
exports.Header = Header;
exports.Input = Input;
exports.Navbar = Navbar;
exports.Text = Text;
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map
