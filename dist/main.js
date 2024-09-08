/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

html {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15; /* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
	tab-size: 4; /* 3 */
}

/*
Sections
========
*/

body {
	margin: 0; /* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`, "",{"version":3,"sources":["webpack://./src/styles/modern-normalize.css"],"names":[],"mappings":"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,sHAAsH;CACtH;;;;;;;;kBAQiB;CACjB,iBAAiB,EAAE,gDAAgD;CACnE,8BAA8B,EAAE,0EAA0E;CAC1G,gBAAgB,EAAE,mDAAmD;CACrE,WAAW,EAAE,MAAM;AACpB;;AAEA;;;CAGC;;AAED;CACC,SAAS,EAAE,uCAAuC;AACnD;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AACvB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,iCAAiC;AAClC;;AAEA;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;AAC9B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;CAEC,oBAAoB;AACrB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;CACC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,8BAA8B;AAC/B;;AAEA;;;CAGC;;AAED;CACC,gBAAgB;AACjB;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB","sourcesContent":["/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/edit-logo.svg */ "./src/images/edit-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/delete-logo.svg */ "./src/images/delete-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/done-logo.svg */ "./src/images/done-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background: #fffffe;
  --text: #0e172c;
  --primary: #d9d4e7;
  --secondary: #fec7d7;
  --tertiary: #a786df;
  --hero-font: "SUSE", sans-serif;
  --primary-font: "Quicksand", sans-serif;
  --border-radius: 0.15rem;
}

body {
  background-color: var(--background);
  color: var(--text);
  font-family: var(--primary-font);
}

#content {
  height: 100vh;
  display: grid;
  grid-template-rows: 8rem 1fr;
  grid-template-columns: 14rem 1fr;
}

.hero {
  grid-area: 1 / 2 / 2 / 3;
  padding: 1rem 0rem 1rem 2rem;
  border-bottom: 0.15rem solid var(--tertiary);
}

.hero-heading {
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  margin: 0;
  font-family: var(--hero-font);
}

.hero-caption {
  font-size: 1.1rem;
}

.page-logo {
  fill: var(--tertiary);
  width: 3.3rem;
}

.tasks {
  grid-area: 2 / 2 / -1 / -1;
  background-color: var(--background);
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 2rem;
  overflow-y: auto;
  box-shadow: 0.2rem 0.3rem 0.5rem 0.1rem var(--primary) inset;
}

.task,
.note {
  background-color: var(--primary);
  height: min-content;
  width: 100%;
  min-width: 35rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.task-first-section,
.task-second-section,
.task-third-section,
.task-fourth-section {
  display: flex;
  flex-wrap: wrap;
}

.task-first-section {
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  width: 3rem;
}

.task-second-section {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, minmax(10rem, 1fr)) minmax(5rem, 1fr);
  width: 68rem;
  gap: 1rem;
}

.task-third-section {
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-fourth-section {
  width: 9rem;
  justify-content: center;
  align-items: center;
}

.task-title,
.project-field,
.task-description,
.date-picker,
.priority-btn,
.finish-task-btn,
.note-title,
.note-description {
  border-radius: 0.4rem;
  border: 0.15rem solid var(--text);
  padding: 0.2rem;
  color: var(--text);
  background-color: var(--background);
}

.date-picker:enabled,
.project-field:enabled {
  cursor: pointer;
}

label[for="task-title"],
label[for="task-project"],
label[for="task-description"],
label[for="task-duedate"],
.priority-label {
  font-weight: bold;
  padding-left: 0.4rem;
}

.task-title,
.project-field,
.date-picker {
  height: 2rem;
}

.task-description,
.note-description {
  resize: none;
}

.task-title-container {
  grid-column: span 2;
}

.task-title {
  width: 100%;
}

.task-title:disabled,
.note-title:disabled {
  font-size: 1.5rem;
  font-weight: bold;
}

.task-title:disabled,
.project-field:disabled,
.task-description:disabled,
.date-picker:disabled,
.note-title:disabled,
.note-description:disabled {
  border: 0.15rem solid var(--primary);
  background-color: var(--primary);
}

.project-field:disabled {
  appearance: none;
}

.project-input-container {
  grid-column: 3 / 4;
}

.project-field {
  width: 100%;
}

.task-description-container {
  grid-column: span 3;
}

.task-description {
  width: 100%;
}

.date-picker {
  width: 100%;
}

.edit-btn,
.delete-btn,
.done-btn,
.finish-task-btn,
.rename-project-btn,
.set-project-btn,
.delete-project-btn,
.note-edit-btn,
.note-done-btn,
.note-delete-btn {
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  height: auto;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.edit-btn,
.note-edit-btn {
  opacity: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 1.7rem 1.7rem;
  background-repeat: no-repeat;
  background-position: center;
}

.delete-btn,
.note-delete-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
}

.done-btn,
.note-done-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
}

.rename-project-btn,
.set-project-btn,
.delete-project-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 1.3rem 1.3rem;
  background-repeat: no-repeat;
  background-position: center;
}

.set-project-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: 1.3rem 1.3rem;
  background-repeat: no-repeat;
  background-position: center;
}

.delete-project-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: 1.3rem 1.3rem;
  background-repeat: no-repeat;
  background-position: center;
}

.project-header-btn-container {
  display: flex;
  gap: 1rem;
}

.finish-task-btn {
  font-family: var(--hero-font), sans-serif;
  font-size: 1.2rem;
  width: 60%;
  border: 0.15rem solid var(--primary);
  transition: background-color 0.2s ease-out, border 0.2s ease-out;
}

.delete-btn:hover,
.edit-btn:hover,
.done-btn:hover,
.finish-task-btn:hover,
.rename-project-btn:hover,
.set-project-btn:hover,
.delete-project-btn:hover,
.note-delete-btn:hover,
.note-edit-btn:hover,
.note-done-btn:hover {
  transform: scale(1.1);
}

.finish-task-btn:hover {
  background-color: var(--background);
  border: 0.15rem solid var(--text);
}

.task:hover .edit-btn {
  opacity: 1;
}

.add-task,
.add-note-btn {
  height: min-content;
  padding: 1rem;
}

.priority-btn-container {
  display: flex;
  gap: 0.2rem;
}

.priority-styling {
  border: 0.15rem solid var(--tertiary);
}

.high-priority-btn:disabled {
  font-weight: bold;
}

.high-priority-btn:enabled,
.medium-priority-btn:enabled,
.low-priority-btn:enabled {
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
}

.high-priority-btn:enabled:hover,
.medium-priority-btn:enabled:hover,
.low-priority-btn:enabled:hover {
  background-color: var(--text);
  color: var(--background);
}

.high-priority-btn:disabled,
.medium-priority-btn:disabled,
.low-priority-btn:disabled {
  display: none;
}

.high-priority-btn:disabled.priority-styling,
.medium-priority-btn:disabled.priority-styling,
.low-priority-btn:disabled.priority-styling {
  display: block;
  border: 0.15rem solid var(--primary);
  background-color: var(--primary);
}

.project-header-container {
  width: 100%;
  height: min-content;
}

.project-header:disabled {
  border: 0.15rem solid var(--background);
  background-color: var(--background);
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text);
  height: 2.2rem;
  width: 100%;
}

.project-header:enabled {
  border: 0.15rem solid var(--text);
  border-radius: 0.4rem;
  padding: 0.2rem;
  background-color: var(--background);
  color: var(--text);
  height: 2.2rem;
}

.note {
  width: min-content;
  flex-direction: column;
  min-width: 10rem;
}

.note-title-container,
.note-description-container {
  width: 20rem;
}

.note-title,
.note-description {
  width: 100%;
}

.note-edit-btn {
  opacity: 0;
}

.note:hover .note-edit-btn {
  opacity: 1;
}

.add-note-btn {
  height: min-content;
  padding: 1rem;
}

.taskbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  grid-area: 1 / 1 / -1 / 2;
  background-color: var(--secondary);
  padding: 1rem 0 1rem 0;
  overflow-y: auto;
}

.general-tasks,
.projects-todo,
.project-item,
.notes-btn-container,
.add-btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.taskbar-btn {
  appearance: none;
  width: 80%;
  border: none;
  background-color: var(--secondary);
  padding: 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: text-shadow 0.2s ease-out, background-color 0.2s ease-out;
}

.taskbar-btn:hover {
  background-color: var(--text);
  color: var(--primary);
  text-shadow: 0rem 0rem 0.1rem var(--primary);
}

.taskbar-btn-activate {
  background-color: var(--text);
  color: var(--primary);
  text-shadow: 0rem 0rem 0.1rem var(--primary);
}

.add-task,
.add-project-btn,
.add-note-btn {
  border: 0.2rem solid var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 1rem;
}

.add-project-btn {
  margin-bottom: 1rem;
}

.add-note-btn {
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: text-shadow 0.2s ease-out, background-color 0.2s ease-out,
    transform 0.2s ease-out;
}

.add-note-btn:hover {
  transform: scale(1.1);
}

.add-logo,
.add-note-logo {
  width: 2rem;
  fill: var(--text);
  transition: fill 0.2s ease-out, filter 0.2s ease-out;
}

.taskbar-btn:hover .add-logo {
  fill: var(--primary);
  filter: drop-shadow(0rem 0rem 0.1rem var(--primary));
}

.add-note-btn:hover .add-note-logo {
  transform: scale(1.1);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --background: #fffffe;\n  --text: #0e172c;\n  --primary: #d9d4e7;\n  --secondary: #fec7d7;\n  --tertiary: #a786df;\n  --hero-font: \"SUSE\", sans-serif;\n  --primary-font: \"Quicksand\", sans-serif;\n  --border-radius: 0.15rem;\n}\n\nbody {\n  background-color: var(--background);\n  color: var(--text);\n  font-family: var(--primary-font);\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 8rem 1fr;\n  grid-template-columns: 14rem 1fr;\n}\n\n.hero {\n  grid-area: 1 / 2 / 2 / 3;\n  padding: 1rem 0rem 1rem 2rem;\n  border-bottom: 0.15rem solid var(--tertiary);\n}\n\n.hero-heading {\n  display: flex;\n  align-items: center;\n  font-size: 1.7rem;\n  margin: 0;\n  font-family: var(--hero-font);\n}\n\n.hero-caption {\n  font-size: 1.1rem;\n}\n\n.page-logo {\n  fill: var(--tertiary);\n  width: 3.3rem;\n}\n\n.tasks {\n  grid-area: 2 / 2 / -1 / -1;\n  background-color: var(--background);\n  display: flex;\n  padding: 2rem;\n  flex-wrap: wrap;\n  gap: 2rem;\n  overflow-y: auto;\n  box-shadow: 0.2rem 0.3rem 0.5rem 0.1rem var(--primary) inset;\n}\n\n.task,\n.note {\n  background-color: var(--primary);\n  height: min-content;\n  width: 100%;\n  min-width: 35rem;\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.task-first-section,\n.task-second-section,\n.task-third-section,\n.task-fourth-section {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.task-first-section {\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 1rem;\n  width: 3rem;\n}\n\n.task-second-section {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(2, minmax(10rem, 1fr)) minmax(5rem, 1fr);\n  width: 68rem;\n  gap: 1rem;\n}\n\n.task-third-section {\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-fourth-section {\n  width: 9rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.task-title,\n.project-field,\n.task-description,\n.date-picker,\n.priority-btn,\n.finish-task-btn,\n.note-title,\n.note-description {\n  border-radius: 0.4rem;\n  border: 0.15rem solid var(--text);\n  padding: 0.2rem;\n  color: var(--text);\n  background-color: var(--background);\n}\n\n.date-picker:enabled,\n.project-field:enabled {\n  cursor: pointer;\n}\n\nlabel[for=\"task-title\"],\nlabel[for=\"task-project\"],\nlabel[for=\"task-description\"],\nlabel[for=\"task-duedate\"],\n.priority-label {\n  font-weight: bold;\n  padding-left: 0.4rem;\n}\n\n.task-title,\n.project-field,\n.date-picker {\n  height: 2rem;\n}\n\n.task-description,\n.note-description {\n  resize: none;\n}\n\n.task-title-container {\n  grid-column: span 2;\n}\n\n.task-title {\n  width: 100%;\n}\n\n.task-title:disabled,\n.note-title:disabled {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.task-title:disabled,\n.project-field:disabled,\n.task-description:disabled,\n.date-picker:disabled,\n.note-title:disabled,\n.note-description:disabled {\n  border: 0.15rem solid var(--primary);\n  background-color: var(--primary);\n}\n\n.project-field:disabled {\n  appearance: none;\n}\n\n.project-input-container {\n  grid-column: 3 / 4;\n}\n\n.project-field {\n  width: 100%;\n}\n\n.task-description-container {\n  grid-column: span 3;\n}\n\n.task-description {\n  width: 100%;\n}\n\n.date-picker {\n  width: 100%;\n}\n\n.edit-btn,\n.delete-btn,\n.done-btn,\n.finish-task-btn,\n.rename-project-btn,\n.set-project-btn,\n.delete-project-btn,\n.note-edit-btn,\n.note-done-btn,\n.note-delete-btn {\n  padding: 1rem;\n  width: 2rem;\n  height: 2rem;\n  height: auto;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: transform 0.2s ease-out;\n}\n\n.edit-btn,\n.note-edit-btn {\n  opacity: 0;\n  background-image: url(../images/edit-logo.svg);\n  background-size: 1.7rem 1.7rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.delete-btn,\n.note-delete-btn {\n  background-image: url(../images/delete-logo.svg);\n  background-size: cover;\n}\n\n.done-btn,\n.note-done-btn {\n  background-image: url(../images/done-logo.svg);\n  background-size: cover;\n}\n\n.rename-project-btn,\n.set-project-btn,\n.delete-project-btn {\n  background-image: url(../images/edit-logo.svg);\n  background-size: 1.3rem 1.3rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.set-project-btn {\n  background-image: url(../images/done-logo.svg);\n  background-size: 1.3rem 1.3rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.delete-project-btn {\n  background-image: url(../images/delete-logo.svg);\n  background-size: 1.3rem 1.3rem;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.project-header-btn-container {\n  display: flex;\n  gap: 1rem;\n}\n\n.finish-task-btn {\n  font-family: var(--hero-font), sans-serif;\n  font-size: 1.2rem;\n  width: 60%;\n  border: 0.15rem solid var(--primary);\n  transition: background-color 0.2s ease-out, border 0.2s ease-out;\n}\n\n.delete-btn:hover,\n.edit-btn:hover,\n.done-btn:hover,\n.finish-task-btn:hover,\n.rename-project-btn:hover,\n.set-project-btn:hover,\n.delete-project-btn:hover,\n.note-delete-btn:hover,\n.note-edit-btn:hover,\n.note-done-btn:hover {\n  transform: scale(1.1);\n}\n\n.finish-task-btn:hover {\n  background-color: var(--background);\n  border: 0.15rem solid var(--text);\n}\n\n.task:hover .edit-btn {\n  opacity: 1;\n}\n\n.add-task,\n.add-note-btn {\n  height: min-content;\n  padding: 1rem;\n}\n\n.priority-btn-container {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.priority-styling {\n  border: 0.15rem solid var(--tertiary);\n}\n\n.high-priority-btn:disabled {\n  font-weight: bold;\n}\n\n.high-priority-btn:enabled,\n.medium-priority-btn:enabled,\n.low-priority-btn:enabled {\n  padding: 0.3rem 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out;\n}\n\n.high-priority-btn:enabled:hover,\n.medium-priority-btn:enabled:hover,\n.low-priority-btn:enabled:hover {\n  background-color: var(--text);\n  color: var(--background);\n}\n\n.high-priority-btn:disabled,\n.medium-priority-btn:disabled,\n.low-priority-btn:disabled {\n  display: none;\n}\n\n.high-priority-btn:disabled.priority-styling,\n.medium-priority-btn:disabled.priority-styling,\n.low-priority-btn:disabled.priority-styling {\n  display: block;\n  border: 0.15rem solid var(--primary);\n  background-color: var(--primary);\n}\n\n.project-header-container {\n  width: 100%;\n  height: min-content;\n}\n\n.project-header:disabled {\n  border: 0.15rem solid var(--background);\n  background-color: var(--background);\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text);\n  height: 2.2rem;\n  width: 100%;\n}\n\n.project-header:enabled {\n  border: 0.15rem solid var(--text);\n  border-radius: 0.4rem;\n  padding: 0.2rem;\n  background-color: var(--background);\n  color: var(--text);\n  height: 2.2rem;\n}\n\n.note {\n  width: min-content;\n  flex-direction: column;\n  min-width: 10rem;\n}\n\n.note-title-container,\n.note-description-container {\n  width: 20rem;\n}\n\n.note-title,\n.note-description {\n  width: 100%;\n}\n\n.note-edit-btn {\n  opacity: 0;\n}\n\n.note:hover .note-edit-btn {\n  opacity: 1;\n}\n\n.add-note-btn {\n  height: min-content;\n  padding: 1rem;\n}\n\n.taskbar {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n  grid-area: 1 / 1 / -1 / 2;\n  background-color: var(--secondary);\n  padding: 1rem 0 1rem 0;\n  overflow-y: auto;\n}\n\n.general-tasks,\n.projects-todo,\n.project-item,\n.notes-btn-container,\n.add-btn-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.taskbar-btn {\n  appearance: none;\n  width: 80%;\n  border: none;\n  background-color: var(--secondary);\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: text-shadow 0.2s ease-out, background-color 0.2s ease-out;\n}\n\n.taskbar-btn:hover {\n  background-color: var(--text);\n  color: var(--primary);\n  text-shadow: 0rem 0rem 0.1rem var(--primary);\n}\n\n.taskbar-btn-activate {\n  background-color: var(--text);\n  color: var(--primary);\n  text-shadow: 0rem 0rem 0.1rem var(--primary);\n}\n\n.add-task,\n.add-project-btn,\n.add-note-btn {\n  border: 0.2rem solid var(--text);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.4rem 1rem 0.4rem 1rem;\n}\n\n.add-project-btn {\n  margin-bottom: 1rem;\n}\n\n.add-note-btn {\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0.5rem 1rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: text-shadow 0.2s ease-out, background-color 0.2s ease-out,\n    transform 0.2s ease-out;\n}\n\n.add-note-btn:hover {\n  transform: scale(1.1);\n}\n\n.add-logo,\n.add-note-logo {\n  width: 2rem;\n  fill: var(--text);\n  transition: fill 0.2s ease-out, filter 0.2s ease-out;\n}\n\n.taskbar-btn:hover .add-logo {\n  fill: var(--primary);\n  filter: drop-shadow(0rem 0rem 0.1rem var(--primary));\n}\n\n.add-note-btn:hover .add-note-logo {\n  transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/modern-normalize.css":
/*!*****************************************!*\
  !*** ./src/styles/modern-normalize.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modern-normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/barrel.js":
/*!***********************!*\
  !*** ./src/barrel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateTaskbarBtn: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.activateTaskbarBtn),
/* harmony export */   addActivatedProjectStyle: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.addActivatedProjectStyle),
/* harmony export */   addNote: () => (/* reexport safe */ _components_notes_js__WEBPACK_IMPORTED_MODULE_5__.addNote),
/* harmony export */   addProject: () => (/* reexport safe */ _components_projects_js__WEBPACK_IMPORTED_MODULE_4__.addProject),
/* harmony export */   addTask: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.addTask),
/* harmony export */   checkMoreThanOneProject: () => (/* reexport safe */ _components_projects_js__WEBPACK_IMPORTED_MODULE_4__.checkMoreThanOneProject),
/* harmony export */   checkProjectExists: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.checkProjectExists),
/* harmony export */   createProjectHeader: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.createProjectHeader),
/* harmony export */   deleteNote: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.deleteNote),
/* harmony export */   deleteProject: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject),
/* harmony export */   deleteTask: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask),
/* harmony export */   deleteTemporaryTask: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.deleteTemporaryTask),
/* harmony export */   deselectNoteTitle: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.deselectNoteTitle),
/* harmony export */   deselectTaskTitle: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.deselectTaskTitle),
/* harmony export */   disableInputs: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.disableInputs),
/* harmony export */   disableNoteInputs: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.disableNoteInputs),
/* harmony export */   disableProjectHeader: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.disableProjectHeader),
/* harmony export */   enableInputs: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.enableInputs),
/* harmony export */   enableNoteInputs: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.enableNoteInputs),
/* harmony export */   enableProjectHeader: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.enableProjectHeader),
/* harmony export */   findActivatedProjectIndex: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.findActivatedProjectIndex),
/* harmony export */   findNoteEditingStatus: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.findNoteEditingStatus),
/* harmony export */   findNumberOfProjects: () => (/* reexport safe */ _components_projects_js__WEBPACK_IMPORTED_MODULE_4__.findNumberOfProjects),
/* harmony export */   findTaskEditingStatus: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.findTaskEditingStatus),
/* harmony export */   getNotes: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.getNotes),
/* harmony export */   getProjects: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.getProjects),
/* harmony export */   getTasks: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.getTasks),
/* harmony export */   getTemporaryTasks: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.getTemporaryTasks),
/* harmony export */   loadProjectTasks: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.loadProjectTasks),
/* harmony export */   loadThisWeeksTasks: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.loadThisWeeksTasks),
/* harmony export */   loadTodaysTasks: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.loadTodaysTasks),
/* harmony export */   moveAllTasks: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.moveAllTasks),
/* harmony export */   notesLibrary: () => (/* reexport safe */ _components_notes_js__WEBPACK_IMPORTED_MODULE_5__.notesLibrary),
/* harmony export */   projectsArray: () => (/* reexport safe */ _components_projects_js__WEBPACK_IMPORTED_MODULE_4__.projectsArray),
/* harmony export */   reloadProjectInputs: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.reloadProjectInputs),
/* harmony export */   removeAllTasks: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.removeAllTasks),
/* harmony export */   removeAllTemporaryTasks: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.removeAllTemporaryTasks),
/* harmony export */   removeNote: () => (/* reexport safe */ _components_notes_js__WEBPACK_IMPORTED_MODULE_5__.removeNote),
/* harmony export */   removeProject: () => (/* reexport safe */ _components_projects_js__WEBPACK_IMPORTED_MODULE_4__.removeProject),
/* harmony export */   removeProjectHeader: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.removeProjectHeader),
/* harmony export */   removeTask: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.removeTask),
/* harmony export */   removeTemporaryTask: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.removeTemporaryTask),
/* harmony export */   renderLatestNoteEditable: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderLatestNoteEditable),
/* harmony export */   renderLatestTaskEditable: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderLatestTaskEditable),
/* harmony export */   renderNotes: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderNotes),
/* harmony export */   renderNotesEditable: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderNotesEditable),
/* harmony export */   renderProjectHeaderEditable: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectHeaderEditable),
/* harmony export */   renderProjects: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects),
/* harmony export */   renderTasks: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks),
/* harmony export */   renderTasksEditable: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksEditable),
/* harmony export */   revertTaskLibrary: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.revertTaskLibrary),
/* harmony export */   saveNote: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.saveNote),
/* harmony export */   saveProjectName: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectName),
/* harmony export */   saveTask: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.saveTask),
/* harmony export */   scrollAuto: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.scrollAuto),
/* harmony export */   scrollToTop: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.scrollToTop),
/* harmony export */   selectLatestNoteTitle: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.selectLatestNoteTitle),
/* harmony export */   selectLatestTaskTitle: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.selectLatestTaskTitle),
/* harmony export */   setDateLimit: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.setDateLimit),
/* harmony export */   setEditFlag: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.setEditFlag),
/* harmony export */   setNoteEditFlag: () => (/* reexport safe */ _components_notes_js__WEBPACK_IMPORTED_MODULE_5__.setNoteEditFlag),
/* harmony export */   setPriorityStyling: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.setPriorityStyling),
/* harmony export */   sortTaskLibrary: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.sortTaskLibrary),
/* harmony export */   storageAvailable: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.storageAvailable),
/* harmony export */   storeNotes: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeNotes),
/* harmony export */   storeProjects: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeProjects),
/* harmony export */   storeTasks: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTasks),
/* harmony export */   storeTemporaryTasks: () => (/* reexport safe */ _components_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTemporaryTasks),
/* harmony export */   swapBtns: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.swapBtns),
/* harmony export */   swapNoteBtns: () => (/* reexport safe */ _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__.swapNoteBtns),
/* harmony export */   taskFactory: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.taskFactory),
/* harmony export */   taskLibrary: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.taskLibrary),
/* harmony export */   temporaryTaskLibrary: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.temporaryTaskLibrary),
/* harmony export */   togglePriority: () => (/* reexport safe */ _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__.togglePriority),
/* harmony export */   updateProjectsInTaskLibrary: () => (/* reexport safe */ _components_main_js__WEBPACK_IMPORTED_MODULE_3__.updateProjectsInTaskLibrary)
/* harmony export */ });
/* harmony import */ var _components_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/storage.js */ "./src/components/storage.js");
/* harmony import */ var _components_user_interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-interface.js */ "./src/components/user-interface.js");
/* harmony import */ var _components_task_library_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task-library.js */ "./src/components/task-library.js");
/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.js */ "./src/components/main.js");
/* harmony import */ var _components_projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects.js */ "./src/components/projects.js");
/* harmony import */ var _components_notes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notes.js */ "./src/components/notes.js");















/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkProjectExists: () => (/* binding */ checkProjectExists),
/* harmony export */   deleteNote: () => (/* binding */ deleteNote),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   deleteTemporaryTask: () => (/* binding */ deleteTemporaryTask),
/* harmony export */   findActivatedProjectIndex: () => (/* binding */ findActivatedProjectIndex),
/* harmony export */   findNoteEditingStatus: () => (/* binding */ findNoteEditingStatus),
/* harmony export */   findTaskEditingStatus: () => (/* binding */ findTaskEditingStatus),
/* harmony export */   loadProjectTasks: () => (/* binding */ loadProjectTasks),
/* harmony export */   loadThisWeeksTasks: () => (/* binding */ loadThisWeeksTasks),
/* harmony export */   loadTodaysTasks: () => (/* binding */ loadTodaysTasks),
/* harmony export */   saveNote: () => (/* binding */ saveNote),
/* harmony export */   saveProjectName: () => (/* binding */ saveProjectName),
/* harmony export */   saveTask: () => (/* binding */ saveTask),
/* harmony export */   scrollAuto: () => (/* binding */ scrollAuto),
/* harmony export */   scrollToTop: () => (/* binding */ scrollToTop),
/* harmony export */   setDateLimit: () => (/* binding */ setDateLimit),
/* harmony export */   sortTaskLibrary: () => (/* binding */ sortTaskLibrary),
/* harmony export */   updateProjectsInTaskLibrary: () => (/* binding */ updateProjectsInTaskLibrary)
/* harmony export */ });
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barrel */ "./src/barrel.js");




function scrollAuto(element) {
  element.scrollIntoView({
    behavior: "instant",
  });
}

function scrollToTop(container) {
  container.scrollTop = 0;
}

function deleteTask(btn) {
  if (btn.classList.contains("delete-btn")) {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, btn);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeTask)(deleteBtnIndex);
  } else if (btn.classList.contains("finish-task-btn")) {
    const finishBtns = document.querySelectorAll(".finish-task-btn");
    const finishBtnIndex = Array.prototype.indexOf.call(finishBtns, btn);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeTask)(finishBtnIndex);
  }
}

function deleteTemporaryTask(btn) {
  if (btn.classList.contains("delete-btn")) {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, btn);
    const task = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[deleteBtnIndex];
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeTemporaryTask)(task);
  } else if (btn.classList.contains("finish-task-btn")) {
    const finishBtns = document.querySelectorAll(".finish-task-btn");
    const finishBtnIndex = Array.prototype.indexOf.call(finishBtns, btn);
    const task = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[finishBtnIndex];
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeTemporaryTask)(task);
  }
}

function saveTask(doneBtn, newTitle, project, dueDate, taskDescription) {
  const doneBtns = document.querySelectorAll(".task-editing");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[doneBtnIndex].taskTitle = newTitle;
  _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[doneBtnIndex].project = project;
  _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[doneBtnIndex].dueDate = dueDate;
  _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[doneBtnIndex].taskDescription = taskDescription;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (month.length < 2) {
    month = "0" + month;
  }

  if (day.length < 2) {
    day = "0" + day;
  }

  let formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function setDateLimit() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    let dueDatePicker = task.querySelector(".date-picker");
    let todaysDate = new Date();
    todaysDate = formatDate(todaysDate);
    dueDatePicker.setAttribute("min", todaysDate);
  });
}

function findTaskEditingStatus() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).some((task) => task.editFlag);
}

function findHighPriorityTasks() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter((task) => task.highPriority);
}

function findMediumPriorityTasks() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter((task) => task.mediumPriority);
}

function findLowPriorityTasks() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter((task) => task.lowPriority);
}

function sortHighPriorityTasks() {
  return findHighPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function sortMediumPriorityTasks() {
  return findMediumPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function sortLowPriorityTasks() {
  return findLowPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function pushHighPriorityTasks(highPriorityTasks) {
  highPriorityTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
  });
}

function pushMediumPriorityTasks(mediumPriorityTasks) {
  mediumPriorityTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
  });
}

function pushLowPriorityTasks(lowPriorityTasks) {
  lowPriorityTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
  });
}
function sortTaskLibrary() {
  let highPriorityTasks = sortHighPriorityTasks();
  let mediumPriorityTasks = sortMediumPriorityTasks();
  let lowPriorityTasks = sortLowPriorityTasks();

  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeAllTasks)();
  pushHighPriorityTasks(highPriorityTasks);
  pushMediumPriorityTasks(mediumPriorityTasks);
  pushLowPriorityTasks(lowPriorityTasks);
}

function findTodaysTasks() {
  let todaysDate = new Date();
  todaysDate = formatDate(todaysDate);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.revertTaskLibrary)();

  const todaysTasks = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter((task) => {
    let taskDate = task.dueDate;
    return taskDate === todaysDate;
  });

  return todaysTasks;
}

function loadTodaysTasks() {
  let todaysTasks = findTodaysTasks();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.moveAllTasks)();
  todaysTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
}

function findThisWeeksTasks() {
  let todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);

  let nextWeek = new Date(todaysDate);
  nextWeek.setDate(todaysDate.getDate() + 7);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.revertTaskLibrary)();
  let thisWeeksTasks = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter((task) => {
    let thisDate = new Date(task.dueDate);
    return thisDate >= todaysDate && thisDate <= nextWeek;
  });

  return thisWeeksTasks;
}

function loadThisWeeksTasks() {
  let thisWeeksTasks = findThisWeeksTasks();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.moveAllTasks)();
  thisWeeksTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
}

function findProjectTasks(projectName) {
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.revertTaskLibrary)();
  let projectTasks = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).filter(
    (task) => task.project === projectName
  );
  return projectTasks;
}

function loadProjectTasks(projectName) {
  let projectTasks = findProjectTasks(projectName);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.moveAllTasks)();
  projectTasks.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
}

function saveProjectName(oldName, newName) {
  let index = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray).indexOf(oldName);
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray)[index] = newName;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeProjects)();
}

function updateProjectsInTaskLibrary(oldName, newName) {
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).forEach((task) => {
    if (task.project === oldName) {
      task.project = newName;
    }
  });
}

function checkProjectExists(projectName) {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray).some(
    (project) => project === projectName
  );
}

function deleteProject(projectName) {
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.revertTaskLibrary)();
  let tempArray = (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary;
  tempArray = tempArray.filter((task) => task.project !== projectName);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeAllTasks)();
  tempArray.forEach((task) => {
    _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.push(task);
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(_barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectName);
}

function findActivatedProjectIndex() {
  const projectElements = document.querySelectorAll(".project");
  for (let index = 0; index < projectElements.length; index++) {
    if (projectElements[index].classList.contains("taskbar-btn-activate")) {
      return index + 1; //Should not return 0 as js understands it as falsy value
    }
  }
  return false;
}

// NOTES RELATED

function deleteNote(btn) {
  if (btn.classList.contains("note-delete-btn")) {
    const deleteBtns = document.querySelectorAll(".note-delete-btn");
    const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, btn);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.removeNote)(deleteBtnIndex);
  }
}

function saveNote(doneBtn, newTitle, noteDescription) {
  const doneBtns = document.querySelectorAll(".note-editing");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary[doneBtnIndex].noteTitle = newTitle;
  _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary[doneBtnIndex].noteDescription = noteDescription;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeNotes)(_barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary);
}

function findNoteEditingStatus() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary).some((note) => note.editFlag);
}


/***/ }),

/***/ "./src/components/notes.js":
/*!*********************************!*\
  !*** ./src/components/notes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNote: () => (/* binding */ addNote),
/* harmony export */   notesLibrary: () => (/* binding */ notesLibrary),
/* harmony export */   removeNote: () => (/* binding */ removeNote),
/* harmony export */   setNoteEditFlag: () => (/* binding */ setNoteEditFlag)
/* harmony export */ });
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barrel */ "./src/barrel.js");




let notesFactory = (title) => {
  let noteTitle = title;
  let noteDescription = "";
  let editFlag = false;
  return { noteTitle, noteDescription, editFlag };
};

let defaultNote = notesFactory("Sample note");

let notesLibrary = (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || [defaultNote];

function addNote(title) {
  let newNote = notesFactory(title);
  notesLibrary.push(newNote);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeNotes)(notesLibrary);
}

function removeNote(index) {
  notesLibrary.splice(index, 1);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeNotes)(notesLibrary);
}

function setAllEditFlagsFalse() {
  notesLibrary.forEach((note) => {
    note.editFlag = false;
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeNotes)(notesLibrary);
}

function setNoteEditFlag(state, index) {
  if (typeof state === "boolean") {
    setAllEditFlagsFalse();
    notesLibrary[index].editFlag = state;
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeNotes)(notesLibrary);
  }
}


/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   checkMoreThanOneProject: () => (/* binding */ checkMoreThanOneProject),
/* harmony export */   findNumberOfProjects: () => (/* binding */ findNumberOfProjects),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barrel */ "./src/barrel.js");




let projectsArray = (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || ["General"];

function addProject(projectName) {
  projectsArray.push(projectName);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeProjects)(projectsArray);
}

function findNumberOfProjects() {
  return ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || projectsArray).length;
}

function removeProject(projectName) {
  let index = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || projectsArray).indexOf(projectName);
  projectsArray.splice(index, 1);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeProjects)(projectsArray);
}

function checkMoreThanOneProject() {
  if (((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || projectsArray).length > 1) {
    return true;
  } else {
    return false;
  }
}


/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotes: () => (/* binding */ getNotes),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   getTemporaryTasks: () => (/* binding */ getTemporaryTasks),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable),
/* harmony export */   storeNotes: () => (/* binding */ storeNotes),
/* harmony export */   storeProjects: () => (/* binding */ storeProjects),
/* harmony export */   storeTasks: () => (/* binding */ storeTasks),
/* harmony export */   storeTemporaryTasks: () => (/* binding */ storeTemporaryTasks)
/* harmony export */ });


function storageAvailable() {
  let storage;
  try {
    storage = window["localStorage"];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storeTasks(taskLibrary) {
  if (storageAvailable()) {
    localStorage.setItem("taskLibrary", JSON.stringify(taskLibrary));
  }
}

function storeTemporaryTasks(temporaryTaskLibrary) {
  if (storageAvailable()) {
    localStorage.setItem(
      "temporaryTaskLibrary",
      JSON.stringify(temporaryTaskLibrary)
    );
  }
}

function getTasks() {
  if (storageAvailable()) {
    return JSON.parse(localStorage.getItem("taskLibrary"));
  }
}

function getTemporaryTasks() {
  if (storageAvailable()) {
    return JSON.parse(localStorage.getItem("temporaryTaskLibrary"));
  }
}

function storeProjects(projectsArray) {
  if (storageAvailable()) {
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  }
}

function getProjects() {
  if (storageAvailable()) {
    return JSON.parse(localStorage.getItem("projectsArray"));
  }
}

function storeNotes(notesLibrary) {
  if (storageAvailable()) {
    localStorage.setItem("notesLibrary", JSON.stringify(notesLibrary));
  }
}

function getNotes() {
  if (storageAvailable()) {
    return JSON.parse(localStorage.getItem("notesLibrary"));
  }
}


/***/ }),

/***/ "./src/components/task-library.js":
/*!****************************************!*\
  !*** ./src/components/task-library.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   moveAllTasks: () => (/* binding */ moveAllTasks),
/* harmony export */   removeAllTasks: () => (/* binding */ removeAllTasks),
/* harmony export */   removeAllTemporaryTasks: () => (/* binding */ removeAllTemporaryTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   removeTemporaryTask: () => (/* binding */ removeTemporaryTask),
/* harmony export */   revertTaskLibrary: () => (/* binding */ revertTaskLibrary),
/* harmony export */   setEditFlag: () => (/* binding */ setEditFlag),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory),
/* harmony export */   taskLibrary: () => (/* binding */ taskLibrary),
/* harmony export */   temporaryTaskLibrary: () => (/* binding */ temporaryTaskLibrary),
/* harmony export */   togglePriority: () => (/* binding */ togglePriority)
/* harmony export */ });
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barrel */ "./src/barrel.js");




// import { storageAvailable } from "../barrel";

let taskFactory = (title) => {
  let taskTitle = title;
  let project = "General";
  let dueDate;
  let taskDescription = "";
  let highPriority = false;
  let mediumPriority = true;
  let lowPriority = false;
  let editFlag = false;
  return {
    taskTitle,
    project,
    editFlag,
    dueDate,
    taskDescription,
    highPriority,
    mediumPriority,
    lowPriority,
  };
};

let defaultTask = taskFactory("Sample task");
let taskLibrary = (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || [defaultTask];
let temporaryTaskLibrary = (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTemporaryTasks)() || [];

function addTask(title) {
  let newTask = taskFactory(title);
  taskLibrary.push(newTask);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function removeTask(index) {
  taskLibrary.splice(index, 1);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function removeTemporaryTask(task) {
  let taskIndex = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTemporaryTasks)() || temporaryTaskLibrary).indexOf(task);
  if (taskIndex !== -1) {
    temporaryTaskLibrary.splice(taskIndex, 1);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTemporaryTasks)(temporaryTaskLibrary);
  }
}

function removeAllTasks() {
  taskLibrary.splice(0, taskLibrary.length);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function removeAllTemporaryTasks() {
  temporaryTaskLibrary.splice(0, temporaryTaskLibrary.length);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTemporaryTasks)(temporaryTaskLibrary);
}

function setAllEditFlagsFalse() {
  taskLibrary.forEach((task) => {
    task.editFlag = false;
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function setEditFlag(state, index) {
  if (typeof state === "boolean") {
    setAllEditFlagsFalse();
    taskLibrary[index].editFlag = state;
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
  }
}

function setPrioritiesFalse(index) {
  taskLibrary[index].highPriority = false;
  taskLibrary[index].mediumPriority = false;
  taskLibrary[index].lowPriority = false;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function togglePriority(priority, index) {
  setPrioritiesFalse(index); //To set other priorities as false
  taskLibrary[index][priority] = !taskLibrary[index][priority];
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function moveAllTasks() {
  taskLibrary.forEach((task) => {
    if (!temporaryTaskLibrary.includes(task)) {
      //Check to prevent duplicating tasks
      temporaryTaskLibrary.push(task);
      (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTemporaryTasks)(temporaryTaskLibrary);
    }
  });
  removeAllTasks();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
}

function revertTaskLibrary() {
  if (temporaryTaskLibrary.length !== 0) {
    //Check to prevent removing all tasks
    removeAllTasks();
    temporaryTaskLibrary.forEach((task) => {
      taskLibrary.push(task);
    });
    removeAllTemporaryTasks();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTasks)(taskLibrary);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.storeTemporaryTasks)(temporaryTaskLibrary);
  }
}


/***/ }),

/***/ "./src/components/user-interface.js":
/*!******************************************!*\
  !*** ./src/components/user-interface.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateTaskbarBtn: () => (/* binding */ activateTaskbarBtn),
/* harmony export */   addActivatedProjectStyle: () => (/* binding */ addActivatedProjectStyle),
/* harmony export */   createProjectHeader: () => (/* binding */ createProjectHeader),
/* harmony export */   deselectNoteTitle: () => (/* binding */ deselectNoteTitle),
/* harmony export */   deselectTaskTitle: () => (/* binding */ deselectTaskTitle),
/* harmony export */   disableInputs: () => (/* binding */ disableInputs),
/* harmony export */   disableNoteInputs: () => (/* binding */ disableNoteInputs),
/* harmony export */   disableProjectHeader: () => (/* binding */ disableProjectHeader),
/* harmony export */   enableInputs: () => (/* binding */ enableInputs),
/* harmony export */   enableNoteInputs: () => (/* binding */ enableNoteInputs),
/* harmony export */   enableProjectHeader: () => (/* binding */ enableProjectHeader),
/* harmony export */   reloadProjectInputs: () => (/* binding */ reloadProjectInputs),
/* harmony export */   removeProjectHeader: () => (/* binding */ removeProjectHeader),
/* harmony export */   renderLatestNoteEditable: () => (/* binding */ renderLatestNoteEditable),
/* harmony export */   renderLatestTaskEditable: () => (/* binding */ renderLatestTaskEditable),
/* harmony export */   renderNotes: () => (/* binding */ renderNotes),
/* harmony export */   renderNotesEditable: () => (/* binding */ renderNotesEditable),
/* harmony export */   renderProjectHeaderEditable: () => (/* binding */ renderProjectHeaderEditable),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks),
/* harmony export */   renderTasksEditable: () => (/* binding */ renderTasksEditable),
/* harmony export */   selectLatestNoteTitle: () => (/* binding */ selectLatestNoteTitle),
/* harmony export */   selectLatestTaskTitle: () => (/* binding */ selectLatestTaskTitle),
/* harmony export */   setPriorityStyling: () => (/* binding */ setPriorityStyling),
/* harmony export */   swapBtns: () => (/* binding */ swapBtns),
/* harmony export */   swapNoteBtns: () => (/* binding */ swapNoteBtns)
/* harmony export */ });
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../barrel */ "./src/barrel.js");



const tasksContainer = document.querySelector(".tasks");

function renderTasks() {
  cleanAddNoteBtn();
  if (document.querySelector(".note")) {
    cleanNotes();
  }
  cleanTasks();
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).forEach((item) => {
    createTask(item);
  });
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.setDateLimit)();
  setPriorityStyling();
  disableAllEditBtns();
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function createTask(task) {
  const taskElement = document.createElement("div");
  const firstSection = document.createElement("div");
  const secondSection = document.createElement("div");
  const thirdSection = document.createElement("div");
  const fourthSection = document.createElement("div");
  taskElement.classList.toggle("task");
  firstSection.classList.toggle("task-first-section");
  secondSection.classList.toggle("task-second-section");
  thirdSection.classList.toggle("task-third-section");
  fourthSection.classList.toggle("task-fourth-section");
  firstSection.appendChild(createEditBtn());
  firstSection.appendChild(createDeleteBtn());
  secondSection.appendChild(createTaskTitle(task));
  secondSection.appendChild(createProjectInput(task));
  secondSection.appendChild(createTaskDescription(task));
  thirdSection.appendChild(createDatePicker(task));
  thirdSection.appendChild(createPriorities());
  fourthSection.appendChild(createFinishBtn());
  taskElement.appendChild(firstSection);
  taskElement.appendChild(secondSection);
  taskElement.appendChild(thirdSection);
  taskElement.appendChild(fourthSection);
  tasksContainer.appendChild(taskElement);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.scrollAuto)(taskElement);
}

function createTaskTitle(task) {
  const taskTitleContainer = document.createElement("div");
  taskTitleContainer.classList.toggle("task-title-container");
  const taskTitle = document.createElement("input");
  const taskTitleLabel = document.createElement("label");
  taskTitle.setAttribute("value", task.taskTitle);
  taskTitle.classList.toggle("task-title");
  taskTitle.id = "task-title";
  taskTitle.disabled = true;
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleLabel.textContent = "Task";
  taskTitleContainer.appendChild(taskTitleLabel);
  taskTitleContainer.appendChild(taskTitle);
  return taskTitleContainer;
}

function createProjectInput(task) {
  const projectInputContainer = document.createElement("div");
  projectInputContainer.classList.toggle("project-input-container");
  const projectInput = document.createElement("select");
  const projectInputLabel = document.createElement("label");
  projectInput.classList.toggle("project-field");
  projectInput.id = "task-project";
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray).forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.textContent = project;
    projectInput.appendChild(projectOption);
  });
  projectInput.value = task.project;
  projectInput.disabled = true;
  projectInputLabel.setAttribute("for", "task-project");
  projectInputLabel.textContent = "Project";
  projectInputContainer.appendChild(projectInputLabel);
  projectInputContainer.appendChild(projectInput);
  return projectInputContainer;
}

function createDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.classList.toggle("done-btn");
  doneBtn.classList.add("task-editing");
  return doneBtn;
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.classList.toggle("edit-btn");
  editBtn.classList.add("task-editing");
  return editBtn;
}

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.toggle("delete-btn");
  return deleteBtn;
}

function createTaskDescription(task) {
  const taskDescriptionContainer = document.createElement("div");
  taskDescriptionContainer.classList.toggle("task-description-container");
  const taskDescription = document.createElement("textarea");
  const taskDescriptionLabel = document.createElement("label");
  taskDescription.innerHTML = task.taskDescription;
  taskDescription.setAttribute("placeholder", "Describe your task...");
  taskDescription.setAttribute("rows", "3");
  taskDescription.setAttribute("cols", "20");
  taskDescription.id = "task-description";
  taskDescription.disabled = true;
  taskDescription.classList.toggle("task-description");
  taskDescriptionLabel.setAttribute("for", "task-description");
  taskDescriptionLabel.textContent = "Description";
  taskDescriptionContainer.appendChild(taskDescriptionLabel);
  taskDescriptionContainer.appendChild(taskDescription);
  return taskDescriptionContainer;
}

function createDatePicker(task) {
  const datePickerContainer = document.createElement("div");
  datePickerContainer.classList.toggle("date-picker-container");
  const datePicker = document.createElement("input");
  const datePickerLabel = document.createElement("label");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("value", task.dueDate);
  datePicker.classList.toggle("date-picker");
  datePicker.disabled = true;
  datePicker.id = "task-duedate";
  datePickerLabel.setAttribute("for", "task-duedate");
  datePickerLabel.textContent = "Due:";
  datePickerContainer.appendChild(datePickerLabel);
  datePickerContainer.appendChild(datePicker);
  return datePickerContainer;
}

function createPriorities() {
  const priorityContainer = document.createElement("div");
  const priorityBtnContainer = document.createElement("div");
  const highPriorityBtn = document.createElement("button");
  const mediumPriorityBtn = document.createElement("button");
  const lowPriorityBtn = document.createElement("button");
  const priorityLabel = document.createElement("div");

  highPriorityBtn.classList.toggle("high-priority-btn");
  mediumPriorityBtn.classList.toggle("medium-priority-btn");
  lowPriorityBtn.classList.toggle("low-priority-btn");

  highPriorityBtn.classList.toggle("priority-btn");
  mediumPriorityBtn.classList.toggle("priority-btn");
  lowPriorityBtn.classList.toggle("priority-btn");

  highPriorityBtn.textContent = "High";
  mediumPriorityBtn.textContent = "Medium";
  lowPriorityBtn.textContent = "Low";

  highPriorityBtn.disabled = true;
  mediumPriorityBtn.disabled = true;
  lowPriorityBtn.disabled = true;

  priorityLabel.classList.toggle("priority-label");
  priorityLabel.textContent = "Priority";

  priorityContainer.classList.toggle("priority-container");
  priorityBtnContainer.classList.toggle("priority-btn-container");

  priorityBtnContainer.appendChild(highPriorityBtn);
  priorityBtnContainer.appendChild(mediumPriorityBtn);
  priorityBtnContainer.appendChild(lowPriorityBtn);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityBtnContainer);

  return priorityContainer;
}

function createFinishBtn() {
  const finishBtn = document.createElement("button");

  finishBtn.classList.toggle("finish-task-btn");

  finishBtn.textContent = "Finish!";

  return finishBtn;
}

function swapBtns(btn) {
  btn.classList.contains("done-btn") ? swapDoneBtn(btn) : swapEditBtn(btn);
}

function swapDoneBtn(doneBtn) {
  const container = doneBtn.closest(".task-first-section");
  const deleteBtn = container.querySelector(".delete-btn");
  doneBtn.remove();
  container.insertBefore(createEditBtn(), deleteBtn);
}

function swapEditBtn(editBtn) {
  const container = editBtn.closest(".task-first-section");
  const deleteBtn = container.querySelector(".delete-btn");
  editBtn.remove();
  container.insertBefore(createDoneBtn(), deleteBtn);
}

function renderTasksEditable() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    const taskBtn = task.querySelector(".task-editing");
    if (((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[index].editFlag === true) {
      if (task.querySelector(".edit-btn")) {
        swapBtns(taskBtn);
      }
    } else if (((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[index].editFlag === false) {
      if (task.querySelector(".done-btn")) {
        swapBtns(taskBtn);
      }
    }
  });
}

function renderLatestTaskEditable() {
  const tasks = document.querySelectorAll(".task");
  let numberOfTasks = tasks.length;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.setEditFlag)(true, numberOfTasks - 1);
}

function enableInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.querySelector(".done-btn")) {
      enableInputElements(task);
      enableTextareaElements(task);
      enablePriorityBtns(task);
      enableProjectInputs(task);
    }
  });
}

function disableInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.querySelector(".edit-btn")) {
      disableInputElements(task);
      disableTextAreaElements(task);
      disablePriorityBtns(task);
      disableProjectInputs(task);
    }
  });
}

function enableInputElements(task) {
  let inputFields = task.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enableTextareaElements(task) {
  let inputFields = task.querySelectorAll("textarea");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enablePriorityBtns(task) {
  let priorityBtns = task.querySelectorAll(".priority-btn");
  priorityBtns.forEach((btn) => {
    btn.disabled = false;
  });
}

function enableProjectInputs(task) {
  let projectFields = task.querySelectorAll(".project-field");
  projectFields.forEach((field) => {
    field.disabled = false;
  });
}

function disableInputElements(task) {
  let inputFields = task.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = true;
  });
}

function disableTextAreaElements(task) {
  let textAreaFields = task.querySelectorAll("textarea");
  textAreaFields.forEach((textArea) => {
    textArea.disabled = true;
  });
}

function disablePriorityBtns(task) {
  let priorityBtns = task.querySelectorAll(".priority-btn");
  priorityBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function disableProjectInputs(task) {
  let projectFields = task.querySelectorAll(".project-field");
  projectFields.forEach((field) => {
    field.disabled = true;
  });
}

function selectTaskTitle(task) {
  const taskTitle = task.querySelector(".task-title");
  taskTitle.select();
}

function deselectTaskTitle(task) {
  const taskTitle = task.querySelector(".task-title");
  taskTitle.focus();
  taskTitle.setSelectionRange(0, 0);
}

function selectLatestTaskTitle() {
  let numberOfTasks = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary).length;
  const tasks = document.querySelectorAll(".task");
  const latestTaskElement = tasks[numberOfTasks - 1];
  selectTaskTitle(latestTaskElement);
}

function setPriorityStyling() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    let highPriorityBtn = task.querySelector(".high-priority-btn");
    let mediumPriorityBtn = task.querySelector(".medium-priority-btn");
    let lowPriorityBtn = task.querySelector(".low-priority-btn");

    ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[index].highPriority
      ? highPriorityBtn.classList.add("priority-styling")
      : highPriorityBtn.classList.remove("priority-styling");

    ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[index].mediumPriority
      ? mediumPriorityBtn.classList.add("priority-styling")
      : mediumPriorityBtn.classList.remove("priority-styling");

    ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getTasks)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.taskLibrary)[index].lowPriority
      ? lowPriorityBtn.classList.add("priority-styling")
      : lowPriorityBtn.classList.remove("priority-styling");
  });
}

function disableAllEditBtns() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const editBtn = task.querySelector(".edit-btn");
    editBtn.disabled = true;
  });
}

function reloadProjectInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    removeAllProjectInputs(task);
    loadAllProjectInputs(task);
  });
}

function removeAllProjectInputs(task) {
  const projectInput = task.querySelector(".project-field");
  while (projectInput.firstChild) {
    projectInput.removeChild(projectInput.firstChild);
  }
}

function loadAllProjectInputs(task) {
  const projectInput = task.querySelector(".project-field");
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray).forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.textContent = project;
    projectInput.appendChild(projectOption);
  });
}

function createProjectHeader(projectName) {
  removeProjectHeader();

  const tasksPane = document.querySelector(".tasks");

  const projectHeaderContainer = document.createElement("div");
  const projectHeaderBtnContainer = document.createElement("div");
  const projectHeader = document.createElement("input");

  projectHeaderContainer.classList.toggle("project-header-container");
  projectHeaderBtnContainer.classList.toggle("project-header-btn-container");
  projectHeader.classList.toggle("project-header");

  projectHeader.value = projectName;
  projectHeader.disabled = true;

  projectHeaderContainer.appendChild(projectHeader);
  projectHeaderBtnContainer.appendChild(createRenameProjectBtn());
  projectHeaderBtnContainer.appendChild(createDeleteProjectBtn());
  projectHeaderContainer.appendChild(projectHeaderBtnContainer);
  tasksPane.insertBefore(projectHeaderContainer, tasksPane.firstChild);
}

function removeProjectHeader() {
  const tasksPane = document.querySelector(".tasks");
  if (tasksPane.querySelector(".project-header-container")) {
    const projectHeader = tasksPane.querySelector(".project-header-container");
    projectHeader.remove();
  }
}

function createRenameProjectBtn() {
  const renameProjectBtn = document.createElement("button");
  renameProjectBtn.classList.toggle("rename-project-btn");
  renameProjectBtn.classList.toggle("project-header-editing");
  return renameProjectBtn;
}

function createSetProjectBtn() {
  const setProjectBtn = document.createElement("button");
  setProjectBtn.classList.toggle("set-project-btn");
  setProjectBtn.classList.toggle("project-header-editing");
  return setProjectBtn;
}

function createDeleteProjectBtn() {
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.toggle("delete-project-btn");
  return deleteProjectBtn;
}

function swapProjectHeaderBtn(btn) {
  btn.classList.contains("set-project-btn")
    ? swapSetProjectBtn(btn)
    : swapRenameProjectBtn(btn);
}

function swapSetProjectBtn(setProjectBtnContainer) {
  const parentContainer = setProjectBtnContainer.closest(
    ".project-header-btn-container"
  );
  parentContainer.replaceChild(
    createRenameProjectBtn(),
    setProjectBtnContainer
  );
}

function swapRenameProjectBtn(renameProjectBtnContainer) {
  const parentContainer = renameProjectBtnContainer.closest(
    ".project-header-btn-container"
  );
  parentContainer.replaceChild(
    createSetProjectBtn(),
    renameProjectBtnContainer
  );
}

function renderProjectHeaderEditable() {
  const projectContainer = document.querySelector(".project-header-container");
  const projectHeaderBtn = projectContainer.querySelector(
    ".project-header-editing"
  );
  if (projectContainer.querySelector(".rename-project-btn")) {
    swapProjectHeaderBtn(projectHeaderBtn);
  } else if (projectContainer.querySelector(".set-project-btn")) {
    swapProjectHeaderBtn(projectHeaderBtn);
  }
}

function enableProjectHeader() {
  const projectHeaderContainer = document.querySelector(
    ".project-header-container"
  );
  const projectHeader = document.querySelector(".project-header");
  if (projectHeaderContainer.querySelector(".set-project-btn")) {
    projectHeader.disabled = false;
  }
}

function disableProjectHeader() {
  const projectHeaderContainer = document.querySelector(
    ".project-header-container"
  );
  const projectHeader = document.querySelector(".project-header");
  if (projectHeaderContainer.querySelector(".rename-project-btn")) {
    projectHeader.disabled = true;
  }
}

//TASKBAR RELATED

const projectsContainer = document.querySelector(".projects-todo");

function renderProjects() {
  cleanProjects();
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getProjects)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.projectsArray).forEach((project) => {
    createProject(project);
  });
}

function cleanProjects() {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    projectsContainer.removeChild(project);
  });
}

function createProject(projectName) {
  const projectItemContainer = document.createElement("div");
  projectItemContainer.classList.toggle("project-item");
  const project = document.createElement("button");
  project.textContent = projectName;
  project.classList.toggle("project");
  project.classList.toggle("taskbar-btn");
  projectItemContainer.appendChild(project);
  projectsContainer.appendChild(projectItemContainer);
}

function addActivatedProjectStyle(index) {
  const projectElements = document.querySelectorAll(".project");
  if (index) {
    projectElements[index - 1].classList.add("taskbar-btn-activate");
  }
}

//NOTES RELATED

function renderNotes() {
  if (document.querySelector(".task")) {
    cleanTasks();
  }
  if (document.querySelector(".add-note-btn")) {
    cleanAddNoteBtn();
  }
  removeProjectHeader();
  cleanNotes();
  appendAddNoteBtn();
  ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary).forEach((item) => {
    createNote(item);
  });
  disableAllNoteEditBtns();
}

function appendAddNoteBtn() {
  const addBtn = document.createElement("button");

  const svgString = `<svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              class="add-note-logo"
            >
              <path
                d="m54.168 37.5v8.332h8.332c2.3047 0 4.168 1.8633 4.168 4.168s-1.8633 4.168-4.168 4.168h-8.332v8.332c0 2.3047-1.8633 4.168-4.168 4.168s-4.168-1.8633-4.168-4.168v-8.332h-8.332c-2.3047 0-4.168-1.8633-4.168-4.168s1.8633-4.168 4.168-4.168h8.332v-8.332c0-2.3047 1.8633-4.168 4.168-4.168s4.168 1.8633 4.168 4.168zm-38.668 1.9961c1.082 0 2.168-0.41406 2.918-1.207 0.78906-0.75 1.2461-1.832 1.2461-2.957 0-1.082-0.46094-2.1641-1.25-2.9141-1.5-1.5859-4.332-1.5859-5.875 0-0.79297 0.75-1.207 1.832-1.207 2.9141 0 1.1289 0.41406 2.2109 1.207 2.957 0.75 0.79297 1.8359 1.207 2.9609 1.207zm20.457-20.078c1.082 0 2.1641-0.46094 2.918-1.2539 0.78906-0.75 1.25-1.832 1.25-2.957 0-1.082-0.46094-2.1641-1.207-2.9141-1.543-1.543-4.332-1.5859-5.918 0-0.79297 0.78906-1.207 1.832-1.207 2.9141 0 1.1289 0.41406 2.2109 1.207 2.957 0.78906 0.79297 1.875 1.2539 2.957 1.2539zm-12.457 8.2461c1.082 0 2.168-0.45703 2.918-1.25 0.79297-0.75 1.25-1.8359 1.25-2.918 0-1.125-0.45703-2.2109-1.25-2.957-1.543-1.543-4.332-1.582-5.875 0-0.79297 0.79297-1.2109 1.8359-1.2109 2.9609 0 1.082 0.41797 2.168 1.207 2.918 0.75 0.79297 1.8359 1.2461 2.9609 1.2461zm55.898 51.832c0.015624-0.015625 0.042968-0.023438 0.058593-0.039063s0.023438-0.042969 0.039063-0.058593c7.5156-7.543 12.172-17.938 12.172-29.398 0-5.4883-1.0938-10.723-3.0312-15.523-0.027344-0.074218-0.050781-0.14453-0.078125-0.21875-2.1055-5.1367-5.1953-9.7734-9.0547-13.645-0.019531-0.019531-0.027344-0.050781-0.046875-0.070312s-0.046875-0.023438-0.066406-0.042969c-7.543-7.5156-17.934-12.168-29.391-12.168-0.96875 0-1.8164 0.38281-2.5234 0.93359-0.13672 0.10156-0.30859 0.15234-0.43359 0.27344-0.19531 0.20313-0.30859 0.46875-0.46094 0.70703-0.43359 0.66406-0.75 1.4062-0.75 2.2539 0 0.85547 0.32031 1.6055 0.76172 2.2656 0.14844 0.23438 0.25781 0.49219 0.44922 0.69141 0.19531 0.1875 0.45312 0.29297 0.68359 0.44141 0.66016 0.44531 1.4141 0.76953 2.2734 0.76953 18.379 0 33.332 14.953 33.332 33.332s-14.953 33.332-33.332 33.332-33.332-14.953-33.332-33.332c0-0.5625-0.11328-1.1055-0.32422-1.6055-0.0625-0.15234-0.18359-0.26172-0.26172-0.40234-0.18359-0.33203-0.35938-0.67188-0.62109-0.94922-0.15234-0.15234-0.35938-0.21875-0.53125-0.33984-0.69141-0.51172-1.5039-0.87109-2.4297-0.87109s-1.7383 0.35938-2.4297 0.87109c-0.17187 0.12109-0.37891 0.1875-0.53125 0.33984-0.28516 0.29688-0.47656 0.66016-0.66797 1.0195-0.0625 0.11719-0.16406 0.20703-0.21484 0.32812-0.20703 0.5-0.32422 1.043-0.32422 1.6094 0 5.4961 1.0938 10.734 3.0391 15.543 0.019531 0.054687 0.035156 0.10938 0.058594 0.16406 2.1055 5.1484 5.1953 9.793 9.0586 13.676 0.023438 0.019532 0.027344 0.054688 0.050781 0.074219 0.019532 0.023438 0.050782 0.027344 0.074219 0.050781 3.7266 3.7109 8.1523 6.7227 13.059 8.8203 0.050781 0.023437 0.09375 0.046875 0.14844 0.070313 4.9766 2.1016 10.445 3.2695 16.18 3.2695 5.4531 0 10.648-1.082 15.426-2.9961 0.10547-0.039063 0.20703-0.066406 0.3125-0.11328 5.1406-2.1094 9.7812-5.1992 13.66-9.0625z"
              /></svg
            ><strong>Note</strong>`;

  addBtn.classList.toggle("add-note-btn");
  addBtn.innerHTML = svgString;
  tasksContainer.appendChild(addBtn);
}

function cleanAddNoteBtn() {
  const addNoteBtn = document.querySelector(".add-note-btn");
  if (addNoteBtn) {
    tasksContainer.removeChild(addNoteBtn);
  }
}

function cleanNotes() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    tasksContainer.removeChild(note);
  });
}

function createNote(note) {
  const noteElement = document.createElement("div");
  noteElement.appendChild(createNoteEditBtn());
  noteElement.appendChild(createNoteDeleteBtn());
  noteElement.appendChild(createNoteTitle(note));
  noteElement.appendChild(createNoteDescription(note));
  noteElement.classList.toggle("note");
  tasksContainer.appendChild(noteElement);
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.scrollAuto)(noteElement);
}

function createNoteTitle(note) {
  const noteTitleContainer = document.createElement("div");
  const noteTitle = document.createElement("input");
  noteTitle.setAttribute("value", note.noteTitle);
  noteTitle.classList.toggle("note-title");
  noteTitle.disabled = true;
  noteTitleContainer.classList.toggle("note-title-container");
  noteTitleContainer.appendChild(noteTitle);
  return noteTitleContainer;
}

function createNoteDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.classList.toggle("note-done-btn");
  doneBtn.classList.add("note-editing");
  return doneBtn;
}

function createNoteEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.classList.toggle("note-edit-btn");
  editBtn.classList.add("note-editing");
  return editBtn;
}

function createNoteDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.toggle("note-delete-btn");
  return deleteBtn;
}

function createNoteDescription(note) {
  const noteDescriptionContainer = document.createElement("div");
  const noteDescription = document.createElement("textarea");
  noteDescription.innerHTML = note.noteDescription;
  noteDescription.setAttribute("rows", "3");
  noteDescription.setAttribute("cols", "20");
  noteDescription.setAttribute("placeholder", "Describe your note...");
  noteDescription.disabled = true;
  noteDescription.classList.toggle("note-description");
  noteDescriptionContainer.classList.toggle("note-description-container");
  noteDescriptionContainer.appendChild(noteDescription);
  return noteDescriptionContainer;
}

function swapNoteBtns(btn) {
  btn.classList.contains("note-done-btn")
    ? swapNoteDoneBtn(btn)
    : swapNoteEditBtn(btn);
}

function swapNoteDoneBtn(doneBtn) {
  const note = doneBtn.closest(".note");
  doneBtn.remove();
  note.prepend(createNoteEditBtn());
}

function swapNoteEditBtn(editBtn) {
  const note = editBtn.closest(".note");
  editBtn.remove();
  note.prepend(createNoteDoneBtn());
}

function renderNotesEditable() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note, index) => {
    const noteBtn = note.querySelector(".note-editing");
    if (((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary)[index].editFlag === true) {
      if (note.querySelector(".note-edit-btn")) {
        swapNoteBtns(noteBtn);
      }
    } else if (((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary)[index].editFlag === false) {
      if (note.querySelector(".note-done-btn")) {
        swapNoteBtns(noteBtn);
      }
    }
  });
}

function renderLatestNoteEditable() {
  const notes = document.querySelectorAll(".note");
  let numberOfNotes = notes.length;
  (0,_barrel__WEBPACK_IMPORTED_MODULE_0__.setNoteEditFlag)(true, numberOfNotes - 1);
}

function enableNoteInputs() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    if (note.querySelector(".note-done-btn")) {
      enableNoteInputElements(note);
      enableNoteTextareaElements(note);
    }
  });
}

function disableNoteInputs() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    if (note.querySelector(".note-edit-btn")) {
      disableNoteInputElements(note);
      disableNoteTextAreaElements(note);
    }
  });
}

function enableNoteInputElements(note) {
  let inputFields = note.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enableNoteTextareaElements(note) {
  let inputFields = note.querySelectorAll("textarea");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function disableNoteInputElements(note) {
  let inputFields = note.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = true;
  });
}

function disableNoteTextAreaElements(note) {
  let textAreaFields = note.querySelectorAll("textarea");
  textAreaFields.forEach((textArea) => {
    textArea.disabled = true;
  });
}

function selectNoteTitle(note) {
  const noteTitle = note.querySelector(".note-title");
  noteTitle.select();
}

function deselectNoteTitle(note) {
  const noteTitle = note.querySelector(".note-title");
  noteTitle.focus();
  noteTitle.setSelectionRange(0, 0);
}

function selectLatestNoteTitle() {
  let numberOfNotes = ((0,_barrel__WEBPACK_IMPORTED_MODULE_0__.getNotes)() || _barrel__WEBPACK_IMPORTED_MODULE_0__.notesLibrary).length;
  const notes = document.querySelectorAll(".note");
  const latestNoteElement = notes[numberOfNotes - 1];
  selectNoteTitle(latestNoteElement);
}

function disableAllNoteEditBtns() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    const editBtn = note.querySelector(".note-edit-btn");
    editBtn.disabled = true;
  });
}

//STYLING

function removeTaskbarBtnActivation() {
  const taskbarBtns = document.querySelectorAll(".taskbar-btn");
  taskbarBtns.forEach((btn) => {
    btn.classList.remove("taskbar-btn-activate");
  });
}

function addTaskbarBtnActivation(btn) {
  btn.classList.add("taskbar-btn-activate");
}

function activateTaskbarBtn(btn) {
  removeTaskbarBtnActivation();
  addTaskbarBtnActivation(btn);
}


/***/ }),

/***/ "./src/images/delete-logo.svg":
/*!************************************!*\
  !*** ./src/images/delete-logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa3b357cdaa439bb5706.svg";

/***/ }),

/***/ "./src/images/done-logo.svg":
/*!**********************************!*\
  !*** ./src/images/done-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd7f38b68b8325010fad.svg";

/***/ }),

/***/ "./src/images/edit-logo.svg":
/*!**********************************!*\
  !*** ./src/images/edit-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e78b50e2772d57eb1e80.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_modern_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/modern-normalize.css */ "./src/styles/modern-normalize.css");
/* harmony import */ var _barrel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barrel */ "./src/barrel.js");




if (!(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)()) {
  alert(
    "Please enable local storage in your browser or exit private browsing to proceed with using this application effectively."
  );
}

(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();

const tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add-task");
const everythingBtn = document.querySelector(".everything-btn");
const todayBtn = document.querySelector(".today-btn");
const upcomingBtn = document.querySelector(".upcoming-btn");
const addProjectBtn = document.querySelector(".add-project-btn");
const taskBar = document.querySelector(".taskbar");
const notesBtn = document.querySelector(".notes-btn");

(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)(tasksContainer);
(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn)(everythingBtn);

everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.revertTaskLibrary);
everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks);
everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable);
everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs);
everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.removeProjectHeader);
everythingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop.bind(null, tasksContainer));
everythingBtn.addEventListener(
  "click",
  _barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn.bind(null, everythingBtn)
);
everythingBtn.click(); //To load alltasks by default upon reload

todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.loadTodaysTasks);
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks);
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable);
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs);
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.removeProjectHeader);
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop.bind(null, tasksContainer));
todayBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn.bind(null, todayBtn));

upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.loadThisWeeksTasks);
upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks);
upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable);
upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs);
upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.removeProjectHeader);
upcomingBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop.bind(null, tasksContainer));
upcomingBtn.addEventListener(
  "click",
  _barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn.bind(null, upcomingBtn)
);

// Add tasks
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.revertTaskLibrary);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.addTask.bind(null, "New Task"));
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderLatestTaskEditable);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.selectLatestTaskTitle);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.removeProjectHeader);
addBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn.bind(null, everythingBtn));

//Delete temporary tasks
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("delete-btn") ||
    event.target.classList.contains("finish-task-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deleteTemporaryTask)(event.target);
  }
});

//Delete tasks
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("delete-btn") ||
    event.target.classList.contains("finish-task-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)(tasksContainer);
  }
});

//Save tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    const projectField = task.querySelector(".project-field");
    const dueDateField = task.querySelector(".date-picker");
    const taskDescriptionField = task.querySelector(".task-description");
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.saveTask)(
      event.target,
      taskTitle.value,
      projectField.value,
      dueDateField.value,
      taskDescriptionField.value
    );
  }
});

//Deselect task title
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const editingBtns = document.querySelectorAll(".task-editing");
    const tasks = document.querySelectorAll(".task");
    const btnIndex = Array.prototype.indexOf.call(editingBtns, event.target);
    const task = tasks[btnIndex];
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deselectTaskTitle)(task);
  }
  if (event.target.classList.contains("edit-btn")) {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deselectTaskTitle)(task);
    });
  }
});

//Set edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const taskBtns = document.querySelectorAll(".task-editing");
    const btnIndex = Array.prototype.indexOf.call(taskBtns, event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.setEditFlag)(true, btnIndex);
  }
});

//Un-set edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const taskBtns = document.querySelectorAll(".task-editing");
    const btnIndex = Array.prototype.indexOf.call(taskBtns, event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.setEditFlag)(false, btnIndex);
  }
});

//Swap done and edit buttons
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("done-btn") ||
    event.target.classList.contains("edit-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.disableInputs)();
  } else if (
    event.target.classList.contains("set-project-btn") ||
    event.target.classList.contains("rename-project-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderProjectHeaderEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableProjectHeader)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.disableProjectHeader)();
  }
});

//Set priority flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("priority-btn")) {
    const tasks = document.querySelectorAll(".task");
    const thisTask = event.target.closest(".task");
    const taskIndex = Array.prototype.indexOf.call(tasks, thisTask);
    if (event.target.classList.contains("high-priority-btn")) {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.togglePriority)("highPriority", taskIndex);
    } else if (event.target.classList.contains("medium-priority-btn")) {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.togglePriority)("mediumPriority", taskIndex);
    } else {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.togglePriority)("lowPriority", taskIndex);
    }
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("priority-btn")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.setPriorityStyling)();
  }
});

tasksContainer.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("task")) {
    const thisTask = event.target;
    if (thisTask.querySelector(".edit-btn")) {
      const editBtn = thisTask.querySelector(".edit-btn");
      if ((0,_barrel__WEBPACK_IMPORTED_MODULE_2__.findTaskEditingStatus)()) {
        editBtn.disabled = true;
      } else {
        editBtn.disabled = false;
      }
    }
  }
});

//Sort tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.sortTaskLibrary)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
  }
});

tasksContainer.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("edit-btn") && !(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.findTaskEditingStatus)()) {
    event.target.disabled = false;
  }
});

addProjectBtn.addEventListener("click", () => {
  let numberOfProjects = (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.findNumberOfProjects)();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.addProject)(`Project #${numberOfProjects + 1}`);
});

addProjectBtn.addEventListener("click", () => {
  let activatedProjectIndex = (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.findActivatedProjectIndex)();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
  (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.addActivatedProjectStyle)(activatedProjectIndex);
});

//Refresh projects list of inputs
addProjectBtn.addEventListener("click", () => {
  (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.reloadProjectInputs)();
});

addProjectBtn.addEventListener("click", () => {
  (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.addActivatedProjectStyle)();
});

taskBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("project")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.createProjectHeader)(event.target.innerText);
  }
});

taskBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("project")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.loadProjectTasks)(event.target.innerText);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)(tasksContainer);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn)(event.target);
  }
});

let oldProjectName;

//Save project name
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("rename-project-btn")) {
    const projectTitleElement = document.querySelector(".project-header");
    oldProjectName = projectTitleElement.value;
  }
  if (event.target.classList.contains("set-project-btn")) {
    const projectTitleElement = document.querySelector(".project-header");
    let newProjectName = projectTitleElement.value;
    if (!(0,_barrel__WEBPACK_IMPORTED_MODULE_2__.checkProjectExists)(newProjectName)) {
      //Save project only if project does not already exist
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.saveProjectName)(oldProjectName, newProjectName);
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.updateProjectsInTaskLibrary)(oldProjectName, newProjectName);
    } else {
      projectTitleElement.value = oldProjectName;
    }
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("set-project-btn")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    if (tasksContainer.querySelector(".project-header")) {
      const projectTitleElement =
        tasksContainer.querySelector(".project-header");
      let projectTitle = projectTitleElement.value;
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.loadProjectTasks)(projectTitle);
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs)();
    }
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-project-btn")) {
    const container = event.target.closest(".project-header-container");
    const projectName = container.querySelector(".project-header").value;
    if ((0,_barrel__WEBPACK_IMPORTED_MODULE_2__.checkMoreThanOneProject)()) {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(projectName);
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderTasksEditable)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableInputs)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.removeProjectHeader)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)(tasksContainer);
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.reloadProjectInputs)();
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn)(everythingBtn);
    }
  }
});

//NOTES RELATED

notesBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotes);
notesBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.scrollToTop.bind(null, tasksContainer));
notesBtn.addEventListener("click", _barrel__WEBPACK_IMPORTED_MODULE_2__.activateTaskbarBtn.bind(null, notesBtn));

tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("add-note-btn") ||
    event.target.closest(".add-note-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.addNote)("New Note");
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotes)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderLatestNoteEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotesEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableNoteInputs)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.selectLatestNoteTitle)();
  }
});

//Delete notes
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-delete-btn")) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deleteNote)(event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotes)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotesEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableNoteInputs)();
  }
});

//Save notes
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-done-btn")) {
    const note = event.target.closest(".note");
    const noteTitle = note.querySelector(".note-title");
    const noteDescriptionField = note.querySelector(".note-description");
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.saveNote)(event.target, noteTitle.value, noteDescriptionField.value);
  }
});

//Deselect note title
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-done-btn")) {
    const editingBtns = document.querySelectorAll(".note-editing");
    const notes = document.querySelectorAll(".note");
    const btnIndex = Array.prototype.indexOf.call(editingBtns, event.target);
    const note = notes[btnIndex];
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deselectNoteTitle)(note);
  }
  if (event.target.classList.contains("note-edit-btn")) {
    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
      (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.deselectNoteTitle)(note);
    });
  }
});

//Set note edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-edit-btn")) {
    const noteBtns = document.querySelectorAll(".note-editing");
    const btnIndex = Array.prototype.indexOf.call(noteBtns, event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.setNoteEditFlag)(true, btnIndex);
  }
});

//Un-set note edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-done-btn")) {
    const noteBtns = document.querySelectorAll(".note-editing");
    const btnIndex = Array.prototype.indexOf.call(noteBtns, event.target);
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.setNoteEditFlag)(false, btnIndex);
  }
});

//Swap note's done and edit buttons
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("note-done-btn") ||
    event.target.classList.contains("note-edit-btn")
  ) {
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.renderNotesEditable)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.enableNoteInputs)();
    (0,_barrel__WEBPACK_IMPORTED_MODULE_2__.disableNoteInputs)();
  }
});

tasksContainer.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("note")) {
    const thisNote = event.target;
    if (thisNote.querySelector(".note-edit-btn")) {
      const editBtn = thisNote.querySelector(".note-edit-btn");
      if ((0,_barrel__WEBPACK_IMPORTED_MODULE_2__.findNoteEditingStatus)()) {
        editBtn.disabled = true;
      } else {
        editBtn.disabled = false;
      }
    }
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxjQUFjLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGNBQWMsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1B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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsb0RBQVcsTUFBTSxrREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpREFBUSxNQUFNLGdEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sVUFBVSxpREFBUSxNQUFNLGdEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVc7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsaURBQVEsTUFBTSxnREFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSyxpREFBUSxNQUFNLGdEQUFXO0FBQzlCO0FBQ0E7O0FBRUEsS0FBSyxpREFBUSxNQUFNLGdEQUFXO0FBQzlCO0FBQ0E7O0FBRUEsS0FBSyxpREFBUSxNQUFNLGdEQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxvREFBVyxNQUFNLGtEQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLG9EQUFXLE1BQU0sa0RBQWE7QUFDakM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpREFBUSxNQUFNLGlEQUFZO0FBQzdCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlEQUFRLE1BQU0saURBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxVQUFVLGlEQUFRLE1BQU0saURBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBZTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdB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OztBQUVBLG1DQUFtQyxnREFBVztBQUM5QyxtQ0FBbUMsZ0RBQVc7QUFDOUMsbUNBQW1DLHVEQUFrQjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWCxJQUFJLG9EQUFXO0FBQ2YsSUFBSSxpRUFBd0I7QUFDNUIsSUFBSSw0REFBbUI7QUFDdkIsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSw4REFBcUI7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZCxJQUFJLG9EQUFXO0FBQ2YsSUFBSSw0REFBbUI7QUFDdkIsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQWlCO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWU7QUFDbkI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFlO0FBQ25CO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QixJQUFJLHlEQUFnQjtBQUNwQixJQUFJLDBEQUFpQjtBQUNyQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOERBQXFCO0FBQy9CO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbW9kZXJuLW5vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbW9kZXJuLW5vcm1hbGl6ZS5jc3M/MDU2OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JhcnJlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25vdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay1saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2Mi4wLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xuXG4vKlxuRG9jdW1lbnRcbj09PT09PT09XG4qL1xuXG4vKipcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcblx0LyogSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMykgKi9cblx0Zm9udC1mYW1pbHk6XG5cdFx0c3lzdGVtLXVpLFxuXHRcdCdTZWdvZSBVSScsXG5cdFx0Um9ib3RvLFxuXHRcdEhlbHZldGljYSxcblx0XHRBcmlhbCxcblx0XHRzYW5zLXNlcmlmLFxuXHRcdCdBcHBsZSBDb2xvciBFbW9qaScsXG5cdFx0J1NlZ29lIFVJIEVtb2ppJztcblx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy4gKi9cblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy4gKi9cblx0LW1vei10YWItc2l6ZTogNDsgLyogMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLiAqL1xuXHR0YWItc2l6ZTogNDsgLyogMyAqL1xufVxuXG4vKlxuU2VjdGlvbnNcbj09PT09PT09XG4qL1xuXG5ib2R5IHtcblx0bWFyZ2luOiAwOyAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuICovXG59XG5cbi8qXG5Hcm91cGluZyBjb250ZW50XG49PT09PT09PT09PT09PT09XG4qL1xuXG4vKipcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuKi9cblxuaHIge1xuXHRoZWlnaHQ6IDA7IC8qIDEgKi9cblx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcblRleHQtbGV2ZWwgc2VtYW50aWNzXG49PT09PT09PT09PT09PT09PT09PVxuKi9cblxuLyoqXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnJbdGl0bGVdIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuXHRmb250LWZhbWlseTpcblx0XHR1aS1tb25vc3BhY2UsXG5cdFx0U0ZNb25vLVJlZ3VsYXIsXG5cdFx0Q29uc29sYXMsXG5cdFx0J0xpYmVyYXRpb24gTW9ubycsXG5cdFx0TWVubG8sXG5cdFx0bW9ub3NwYWNlOyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuXHRmb250LXNpemU6IDc1JTtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuXHRib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG5cdHRvcDogLTAuNWVtO1xufVxuXG4vKlxuVGFidWxhciBkYXRhXG49PT09PT09PT09PT1cbiovXG5cbi8qKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuKi9cblxudGFibGUge1xuXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkZvcm1zXG49PT09PVxuKi9cblxuLyoqXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHRtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuKi9cblxuOjotbW96LWZvY3VzLWlubmVyIHtcblx0Ym9yZGVyLXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5sZWdlbmQge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG5cdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkludGVyYWN0aXZlXG49PT09PT09PT09PVxuKi9cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG5cdGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4RkFBOEY7O0FBRTlGOzs7Q0FHQzs7QUFFRDs7Q0FFQzs7QUFFRDs7O0NBR0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msc0hBQXNIO0NBQ3RIOzs7Ozs7OztrQkFRaUI7Q0FDakIsaUJBQWlCLEVBQUUsZ0RBQWdEO0NBQ25FLDhCQUE4QixFQUFFLDBFQUEwRTtDQUMxRyxnQkFBZ0IsRUFBRSxtREFBbUQ7Q0FDckUsV0FBVyxFQUFFLE1BQU07QUFDcEI7O0FBRUE7OztDQUdDOztBQUVEO0NBQ0MsU0FBUyxFQUFFLHVDQUF1QztBQUNuRDs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBOztDQUVDOztBQUVEOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Ozs7Q0FJQzs7Ozs7O1dBTVUsRUFBRSxNQUFNO0NBQ2xCLGNBQWMsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOztDQUVDOztBQUVEO0NBQ0MsY0FBYztBQUNmOztBQUVBOztDQUVDOztBQUVEOztDQUVDLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDtDQUNDLGNBQWMsRUFBRSxNQUFNO0NBQ3RCLHFCQUFxQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7OztDQUdDOztBQUVEOzs7Q0FHQzs7QUFFRDs7Ozs7Q0FLQyxvQkFBb0IsRUFBRSxNQUFNO0NBQzVCLGVBQWUsRUFBRSxNQUFNO0NBQ3ZCLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsU0FBUyxFQUFFLE1BQU07QUFDbEI7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsb0JBQW9CO0FBQ3JCOztBQUVBOztDQUVDOztBQUVEOzs7O0NBSUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsWUFBWTtBQUNiOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLDZCQUE2QixFQUFFLE1BQU07Q0FDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQywwQkFBMEIsRUFBRSxNQUFNO0NBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3RCOztBQUVBOzs7Q0FHQzs7QUFFRDs7Q0FFQzs7QUFFRDtDQUNDLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2Mi4wLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKSAqL1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy4gKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLiAqL1xcblxcdC1tb3otdGFiLXNpemU6IDQ7IC8qIDMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS4gKi9cXG5cXHR0YWItc2l6ZTogNDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDsgLyogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLiAqL1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZWRpdC1sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZWxldGUtbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZG9uZS1sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZTtcbiAgLS10ZXh0OiAjMGUxNzJjO1xuICAtLXByaW1hcnk6ICNkOWQ0ZTc7XG4gIC0tc2Vjb25kYXJ5OiAjZmVjN2Q3O1xuICAtLXRlcnRpYXJ5OiAjYTc4NmRmO1xuICAtLWhlcm8tZm9udDogXCJTVVNFXCIsIHNhbnMtc2VyaWY7XG4gIC0tcHJpbWFyeS1mb250OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAtLWJvcmRlci1yYWRpdXM6IDAuMTVyZW07XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDhyZW0gMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0cmVtIDFmcjtcbn1cblxuLmhlcm8ge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIHBhZGRpbmc6IDFyZW0gMHJlbSAxcmVtIDJyZW07XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tdGVydGlhcnkpO1xufVxuXG4uaGVyby1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlcm8tZm9udCk7XG59XG5cbi5oZXJvLWNhcHRpb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnBhZ2UtbG9nbyB7XG4gIGZpbGw6IHZhcigtLXRlcnRpYXJ5KTtcbiAgd2lkdGg6IDMuM3JlbTtcbn1cblxuLnRhc2tzIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMnJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuM3JlbSAwLjVyZW0gMC4xcmVtIHZhcigtLXByaW1hcnkpIGluc2V0O1xufVxuXG4udGFzayxcbi5ub3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLWZpcnN0LXNlY3Rpb24sXG4udGFzay1zZWNvbmQtc2VjdGlvbixcbi50YXNrLXRoaXJkLXNlY3Rpb24sXG4udGFzay1mb3VydGgtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRhc2stZmlyc3Qtc2VjdGlvbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4udGFzay1zZWNvbmQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDEwcmVtLCAxZnIpKSBtaW5tYXgoNXJlbSwgMWZyKTtcbiAgd2lkdGg6IDY4cmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi50YXNrLXRoaXJkLXNlY3Rpb24ge1xuICB3aWR0aDogMTVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRhc2stZm91cnRoLXNlY3Rpb24ge1xuICB3aWR0aDogOXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLXRpdGxlLFxuLnByb2plY3QtZmllbGQsXG4udGFzay1kZXNjcmlwdGlvbixcbi5kYXRlLXBpY2tlcixcbi5wcmlvcml0eS1idG4sXG4uZmluaXNoLXRhc2stYnRuLFxuLm5vdGUtdGl0bGUsXG4ubm90ZS1kZXNjcmlwdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXRleHQpO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5kYXRlLXBpY2tlcjplbmFibGVkLFxuLnByb2plY3QtZmllbGQ6ZW5hYmxlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWxbZm9yPVwidGFzay10aXRsZVwiXSxcbmxhYmVsW2Zvcj1cInRhc2stcHJvamVjdFwiXSxcbmxhYmVsW2Zvcj1cInRhc2stZGVzY3JpcHRpb25cIl0sXG5sYWJlbFtmb3I9XCJ0YXNrLWR1ZWRhdGVcIl0sXG4ucHJpb3JpdHktbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG59XG5cbi50YXNrLXRpdGxlLFxuLnByb2plY3QtZmllbGQsXG4uZGF0ZS1waWNrZXIge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uLFxuLm5vdGUtZGVzY3JpcHRpb24ge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi50YXNrLXRpdGxlLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLXRpdGxlOmRpc2FibGVkLFxuLm5vdGUtdGl0bGU6ZGlzYWJsZWQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLXRpdGxlOmRpc2FibGVkLFxuLnByb2plY3QtZmllbGQ6ZGlzYWJsZWQsXG4udGFzay1kZXNjcmlwdGlvbjpkaXNhYmxlZCxcbi5kYXRlLXBpY2tlcjpkaXNhYmxlZCxcbi5ub3RlLXRpdGxlOmRpc2FibGVkLFxuLm5vdGUtZGVzY3JpcHRpb246ZGlzYWJsZWQge1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ucHJvamVjdC1maWVsZDpkaXNhYmxlZCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWlucHV0LWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcbn1cblxuLnByb2plY3QtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lZGl0LWJ0bixcbi5kZWxldGUtYnRuLFxuLmRvbmUtYnRuLFxuLmZpbmlzaC10YXNrLWJ0bixcbi5yZW5hbWUtcHJvamVjdC1idG4sXG4uc2V0LXByb2plY3QtYnRuLFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcbi5ub3RlLWVkaXQtYnRuLFxuLm5vdGUtZG9uZS1idG4sXG4ubm90ZS1kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xufVxuXG4uZWRpdC1idG4sXG4ubm90ZS1lZGl0LWJ0biB7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjdyZW0gMS43cmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5kZWxldGUtYnRuLFxuLm5vdGUtZGVsZXRlLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmRvbmUtYnRuLFxuLm5vdGUtZG9uZS1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5yZW5hbWUtcHJvamVjdC1idG4sXG4uc2V0LXByb2plY3QtYnRuLFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjNyZW0gMS4zcmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zZXQtcHJvamVjdC1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4zcmVtIDEuM3JlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuM3JlbSAxLjNyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtaGVhZGVyLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5cbi5maW5pc2gtdGFzay1idG4ge1xuICBmb250LWZhbWlseTogdmFyKC0taGVyby1mb250KSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0LCBib3JkZXIgMC4ycyBlYXNlLW91dDtcbn1cblxuLmRlbGV0ZS1idG46aG92ZXIsXG4uZWRpdC1idG46aG92ZXIsXG4uZG9uZS1idG46aG92ZXIsXG4uZmluaXNoLXRhc2stYnRuOmhvdmVyLFxuLnJlbmFtZS1wcm9qZWN0LWJ0bjpob3Zlcixcbi5zZXQtcHJvamVjdC1idG46aG92ZXIsXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxuLm5vdGUtZGVsZXRlLWJ0bjpob3Zlcixcbi5ub3RlLWVkaXQtYnRuOmhvdmVyLFxuLm5vdGUtZG9uZS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5maW5pc2gtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXRleHQpO1xufVxuXG4udGFzazpob3ZlciAuZWRpdC1idG4ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkLXRhc2ssXG4uYWRkLW5vdGUtYnRuIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnByaW9yaXR5LWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLnByaW9yaXR5LXN0eWxpbmcge1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tdGVydGlhcnkpO1xufVxuXG4uaGlnaC1wcmlvcml0eS1idG46ZGlzYWJsZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhpZ2gtcHJpb3JpdHktYnRuOmVuYWJsZWQsXG4ubWVkaXVtLXByaW9yaXR5LWJ0bjplbmFibGVkLFxuLmxvdy1wcmlvcml0eS1idG46ZW5hYmxlZCB7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0LCBjb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4uaGlnaC1wcmlvcml0eS1idG46ZW5hYmxlZDpob3Zlcixcbi5tZWRpdW0tcHJpb3JpdHktYnRuOmVuYWJsZWQ6aG92ZXIsXG4ubG93LXByaW9yaXR5LWJ0bjplbmFibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuLmhpZ2gtcHJpb3JpdHktYnRuOmRpc2FibGVkLFxuLm1lZGl1bS1wcmlvcml0eS1idG46ZGlzYWJsZWQsXG4ubG93LXByaW9yaXR5LWJ0bjpkaXNhYmxlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWdoLXByaW9yaXR5LWJ0bjpkaXNhYmxlZC5wcmlvcml0eS1zdHlsaW5nLFxuLm1lZGl1bS1wcmlvcml0eS1idG46ZGlzYWJsZWQucHJpb3JpdHktc3R5bGluZyxcbi5sb3ctcHJpb3JpdHktYnRuOmRpc2FibGVkLnByaW9yaXR5LXN0eWxpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4ucHJvamVjdC1oZWFkZXI6ZGlzYWJsZWQge1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgaGVpZ2h0OiAyLjJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1oZWFkZXI6ZW5hYmxlZCB7XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGhlaWdodDogMi4ycmVtO1xufVxuXG4ubm90ZSB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbn1cblxuLm5vdGUtdGl0bGUtY29udGFpbmVyLFxuLm5vdGUtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuXG4ubm90ZS10aXRsZSxcbi5ub3RlLWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub3RlLWVkaXQtYnRuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm5vdGU6aG92ZXIgLm5vdGUtZWRpdC1idG4ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkLW5vdGUtYnRuIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRhc2tiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5nZW5lcmFsLXRhc2tzLFxuLnByb2plY3RzLXRvZG8sXG4ucHJvamVjdC1pdGVtLFxuLm5vdGVzLWJ0bi1jb250YWluZXIsXG4uYWRkLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2tiYXItYnRuIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi50YXNrYmFyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtc2hhZG93OiAwcmVtIDByZW0gMC4xcmVtIHZhcigtLXByaW1hcnkpO1xufVxuXG4udGFza2Jhci1idG4tYWN0aXZhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LXNoYWRvdzogMHJlbSAwcmVtIDAuMXJlbSB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmFkZC10YXNrLFxuLmFkZC1wcm9qZWN0LWJ0bixcbi5hZGQtbm90ZS1idG4ge1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtIDAuNHJlbSAxcmVtO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFkZC1ub3RlLWJ0biB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQsXG4gICAgdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5hZGQtbm90ZS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5hZGQtbG9nbyxcbi5hZGQtbm90ZS1sb2dvIHtcbiAgd2lkdGg6IDJyZW07XG4gIGZpbGw6IHZhcigtLXRleHQpO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1vdXQsIGZpbHRlciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udGFza2Jhci1idG46aG92ZXIgLmFkZC1sb2dvIHtcbiAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHJlbSAwcmVtIDAuMXJlbSB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi5hZGQtbm90ZS1idG46aG92ZXIgLmFkZC1ub3RlLWxvZ28ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsdUNBQXVDO0VBQ3ZD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QVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsNENBQTRDO0FBQzlDOztBQUVBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Y7MkJBQ3lCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmU7XFxuICAtLXRleHQ6ICMwZTE3MmM7XFxuICAtLXByaW1hcnk6ICNkOWQ0ZTc7XFxuICAtLXNlY29uZGFyeTogI2ZlYzdkNztcXG4gIC0tdGVydGlhcnk6ICNhNzg2ZGY7XFxuICAtLWhlcm8tZm9udDogXFxcIlNVU0VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5LWZvbnQ6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4cmVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTRyZW0gMWZyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbi5oZXJvLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZXJvLWZvbnQpO1xcbn1cXG5cXG4uaGVyby1jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ucGFnZS1sb2dvIHtcXG4gIGZpbGw6IHZhcigtLXRlcnRpYXJ5KTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcblxcbi50YXNrcyB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuM3JlbSAwLjVyZW0gMC4xcmVtIHZhcigtLXByaW1hcnkpIGluc2V0O1xcbn1cXG5cXG4udGFzayxcXG4ubm90ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1maXJzdC1zZWN0aW9uLFxcbi50YXNrLXNlY29uZC1zZWN0aW9uLFxcbi50YXNrLXRoaXJkLXNlY3Rpb24sXFxuLnRhc2stZm91cnRoLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRhc2stZmlyc3Qtc2VjdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLnRhc2stc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxMHJlbSwgMWZyKSkgbWlubWF4KDVyZW0sIDFmcik7XFxuICB3aWR0aDogNjhyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLXRoaXJkLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWZvdXJ0aC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA5cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSxcXG4ucHJvamVjdC1maWVsZCxcXG4udGFzay1kZXNjcmlwdGlvbixcXG4uZGF0ZS1waWNrZXIsXFxuLnByaW9yaXR5LWJ0bixcXG4uZmluaXNoLXRhc2stYnRuLFxcbi5ub3RlLXRpdGxlLFxcbi5ub3RlLWRlc2NyaXB0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uZGF0ZS1waWNrZXI6ZW5hYmxlZCxcXG4ucHJvamVjdC1maWVsZDplbmFibGVkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrLXRpdGxlXFxcIl0sXFxubGFiZWxbZm9yPVxcXCJ0YXNrLXByb2plY3RcXFwiXSxcXG5sYWJlbFtmb3I9XFxcInRhc2stZGVzY3JpcHRpb25cXFwiXSxcXG5sYWJlbFtmb3I9XFxcInRhc2stZHVlZGF0ZVxcXCJdLFxcbi5wcmlvcml0eS1sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctbGVmdDogMC40cmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSxcXG4ucHJvamVjdC1maWVsZCxcXG4uZGF0ZS1waWNrZXIge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbixcXG4ubm90ZS1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50YXNrLXRpdGxlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stdGl0bGU6ZGlzYWJsZWQsXFxuLm5vdGUtdGl0bGU6ZGlzYWJsZWQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stdGl0bGU6ZGlzYWJsZWQsXFxuLnByb2plY3QtZmllbGQ6ZGlzYWJsZWQsXFxuLnRhc2stZGVzY3JpcHRpb246ZGlzYWJsZWQsXFxuLmRhdGUtcGlja2VyOmRpc2FibGVkLFxcbi5ub3RlLXRpdGxlOmRpc2FibGVkLFxcbi5ub3RlLWRlc2NyaXB0aW9uOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucHJvamVjdC1maWVsZDpkaXNhYmxlZCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbn1cXG5cXG4ucHJvamVjdC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGF0ZS1waWNrZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0LWJ0bixcXG4uZGVsZXRlLWJ0bixcXG4uZG9uZS1idG4sXFxuLmZpbmlzaC10YXNrLWJ0bixcXG4ucmVuYW1lLXByb2plY3QtYnRuLFxcbi5zZXQtcHJvamVjdC1idG4sXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bixcXG4ubm90ZS1lZGl0LWJ0bixcXG4ubm90ZS1kb25lLWJ0bixcXG4ubm90ZS1kZWxldGUtYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uZWRpdC1idG4sXFxuLm5vdGUtZWRpdC1idG4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZWRpdC1sb2dvLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEuN3JlbSAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ0bixcXG4ubm90ZS1kZWxldGUtYnRuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGVsZXRlLWxvZ28uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5kb25lLWJ0bixcXG4ubm90ZS1kb25lLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2RvbmUtbG9nby5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnJlbmFtZS1wcm9qZWN0LWJ0bixcXG4uc2V0LXByb2plY3QtYnRuLFxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9lZGl0LWxvZ28uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS4zcmVtIDEuM3JlbTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5zZXQtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9kb25lLWxvZ28uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS4zcmVtIDEuM3JlbTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9kZWxldGUtbG9nby5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjNyZW0gMS4zcmVtO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZpbmlzaC10YXNrLWJ0biB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVyby1mb250KSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCwgYm9yZGVyIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5kZWxldGUtYnRuOmhvdmVyLFxcbi5lZGl0LWJ0bjpob3ZlcixcXG4uZG9uZS1idG46aG92ZXIsXFxuLmZpbmlzaC10YXNrLWJ0bjpob3ZlcixcXG4ucmVuYW1lLXByb2plY3QtYnRuOmhvdmVyLFxcbi5zZXQtcHJvamVjdC1idG46aG92ZXIsXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcixcXG4ubm90ZS1kZWxldGUtYnRuOmhvdmVyLFxcbi5ub3RlLWVkaXQtYnRuOmhvdmVyLFxcbi5ub3RlLWRvbmUtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmZpbmlzaC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmVkaXQtYnRuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGQtdGFzayxcXG4uYWRkLW5vdGUtYnRuIHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcmlvcml0eS1zdHlsaW5nIHtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5LWJ0bjpkaXNhYmxlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHktYnRuOmVuYWJsZWQsXFxuLm1lZGl1bS1wcmlvcml0eS1idG46ZW5hYmxlZCxcXG4ubG93LXByaW9yaXR5LWJ0bjplbmFibGVkIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQsIGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5LWJ0bjplbmFibGVkOmhvdmVyLFxcbi5tZWRpdW0tcHJpb3JpdHktYnRuOmVuYWJsZWQ6aG92ZXIsXFxuLmxvdy1wcmlvcml0eS1idG46ZW5hYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHktYnRuOmRpc2FibGVkLFxcbi5tZWRpdW0tcHJpb3JpdHktYnRuOmRpc2FibGVkLFxcbi5sb3ctcHJpb3JpdHktYnRuOmRpc2FibGVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5LWJ0bjpkaXNhYmxlZC5wcmlvcml0eS1zdHlsaW5nLFxcbi5tZWRpdW0tcHJpb3JpdHktYnRuOmRpc2FibGVkLnByaW9yaXR5LXN0eWxpbmcsXFxuLmxvdy1wcmlvcml0eS1idG46ZGlzYWJsZWQucHJpb3JpdHktc3R5bGluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjplbmFibGVkIHtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxufVxcblxcbi5ub3RlIHtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4ubm90ZS10aXRsZS1jb250YWluZXIsXFxuLm5vdGUtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuXFxuLm5vdGUtdGl0bGUsXFxuLm5vdGUtZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub3RlLWVkaXQtYnRuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ub3RlOmhvdmVyIC5ub3RlLWVkaXQtYnRuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGQtbm90ZS1idG4ge1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50YXNrYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5nZW5lcmFsLXRhc2tzLFxcbi5wcm9qZWN0cy10b2RvLFxcbi5wcm9qZWN0LWl0ZW0sXFxuLm5vdGVzLWJ0bi1jb250YWluZXIsXFxuLmFkZC1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza2Jhci1idG4ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFza2Jhci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICB0ZXh0LXNoYWRvdzogMHJlbSAwcmVtIDAuMXJlbSB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2tiYXItYnRuLWFjdGl2YXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdGV4dC1zaGFkb3c6IDByZW0gMHJlbSAwLjFyZW0gdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5hZGQtdGFzayxcXG4uYWRkLXByb2plY3QtYnRuLFxcbi5hZGQtbm90ZS1idG4ge1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tdGV4dCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW0gMC40cmVtIDFyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFkZC1ub3RlLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0LFxcbiAgICB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmFkZC1ub3RlLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5hZGQtbG9nbyxcXG4uYWRkLW5vdGUtbG9nbyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGZpbGw6IHZhcigtLXRleHQpO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2Utb3V0LCBmaWx0ZXIgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2tiYXItYnRuOmhvdmVyIC5hZGQtbG9nbyB7XFxuICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHJlbSAwcmVtIDAuMXJlbSB2YXIoLS1wcmltYXJ5KSk7XFxufVxcblxcbi5hZGQtbm90ZS1idG46aG92ZXIgLmFkZC1ub3RlLWxvZ28ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kZXJuLW5vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3N0b3JhZ2UuanNcIjtcblxuZXhwb3J0IHtcbiAgcmVuZGVyVGFza3MsXG4gIHN3YXBCdG5zLFxuICBzZWxlY3RMYXRlc3RUYXNrVGl0bGUsXG4gIGRlc2VsZWN0VGFza1RpdGxlLFxuICByZW5kZXJUYXNrc0VkaXRhYmxlLFxuICByZW5kZXJMYXRlc3RUYXNrRWRpdGFibGUsXG4gIGVuYWJsZUlucHV0cyxcbiAgZGlzYWJsZUlucHV0cyxcbiAgc2V0UHJpb3JpdHlTdHlsaW5nLFxuICByZW5kZXJQcm9qZWN0cyxcbiAgcmVsb2FkUHJvamVjdElucHV0cyxcbiAgY3JlYXRlUHJvamVjdEhlYWRlcixcbiAgcmVtb3ZlUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUHJvamVjdEhlYWRlckVkaXRhYmxlLFxuICBlbmFibGVQcm9qZWN0SGVhZGVyLFxuICBkaXNhYmxlUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyTm90ZXMsXG4gIHN3YXBOb3RlQnRucyxcbiAgc2VsZWN0TGF0ZXN0Tm90ZVRpdGxlLFxuICBkZXNlbGVjdE5vdGVUaXRsZSxcbiAgcmVuZGVyTm90ZXNFZGl0YWJsZSxcbiAgcmVuZGVyTGF0ZXN0Tm90ZUVkaXRhYmxlLFxuICBlbmFibGVOb3RlSW5wdXRzLFxuICBkaXNhYmxlTm90ZUlucHV0cyxcbiAgYWN0aXZhdGVUYXNrYmFyQnRuLFxuICBhZGRBY3RpdmF0ZWRQcm9qZWN0U3R5bGUsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvdXNlci1pbnRlcmZhY2UuanNcIjtcblxuZXhwb3J0IHtcbiAgdGFza0ZhY3RvcnksXG4gIHRhc2tMaWJyYXJ5LFxuICB0ZW1wb3JhcnlUYXNrTGlicmFyeSxcbiAgYWRkVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgc2V0RWRpdEZsYWcsXG4gIHRvZ2dsZVByaW9yaXR5LFxuICByZW1vdmVBbGxUYXNrcyxcbiAgbW92ZUFsbFRhc2tzLFxuICByZW1vdmVBbGxUZW1wb3JhcnlUYXNrcyxcbiAgcmV2ZXJ0VGFza0xpYnJhcnksXG4gIHJlbW92ZVRlbXBvcmFyeVRhc2ssXG59IGZyb20gXCIuL2NvbXBvbmVudHMvdGFzay1saWJyYXJ5LmpzXCI7XG5cbmV4cG9ydCB7XG4gIHNjcm9sbEF1dG8sXG4gIHNjcm9sbFRvVG9wLFxuICBkZWxldGVUYXNrLFxuICBkZWxldGVUZW1wb3JhcnlUYXNrLFxuICBzYXZlVGFzayxcbiAgc2V0RGF0ZUxpbWl0LFxuICBmaW5kVGFza0VkaXRpbmdTdGF0dXMsXG4gIHNvcnRUYXNrTGlicmFyeSxcbiAgbG9hZFRvZGF5c1Rhc2tzLFxuICBsb2FkVGhpc1dlZWtzVGFza3MsXG4gIGxvYWRQcm9qZWN0VGFza3MsXG4gIHNhdmVQcm9qZWN0TmFtZSxcbiAgdXBkYXRlUHJvamVjdHNJblRhc2tMaWJyYXJ5LFxuICBjaGVja1Byb2plY3RFeGlzdHMsXG4gIGRlbGV0ZU5vdGUsXG4gIHNhdmVOb3RlLFxuICBmaW5kTm90ZUVkaXRpbmdTdGF0dXMsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGZpbmRBY3RpdmF0ZWRQcm9qZWN0SW5kZXgsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5qc1wiO1xuXG5leHBvcnQge1xuICBwcm9qZWN0c0FycmF5LFxuICBhZGRQcm9qZWN0LFxuICBmaW5kTnVtYmVyT2ZQcm9qZWN0cyxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgY2hlY2tNb3JlVGhhbk9uZVByb2plY3QsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IHtcbiAgbm90ZXNMaWJyYXJ5LFxuICBhZGROb3RlLFxuICByZW1vdmVOb3RlLFxuICBzZXROb3RlRWRpdEZsYWcsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvbm90ZXMuanNcIjtcblxuZXhwb3J0IHtcbiAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgc3RvcmVOb3RlcyxcbiAgZ2V0Tm90ZXMsXG4gIHN0b3JlVGFza3MsXG4gIGdldFRhc2tzLFxuICBzdG9yZVRlbXBvcmFyeVRhc2tzLFxuICBnZXRUZW1wb3JhcnlUYXNrcyxcbiAgc3RvcmVQcm9qZWN0cyxcbiAgZ2V0UHJvamVjdHMsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvc3RvcmFnZS5qc1wiO1xuIiwiaW1wb3J0IHtcbiAgcmVtb3ZlVGFzayxcbiAgdGFza0xpYnJhcnksXG4gIHJlbW92ZUFsbFRhc2tzLFxuICBtb3ZlQWxsVGFza3MsXG4gIHJldmVydFRhc2tMaWJyYXJ5LFxuICByZW1vdmVUZW1wb3JhcnlUYXNrLFxuICByZW1vdmVOb3RlLFxuICBub3Rlc0xpYnJhcnksXG4gIHByb2plY3RzQXJyYXksXG4gIHJlbW92ZVByb2plY3QsXG4gIHN0b3JlTm90ZXMsXG4gIGdldE5vdGVzLFxuICBzdG9yZVRhc2tzLFxuICBnZXRUYXNrcyxcbiAgc3RvcmVQcm9qZWN0cyxcbiAgZ2V0UHJvamVjdHMsXG59IGZyb20gXCIuLi9iYXJyZWxcIjtcblxuZXhwb3J0IHtcbiAgc2Nyb2xsQXV0byxcbiAgc2Nyb2xsVG9Ub3AsXG4gIGRlbGV0ZVRhc2ssXG4gIGRlbGV0ZVRlbXBvcmFyeVRhc2ssXG4gIHNhdmVUYXNrLFxuICBzZXREYXRlTGltaXQsXG4gIGZpbmRUYXNrRWRpdGluZ1N0YXR1cyxcbiAgc29ydFRhc2tMaWJyYXJ5LFxuICBsb2FkVG9kYXlzVGFza3MsXG4gIGxvYWRUaGlzV2Vla3NUYXNrcyxcbiAgbG9hZFByb2plY3RUYXNrcyxcbiAgc2F2ZVByb2plY3ROYW1lLFxuICB1cGRhdGVQcm9qZWN0c0luVGFza0xpYnJhcnksXG4gIGNoZWNrUHJvamVjdEV4aXN0cyxcbiAgZGVsZXRlTm90ZSxcbiAgc2F2ZU5vdGUsXG4gIGZpbmROb3RlRWRpdGluZ1N0YXR1cyxcbiAgZGVsZXRlUHJvamVjdCxcbiAgZmluZEFjdGl2YXRlZFByb2plY3RJbmRleCxcbn07XG5cbmZ1bmN0aW9uIHNjcm9sbEF1dG8oZWxlbWVudCkge1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICBiZWhhdmlvcjogXCJpbnN0YW50XCIsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcChjb250YWluZXIpIHtcbiAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soYnRuKSB7XG4gIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJ0blwiKSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1idG5cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGRlbGV0ZUJ0bnMsIGJ0bik7XG4gICAgcmVtb3ZlVGFzayhkZWxldGVCdG5JbmRleCk7XG4gIH0gZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImZpbmlzaC10YXNrLWJ0blwiKSkge1xuICAgIGNvbnN0IGZpbmlzaEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbmlzaC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBmaW5pc2hCdG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZmluaXNoQnRucywgYnRuKTtcbiAgICByZW1vdmVUYXNrKGZpbmlzaEJ0bkluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUZW1wb3JhcnlUYXNrKGJ0bikge1xuICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1idG5cIikpIHtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0bkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChkZWxldGVCdG5zLCBidG4pO1xuICAgIGNvbnN0IHRhc2sgPSAoZ2V0VGFza3MoKSB8fCB0YXNrTGlicmFyeSlbZGVsZXRlQnRuSW5kZXhdO1xuICAgIHJlbW92ZVRlbXBvcmFyeVRhc2sodGFzayk7XG4gIH0gZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImZpbmlzaC10YXNrLWJ0blwiKSkge1xuICAgIGNvbnN0IGZpbmlzaEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbmlzaC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBmaW5pc2hCdG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZmluaXNoQnRucywgYnRuKTtcbiAgICBjb25zdCB0YXNrID0gKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpW2ZpbmlzaEJ0bkluZGV4XTtcbiAgICByZW1vdmVUZW1wb3JhcnlUYXNrKHRhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrKGRvbmVCdG4sIG5ld1RpdGxlLCBwcm9qZWN0LCBkdWVEYXRlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgY29uc3QgZG9uZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZWRpdGluZ1wiKTtcbiAgY29uc3QgZG9uZUJ0bkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChkb25lQnRucywgZG9uZUJ0bik7XG4gIHRhc2tMaWJyYXJ5W2RvbmVCdG5JbmRleF0udGFza1RpdGxlID0gbmV3VGl0bGU7XG4gIHRhc2tMaWJyYXJ5W2RvbmVCdG5JbmRleF0ucHJvamVjdCA9IHByb2plY3Q7XG4gIHRhc2tMaWJyYXJ5W2RvbmVCdG5JbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRhc2tMaWJyYXJ5W2RvbmVCdG5JbmRleF0udGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xuICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG5cbiAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gIH1cblxuICBpZiAoZGF5Lmxlbmd0aCA8IDIpIHtcbiAgICBkYXkgPSBcIjBcIiArIGRheTtcbiAgfVxuXG4gIGxldCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblxuICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZUxpbWl0KCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGxldCBkdWVEYXRlUGlja2VyID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtcGlja2VyXCIpO1xuICAgIGxldCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheXNEYXRlID0gZm9ybWF0RGF0ZSh0b2RheXNEYXRlKTtcbiAgICBkdWVEYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheXNEYXRlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrRWRpdGluZ1N0YXR1cygpIHtcbiAgcmV0dXJuIChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KS5zb21lKCh0YXNrKSA9PiB0YXNrLmVkaXRGbGFnKTtcbn1cblxuZnVuY3Rpb24gZmluZEhpZ2hQcmlvcml0eVRhc2tzKCkge1xuICByZXR1cm4gKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpLmZpbHRlcigodGFzaykgPT4gdGFzay5oaWdoUHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBmaW5kTWVkaXVtUHJpb3JpdHlUYXNrcygpIHtcbiAgcmV0dXJuIChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KS5maWx0ZXIoKHRhc2spID0+IHRhc2subWVkaXVtUHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBmaW5kTG93UHJpb3JpdHlUYXNrcygpIHtcbiAgcmV0dXJuIChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KS5maWx0ZXIoKHRhc2spID0+IHRhc2subG93UHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBzb3J0SGlnaFByaW9yaXR5VGFza3MoKSB7XG4gIHJldHVybiBmaW5kSGlnaFByaW9yaXR5VGFza3MoKS5zb3J0KChmaXJzdFRhc2ssIG5leHRUYXNrKSA9PlxuICAgIGZpcnN0VGFzay50YXNrVGl0bGUudG9Mb3dlckNhc2UoKSA+IG5leHRUYXNrLnRhc2tUaXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICA/IDFcbiAgICAgIDogLTFcbiAgKTtcbn1cblxuZnVuY3Rpb24gc29ydE1lZGl1bVByaW9yaXR5VGFza3MoKSB7XG4gIHJldHVybiBmaW5kTWVkaXVtUHJpb3JpdHlUYXNrcygpLnNvcnQoKGZpcnN0VGFzaywgbmV4dFRhc2spID0+XG4gICAgZmlyc3RUYXNrLnRhc2tUaXRsZS50b0xvd2VyQ2FzZSgpID4gbmV4dFRhc2sudGFza1RpdGxlLnRvTG93ZXJDYXNlKClcbiAgICAgID8gMVxuICAgICAgOiAtMVxuICApO1xufVxuXG5mdW5jdGlvbiBzb3J0TG93UHJpb3JpdHlUYXNrcygpIHtcbiAgcmV0dXJuIGZpbmRMb3dQcmlvcml0eVRhc2tzKCkuc29ydCgoZmlyc3RUYXNrLCBuZXh0VGFzaykgPT5cbiAgICBmaXJzdFRhc2sudGFza1RpdGxlLnRvTG93ZXJDYXNlKCkgPiBuZXh0VGFzay50YXNrVGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICAgPyAxXG4gICAgICA6IC0xXG4gICk7XG59XG5cbmZ1bmN0aW9uIHB1c2hIaWdoUHJpb3JpdHlUYXNrcyhoaWdoUHJpb3JpdHlUYXNrcykge1xuICBoaWdoUHJpb3JpdHlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hNZWRpdW1Qcmlvcml0eVRhc2tzKG1lZGl1bVByaW9yaXR5VGFza3MpIHtcbiAgbWVkaXVtUHJpb3JpdHlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hMb3dQcmlvcml0eVRhc2tzKGxvd1ByaW9yaXR5VGFza3MpIHtcbiAgbG93UHJpb3JpdHlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzb3J0VGFza0xpYnJhcnkoKSB7XG4gIGxldCBoaWdoUHJpb3JpdHlUYXNrcyA9IHNvcnRIaWdoUHJpb3JpdHlUYXNrcygpO1xuICBsZXQgbWVkaXVtUHJpb3JpdHlUYXNrcyA9IHNvcnRNZWRpdW1Qcmlvcml0eVRhc2tzKCk7XG4gIGxldCBsb3dQcmlvcml0eVRhc2tzID0gc29ydExvd1ByaW9yaXR5VGFza3MoKTtcblxuICByZW1vdmVBbGxUYXNrcygpO1xuICBwdXNoSGlnaFByaW9yaXR5VGFza3MoaGlnaFByaW9yaXR5VGFza3MpO1xuICBwdXNoTWVkaXVtUHJpb3JpdHlUYXNrcyhtZWRpdW1Qcmlvcml0eVRhc2tzKTtcbiAgcHVzaExvd1ByaW9yaXR5VGFza3MobG93UHJpb3JpdHlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2RheXNUYXNrcygpIHtcbiAgbGV0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpO1xuICB0b2RheXNEYXRlID0gZm9ybWF0RGF0ZSh0b2RheXNEYXRlKTtcbiAgcmV2ZXJ0VGFza0xpYnJhcnkoKTtcblxuICBjb25zdCB0b2RheXNUYXNrcyA9IChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICBsZXQgdGFza0RhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgcmV0dXJuIHRhc2tEYXRlID09PSB0b2RheXNEYXRlO1xuICB9KTtcblxuICByZXR1cm4gdG9kYXlzVGFza3M7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2RheXNUYXNrcygpIHtcbiAgbGV0IHRvZGF5c1Rhc2tzID0gZmluZFRvZGF5c1Rhc2tzKCk7XG4gIG1vdmVBbGxUYXNrcygpO1xuICB0b2RheXNUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgfSk7XG4gIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGhpc1dlZWtzVGFza3MoKSB7XG4gIGxldCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcbiAgdG9kYXlzRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICBsZXQgbmV4dFdlZWsgPSBuZXcgRGF0ZSh0b2RheXNEYXRlKTtcbiAgbmV4dFdlZWsuc2V0RGF0ZSh0b2RheXNEYXRlLmdldERhdGUoKSArIDcpO1xuICByZXZlcnRUYXNrTGlicmFyeSgpO1xuICBsZXQgdGhpc1dlZWtzVGFza3MgPSAoZ2V0VGFza3MoKSB8fCB0YXNrTGlicmFyeSkuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgbGV0IHRoaXNEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICByZXR1cm4gdGhpc0RhdGUgPj0gdG9kYXlzRGF0ZSAmJiB0aGlzRGF0ZSA8PSBuZXh0V2VlaztcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXNXZWVrc1Rhc2tzO1xufVxuXG5mdW5jdGlvbiBsb2FkVGhpc1dlZWtzVGFza3MoKSB7XG4gIGxldCB0aGlzV2Vla3NUYXNrcyA9IGZpbmRUaGlzV2Vla3NUYXNrcygpO1xuICBtb3ZlQWxsVGFza3MoKTtcbiAgdGhpc1dlZWtzVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2tMaWJyYXJ5LnB1c2godGFzayk7XG4gIH0pO1xuICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RUYXNrcyhwcm9qZWN0TmFtZSkge1xuICByZXZlcnRUYXNrTGlicmFyeSgpO1xuICBsZXQgcHJvamVjdFRhc2tzID0gKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpLmZpbHRlcihcbiAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZVxuICApO1xuICByZXR1cm4gcHJvamVjdFRhc2tzO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdFRhc2tzKHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0VGFza3MgPSBmaW5kUHJvamVjdFRhc2tzKHByb2plY3ROYW1lKTtcbiAgbW92ZUFsbFRhc2tzKCk7XG4gIHByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgfSk7XG4gIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdE5hbWUob2xkTmFtZSwgbmV3TmFtZSkge1xuICBsZXQgaW5kZXggPSAoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KS5pbmRleE9mKG9sZE5hbWUpO1xuICAoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KVtpbmRleF0gPSBuZXdOYW1lO1xuICBzdG9yZVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzSW5UYXNrTGlicmFyeShvbGROYW1lLCBuZXdOYW1lKSB7XG4gIChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2sucHJvamVjdCA9PT0gb2xkTmFtZSkge1xuICAgICAgdGFzay5wcm9qZWN0ID0gbmV3TmFtZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb2plY3RFeGlzdHMocHJvamVjdE5hbWUpIHtcbiAgcmV0dXJuIChnZXRQcm9qZWN0cygpIHx8IHByb2plY3RzQXJyYXkpLnNvbWUoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QgPT09IHByb2plY3ROYW1lXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgcmV2ZXJ0VGFza0xpYnJhcnkoKTtcbiAgbGV0IHRlbXBBcnJheSA9IGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnk7XG4gIHRlbXBBcnJheSA9IHRlbXBBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCAhPT0gcHJvamVjdE5hbWUpO1xuICByZW1vdmVBbGxUYXNrcygpO1xuICB0ZW1wQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2tMaWJyYXJ5LnB1c2godGFzayk7XG4gIH0pO1xuICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRBY3RpdmF0ZWRQcm9qZWN0SW5kZXgoKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RFbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAocHJvamVjdEVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrYmFyLWJ0bi1hY3RpdmF0ZVwiKSkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTsgLy9TaG91bGQgbm90IHJldHVybiAwIGFzIGpzIHVuZGVyc3RhbmRzIGl0IGFzIGZhbHN5IHZhbHVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gTk9URVMgUkVMQVRFRFxuXG5mdW5jdGlvbiBkZWxldGVOb3RlKGJ0bikge1xuICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGUtZGVsZXRlLWJ0blwiKSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGUtZGVsZXRlLWJ0blwiKTtcbiAgICBjb25zdCBkZWxldGVCdG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZGVsZXRlQnRucywgYnRuKTtcbiAgICByZW1vdmVOb3RlKGRlbGV0ZUJ0bkluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlTm90ZShkb25lQnRuLCBuZXdUaXRsZSwgbm90ZURlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGRvbmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlLWVkaXRpbmdcIik7XG4gIGNvbnN0IGRvbmVCdG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZG9uZUJ0bnMsIGRvbmVCdG4pO1xuICBub3Rlc0xpYnJhcnlbZG9uZUJ0bkluZGV4XS5ub3RlVGl0bGUgPSBuZXdUaXRsZTtcbiAgbm90ZXNMaWJyYXJ5W2RvbmVCdG5JbmRleF0ubm90ZURlc2NyaXB0aW9uID0gbm90ZURlc2NyaXB0aW9uO1xuICBzdG9yZU5vdGVzKG5vdGVzTGlicmFyeSk7XG59XG5cbmZ1bmN0aW9uIGZpbmROb3RlRWRpdGluZ1N0YXR1cygpIHtcbiAgcmV0dXJuIChnZXROb3RlcygpIHx8IG5vdGVzTGlicmFyeSkuc29tZSgobm90ZSkgPT4gbm90ZS5lZGl0RmxhZyk7XG59XG4iLCJleHBvcnQgeyBub3Rlc0xpYnJhcnksIGFkZE5vdGUsIHJlbW92ZU5vdGUsIHNldE5vdGVFZGl0RmxhZyB9O1xuXG5pbXBvcnQgeyBnZXROb3Rlcywgc3RvcmVOb3RlcyB9IGZyb20gXCIuLi9iYXJyZWxcIjtcblxubGV0IG5vdGVzRmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgbm90ZVRpdGxlID0gdGl0bGU7XG4gIGxldCBub3RlRGVzY3JpcHRpb24gPSBcIlwiO1xuICBsZXQgZWRpdEZsYWcgPSBmYWxzZTtcbiAgcmV0dXJuIHsgbm90ZVRpdGxlLCBub3RlRGVzY3JpcHRpb24sIGVkaXRGbGFnIH07XG59O1xuXG5sZXQgZGVmYXVsdE5vdGUgPSBub3Rlc0ZhY3RvcnkoXCJTYW1wbGUgbm90ZVwiKTtcblxubGV0IG5vdGVzTGlicmFyeSA9IGdldE5vdGVzKCkgfHwgW2RlZmF1bHROb3RlXTtcblxuZnVuY3Rpb24gYWRkTm90ZSh0aXRsZSkge1xuICBsZXQgbmV3Tm90ZSA9IG5vdGVzRmFjdG9yeSh0aXRsZSk7XG4gIG5vdGVzTGlicmFyeS5wdXNoKG5ld05vdGUpO1xuICBzdG9yZU5vdGVzKG5vdGVzTGlicmFyeSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vdGUoaW5kZXgpIHtcbiAgbm90ZXNMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XG4gIHN0b3JlTm90ZXMobm90ZXNMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gc2V0QWxsRWRpdEZsYWdzRmFsc2UoKSB7XG4gIG5vdGVzTGlicmFyeS5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgbm90ZS5lZGl0RmxhZyA9IGZhbHNlO1xuICB9KTtcbiAgc3RvcmVOb3Rlcyhub3Rlc0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBzZXROb3RlRWRpdEZsYWcoc3RhdGUsIGluZGV4KSB7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgc2V0QWxsRWRpdEZsYWdzRmFsc2UoKTtcbiAgICBub3Rlc0xpYnJhcnlbaW5kZXhdLmVkaXRGbGFnID0gc3RhdGU7XG4gICAgc3RvcmVOb3Rlcyhub3Rlc0xpYnJhcnkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQcm9qZWN0cywgc3RvcmVQcm9qZWN0cyB9IGZyb20gXCIuLi9iYXJyZWxcIjtcblxuZXhwb3J0IHtcbiAgcHJvamVjdHNBcnJheSxcbiAgYWRkUHJvamVjdCxcbiAgZmluZE51bWJlck9mUHJvamVjdHMsXG4gIHJlbW92ZVByb2plY3QsXG4gIGNoZWNrTW9yZVRoYW5PbmVQcm9qZWN0LFxufTtcblxubGV0IHByb2plY3RzQXJyYXkgPSBnZXRQcm9qZWN0cygpIHx8IFtcIkdlbmVyYWxcIl07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgc3RvcmVQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbn1cblxuZnVuY3Rpb24gZmluZE51bWJlck9mUHJvamVjdHMoKSB7XG4gIHJldHVybiAoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgbGV0IGluZGV4ID0gKGdldFByb2plY3RzKCkgfHwgcHJvamVjdHNBcnJheSkuaW5kZXhPZihwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgc3RvcmVQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tNb3JlVGhhbk9uZVByb2plY3QoKSB7XG4gIGlmICgoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KS5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQge1xuICBzdG9yYWdlQXZhaWxhYmxlLFxuICBzdG9yZU5vdGVzLFxuICBnZXROb3RlcyxcbiAgc3RvcmVUYXNrcyxcbiAgZ2V0VGFza3MsXG4gIHN0b3JlVGVtcG9yYXJ5VGFza3MsXG4gIGdldFRlbXBvcmFyeVRhc2tzLFxuICBzdG9yZVByb2plY3RzLFxuICBnZXRQcm9qZWN0cyxcbn07XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUoKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbXCJsb2NhbFN0b3JhZ2VcIl07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JlVGFza3ModGFza0xpYnJhcnkpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpYnJhcnkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZVRlbXBvcmFyeVRhc2tzKHRlbXBvcmFyeVRhc2tMaWJyYXJ5KSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwidGVtcG9yYXJ5VGFza0xpYnJhcnlcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRlbXBvcmFyeVRhc2tMaWJyYXJ5KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaWJyYXJ5XCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZW1wb3JhcnlUYXNrcygpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcG9yYXJ5VGFza0xpYnJhcnlcIikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JlUHJvamVjdHMocHJvamVjdHNBcnJheSkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVOb3Rlcyhub3Rlc0xpYnJhcnkpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNMaWJyYXJ5XCIsIEpTT04uc3RyaW5naWZ5KG5vdGVzTGlicmFyeSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5vdGVzKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3Rlc0xpYnJhcnlcIikpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBnZXRUYXNrcyxcbiAgZ2V0VGVtcG9yYXJ5VGFza3MsXG4gIHN0b3JlVGFza3MsXG4gIHN0b3JlVGVtcG9yYXJ5VGFza3MsXG59IGZyb20gXCIuLi9iYXJyZWxcIjtcblxuZXhwb3J0IHtcbiAgdGFza0ZhY3RvcnksXG4gIHRhc2tMaWJyYXJ5LFxuICB0ZW1wb3JhcnlUYXNrTGlicmFyeSxcbiAgYWRkVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgcmVtb3ZlVGVtcG9yYXJ5VGFzayxcbiAgc2V0RWRpdEZsYWcsXG4gIHRvZ2dsZVByaW9yaXR5LFxuICByZW1vdmVBbGxUYXNrcyxcbiAgbW92ZUFsbFRhc2tzLFxuICByZW1vdmVBbGxUZW1wb3JhcnlUYXNrcyxcbiAgcmV2ZXJ0VGFza0xpYnJhcnksXG59O1xuXG4vLyBpbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4uL2JhcnJlbFwiO1xuXG5sZXQgdGFza0ZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlO1xuICBsZXQgcHJvamVjdCA9IFwiR2VuZXJhbFwiO1xuICBsZXQgZHVlRGF0ZTtcbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IFwiXCI7XG4gIGxldCBoaWdoUHJpb3JpdHkgPSBmYWxzZTtcbiAgbGV0IG1lZGl1bVByaW9yaXR5ID0gdHJ1ZTtcbiAgbGV0IGxvd1ByaW9yaXR5ID0gZmFsc2U7XG4gIGxldCBlZGl0RmxhZyA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIHRhc2tUaXRsZSxcbiAgICBwcm9qZWN0LFxuICAgIGVkaXRGbGFnLFxuICAgIGR1ZURhdGUsXG4gICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgIGhpZ2hQcmlvcml0eSxcbiAgICBtZWRpdW1Qcmlvcml0eSxcbiAgICBsb3dQcmlvcml0eSxcbiAgfTtcbn07XG5cbmxldCBkZWZhdWx0VGFzayA9IHRhc2tGYWN0b3J5KFwiU2FtcGxlIHRhc2tcIik7XG5sZXQgdGFza0xpYnJhcnkgPSBnZXRUYXNrcygpIHx8IFtkZWZhdWx0VGFza107XG5sZXQgdGVtcG9yYXJ5VGFza0xpYnJhcnkgPSBnZXRUZW1wb3JhcnlUYXNrcygpIHx8IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrKHRpdGxlKSB7XG4gIGxldCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUpO1xuICB0YXNrTGlicmFyeS5wdXNoKG5ld1Rhc2spO1xuICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhpbmRleCkge1xuICB0YXNrTGlicmFyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGVtcG9yYXJ5VGFzayh0YXNrKSB7XG4gIGxldCB0YXNrSW5kZXggPSAoZ2V0VGVtcG9yYXJ5VGFza3MoKSB8fCB0ZW1wb3JhcnlUYXNrTGlicmFyeSkuaW5kZXhPZih0YXNrKTtcbiAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICB0ZW1wb3JhcnlUYXNrTGlicmFyeS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICBzdG9yZVRlbXBvcmFyeVRhc2tzKHRlbXBvcmFyeVRhc2tMaWJyYXJ5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxUYXNrcygpIHtcbiAgdGFza0xpYnJhcnkuc3BsaWNlKDAsIHRhc2tMaWJyYXJ5Lmxlbmd0aCk7XG4gIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxUZW1wb3JhcnlUYXNrcygpIHtcbiAgdGVtcG9yYXJ5VGFza0xpYnJhcnkuc3BsaWNlKDAsIHRlbXBvcmFyeVRhc2tMaWJyYXJ5Lmxlbmd0aCk7XG4gIHN0b3JlVGVtcG9yYXJ5VGFza3ModGVtcG9yYXJ5VGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxFZGl0RmxhZ3NGYWxzZSgpIHtcbiAgdGFza0xpYnJhcnkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suZWRpdEZsYWcgPSBmYWxzZTtcbiAgfSk7XG4gIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBzZXRFZGl0RmxhZyhzdGF0ZSwgaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICBzZXRBbGxFZGl0RmxhZ3NGYWxzZSgpO1xuICAgIHRhc2tMaWJyYXJ5W2luZGV4XS5lZGl0RmxhZyA9IHN0YXRlO1xuICAgIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXRpZXNGYWxzZShpbmRleCkge1xuICB0YXNrTGlicmFyeVtpbmRleF0uaGlnaFByaW9yaXR5ID0gZmFsc2U7XG4gIHRhc2tMaWJyYXJ5W2luZGV4XS5tZWRpdW1Qcmlvcml0eSA9IGZhbHNlO1xuICB0YXNrTGlicmFyeVtpbmRleF0ubG93UHJpb3JpdHkgPSBmYWxzZTtcbiAgc3RvcmVUYXNrcyh0YXNrTGlicmFyeSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByaW9yaXR5KHByaW9yaXR5LCBpbmRleCkge1xuICBzZXRQcmlvcml0aWVzRmFsc2UoaW5kZXgpOyAvL1RvIHNldCBvdGhlciBwcmlvcml0aWVzIGFzIGZhbHNlXG4gIHRhc2tMaWJyYXJ5W2luZGV4XVtwcmlvcml0eV0gPSAhdGFza0xpYnJhcnlbaW5kZXhdW3ByaW9yaXR5XTtcbiAgc3RvcmVUYXNrcyh0YXNrTGlicmFyeSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVBbGxUYXNrcygpIHtcbiAgdGFza0xpYnJhcnkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICghdGVtcG9yYXJ5VGFza0xpYnJhcnkuaW5jbHVkZXModGFzaykpIHtcbiAgICAgIC8vQ2hlY2sgdG8gcHJldmVudCBkdXBsaWNhdGluZyB0YXNrc1xuICAgICAgdGVtcG9yYXJ5VGFza0xpYnJhcnkucHVzaCh0YXNrKTtcbiAgICAgIHN0b3JlVGVtcG9yYXJ5VGFza3ModGVtcG9yYXJ5VGFza0xpYnJhcnkpO1xuICAgIH1cbiAgfSk7XG4gIHJlbW92ZUFsbFRhc2tzKCk7XG4gIHN0b3JlVGFza3ModGFza0xpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiByZXZlcnRUYXNrTGlicmFyeSgpIHtcbiAgaWYgKHRlbXBvcmFyeVRhc2tMaWJyYXJ5Lmxlbmd0aCAhPT0gMCkge1xuICAgIC8vQ2hlY2sgdG8gcHJldmVudCByZW1vdmluZyBhbGwgdGFza3NcbiAgICByZW1vdmVBbGxUYXNrcygpO1xuICAgIHRlbXBvcmFyeVRhc2tMaWJyYXJ5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tMaWJyYXJ5LnB1c2godGFzayk7XG4gICAgfSk7XG4gICAgcmVtb3ZlQWxsVGVtcG9yYXJ5VGFza3MoKTtcbiAgICBzdG9yZVRhc2tzKHRhc2tMaWJyYXJ5KTtcbiAgICBzdG9yZVRlbXBvcmFyeVRhc2tzKHRlbXBvcmFyeVRhc2tMaWJyYXJ5KTtcbiAgfVxufVxuIiwiZXhwb3J0IHtcbiAgcmVuZGVyVGFza3MsXG4gIHN3YXBCdG5zLFxuICBzZWxlY3RMYXRlc3RUYXNrVGl0bGUsXG4gIGRlc2VsZWN0VGFza1RpdGxlLFxuICByZW5kZXJUYXNrc0VkaXRhYmxlLFxuICByZW5kZXJMYXRlc3RUYXNrRWRpdGFibGUsXG4gIGVuYWJsZUlucHV0cyxcbiAgZGlzYWJsZUlucHV0cyxcbiAgc2V0UHJpb3JpdHlTdHlsaW5nLFxuICByZW5kZXJQcm9qZWN0cyxcbiAgcmVsb2FkUHJvamVjdElucHV0cyxcbiAgY3JlYXRlUHJvamVjdEhlYWRlcixcbiAgcmVtb3ZlUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUHJvamVjdEhlYWRlckVkaXRhYmxlLFxuICBlbmFibGVQcm9qZWN0SGVhZGVyLFxuICBkaXNhYmxlUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyTm90ZXMsXG4gIHN3YXBOb3RlQnRucyxcbiAgc2VsZWN0TGF0ZXN0Tm90ZVRpdGxlLFxuICBkZXNlbGVjdE5vdGVUaXRsZSxcbiAgcmVuZGVyTm90ZXNFZGl0YWJsZSxcbiAgcmVuZGVyTGF0ZXN0Tm90ZUVkaXRhYmxlLFxuICBlbmFibGVOb3RlSW5wdXRzLFxuICBkaXNhYmxlTm90ZUlucHV0cyxcbiAgYWN0aXZhdGVUYXNrYmFyQnRuLFxuICBhZGRBY3RpdmF0ZWRQcm9qZWN0U3R5bGUsXG59O1xuaW1wb3J0IHtcbiAgdGFza0xpYnJhcnksXG4gIHNjcm9sbEF1dG8sXG4gIHNldEVkaXRGbGFnLFxuICBzZXREYXRlTGltaXQsXG4gIHByb2plY3RzQXJyYXksXG4gIHNldE5vdGVFZGl0RmxhZyxcbiAgZ2V0Tm90ZXMsXG4gIG5vdGVzTGlicmFyeSxcbiAgZ2V0VGFza3MsXG4gIGdldFByb2plY3RzLFxufSBmcm9tIFwiLi4vYmFycmVsXCI7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIGNsZWFuQWRkTm90ZUJ0bigpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlXCIpKSB7XG4gICAgY2xlYW5Ob3RlcygpO1xuICB9XG4gIGNsZWFuVGFza3MoKTtcbiAgKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVUYXNrKGl0ZW0pO1xuICB9KTtcbiAgc2V0RGF0ZUxpbWl0KCk7XG4gIHNldFByaW9yaXR5U3R5bGluZygpO1xuICBkaXNhYmxlQWxsRWRpdEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5UYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aGlyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb3VydGhTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhc2tcIik7XG4gIGZpcnN0U2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1maXJzdC1zZWN0aW9uXCIpO1xuICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLXNlY29uZC1zZWN0aW9uXCIpO1xuICB0aGlyZFNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcInRhc2stdGhpcmQtc2VjdGlvblwiKTtcbiAgZm91cnRoU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1mb3VydGgtc2VjdGlvblwiKTtcbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRCdG4oKSk7XG4gIGZpcnN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVCdG4oKSk7XG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza1RpdGxlKHRhc2spKTtcbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SW5wdXQodGFzaykpO1xuICBzZWNvbmRTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrKSk7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVEYXRlUGlja2VyKHRhc2spKTtcbiAgdGhpcmRTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXRpZXMoKSk7XG4gIGZvdXJ0aFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlRmluaXNoQnRuKCkpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChmaXJzdFNlY3Rpb24pO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZm91cnRoU2VjdGlvbik7XG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgc2Nyb2xsQXV0byh0YXNrRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tUaXRsZSh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay10aXRsZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnRhc2tUaXRsZSk7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLmlkID0gXCJ0YXNrLXRpdGxlXCI7XG4gIHRhc2tUaXRsZS5kaXNhYmxlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRhc2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrXCI7XG4gIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbCk7XG4gIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICByZXR1cm4gdGFza1RpdGxlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SW5wdXQodGFzaykge1xuICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtaW5wdXQtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0LWZpZWxkXCIpO1xuICBwcm9qZWN0SW5wdXQuaWQgPSBcInRhc2stcHJvamVjdFwiO1xuICAoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0KTtcbiAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gIH0pO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSB0YXNrLnByb2plY3Q7XG4gIHByb2plY3RJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIHByb2plY3RJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJvamVjdFwiKTtcbiAgcHJvamVjdElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dExhYmVsKTtcbiAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbmVCdG4oKSB7XG4gIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkb25lQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lLWJ0blwiKTtcbiAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0aW5nXCIpO1xuICByZXR1cm4gZG9uZUJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdEJ0bigpIHtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImVkaXQtYnRuXCIpO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXRpbmdcIik7XG4gIHJldHVybiBlZGl0QnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiZGVsZXRlLWJ0blwiKTtcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHRhc2spIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmliZSB5b3VyIHRhc2suLi5cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiM1wiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIyMFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlkID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gIHRhc2tEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICByZXR1cm4gdGFza0Rlc2NyaXB0aW9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlUGlja2VyKHRhc2spIHtcbiAgY29uc3QgZGF0ZVBpY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVQaWNrZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRhdGUtcGlja2VyLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2suZHVlRGF0ZSk7XG4gIGRhdGVQaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRhdGUtcGlja2VyXCIpO1xuICBkYXRlUGlja2VyLmRpc2FibGVkID0gdHJ1ZTtcbiAgZGF0ZVBpY2tlci5pZCA9IFwidGFzay1kdWVkYXRlXCI7XG4gIGRhdGVQaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWR1ZWRhdGVcIik7XG4gIGRhdGVQaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlOlwiO1xuICBkYXRlUGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG4gIGRhdGVQaWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gIHJldHVybiBkYXRlUGlja2VyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0aWVzKCkge1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGlnaFByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBsb3dQcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhpZ2hQcmlvcml0eUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaC1wcmlvcml0eS1idG5cIik7XG4gIG1lZGl1bVByaW9yaXR5QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJtZWRpdW0tcHJpb3JpdHktYnRuXCIpO1xuICBsb3dQcmlvcml0eUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwibG93LXByaW9yaXR5LWJ0blwiKTtcblxuICBoaWdoUHJpb3JpdHlCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0blwiKTtcbiAgbWVkaXVtUHJpb3JpdHlCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0blwiKTtcbiAgbG93UHJpb3JpdHlCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0blwiKTtcblxuICBoaWdoUHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgbWVkaXVtUHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBsb3dQcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5cbiAgaGlnaFByaW9yaXR5QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgbWVkaXVtUHJpb3JpdHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBsb3dQcmlvcml0eUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktbGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG5cbiAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWNvbnRhaW5lclwiKTtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1jb250YWluZXJcIik7XG5cbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5QnRuKTtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlCdG4pO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUJ0bik7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUJ0bkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByaW9yaXR5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5pc2hCdG4oKSB7XG4gIGNvbnN0IGZpbmlzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZmluaXNoQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJmaW5pc2gtdGFzay1idG5cIik7XG5cbiAgZmluaXNoQnRuLnRleHRDb250ZW50ID0gXCJGaW5pc2ghXCI7XG5cbiAgcmV0dXJuIGZpbmlzaEJ0bjtcbn1cblxuZnVuY3Rpb24gc3dhcEJ0bnMoYnRuKSB7XG4gIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkb25lLWJ0blwiKSA/IHN3YXBEb25lQnRuKGJ0bikgOiBzd2FwRWRpdEJ0bihidG4pO1xufVxuXG5mdW5jdGlvbiBzd2FwRG9uZUJ0bihkb25lQnRuKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbmVCdG4uY2xvc2VzdChcIi50YXNrLWZpcnN0LXNlY3Rpb25cIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1idG5cIik7XG4gIGRvbmVCdG4ucmVtb3ZlKCk7XG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlRWRpdEJ0bigpLCBkZWxldGVCdG4pO1xufVxuXG5mdW5jdGlvbiBzd2FwRWRpdEJ0bihlZGl0QnRuKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGVkaXRCdG4uY2xvc2VzdChcIi50YXNrLWZpcnN0LXNlY3Rpb25cIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1idG5cIik7XG4gIGVkaXRCdG4ucmVtb3ZlKCk7XG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlRG9uZUJ0bigpLCBkZWxldGVCdG4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrc0VkaXRhYmxlKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0YXNrQnRuID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZWRpdGluZ1wiKTtcbiAgICBpZiAoKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpW2luZGV4XS5lZGl0RmxhZyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRhc2sucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJ0blwiKSkge1xuICAgICAgICBzd2FwQnRucyh0YXNrQnRuKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KVtpbmRleF0uZWRpdEZsYWcgPT09IGZhbHNlKSB7XG4gICAgICBpZiAodGFzay5xdWVyeVNlbGVjdG9yKFwiLmRvbmUtYnRuXCIpKSB7XG4gICAgICAgIHN3YXBCdG5zKHRhc2tCdG4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxhdGVzdFRhc2tFZGl0YWJsZSgpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIGxldCBudW1iZXJPZlRhc2tzID0gdGFza3MubGVuZ3RoO1xuICBzZXRFZGl0RmxhZyh0cnVlLCBudW1iZXJPZlRhc2tzIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUlucHV0cygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5xdWVyeVNlbGVjdG9yKFwiLmRvbmUtYnRuXCIpKSB7XG4gICAgICBlbmFibGVJbnB1dEVsZW1lbnRzKHRhc2spO1xuICAgICAgZW5hYmxlVGV4dGFyZWFFbGVtZW50cyh0YXNrKTtcbiAgICAgIGVuYWJsZVByaW9yaXR5QnRucyh0YXNrKTtcbiAgICAgIGVuYWJsZVByb2plY3RJbnB1dHModGFzayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0cygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYnRuXCIpKSB7XG4gICAgICBkaXNhYmxlSW5wdXRFbGVtZW50cyh0YXNrKTtcbiAgICAgIGRpc2FibGVUZXh0QXJlYUVsZW1lbnRzKHRhc2spO1xuICAgICAgZGlzYWJsZVByaW9yaXR5QnRucyh0YXNrKTtcbiAgICAgIGRpc2FibGVQcm9qZWN0SW5wdXRzKHRhc2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUlucHV0RWxlbWVudHModGFzaykge1xuICBsZXQgaW5wdXRGaWVsZHMgPSB0YXNrLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlVGV4dGFyZWFFbGVtZW50cyh0YXNrKSB7XG4gIGxldCBpbnB1dEZpZWxkcyA9IHRhc2sucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuICBpbnB1dEZpZWxkcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVQcmlvcml0eUJ0bnModGFzaykge1xuICBsZXQgcHJpb3JpdHlCdG5zID0gdGFzay5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ0blwiKTtcbiAgcHJpb3JpdHlCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdElucHV0cyh0YXNrKSB7XG4gIGxldCBwcm9qZWN0RmllbGRzID0gdGFzay5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZmllbGRcIik7XG4gIHByb2plY3RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUlucHV0RWxlbWVudHModGFzaykge1xuICBsZXQgaW5wdXRGaWVsZHMgPSB0YXNrLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVGV4dEFyZWFFbGVtZW50cyh0YXNrKSB7XG4gIGxldCB0ZXh0QXJlYUZpZWxkcyA9IHRhc2sucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYUZpZWxkcy5mb3JFYWNoKCh0ZXh0QXJlYSkgPT4ge1xuICAgIHRleHRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVQcmlvcml0eUJ0bnModGFzaykge1xuICBsZXQgcHJpb3JpdHlCdG5zID0gdGFzay5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ0blwiKTtcbiAgcHJpb3JpdHlCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlUHJvamVjdElucHV0cyh0YXNrKSB7XG4gIGxldCBwcm9qZWN0RmllbGRzID0gdGFzay5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZmllbGRcIik7XG4gIHByb2plY3RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RUYXNrVGl0bGUodGFzaykge1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnNlbGVjdCgpO1xufVxuXG5mdW5jdGlvbiBkZXNlbGVjdFRhc2tUaXRsZSh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUuZm9jdXMoKTtcbiAgdGFza1RpdGxlLnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RMYXRlc3RUYXNrVGl0bGUoKSB7XG4gIGxldCBudW1iZXJPZlRhc2tzID0gKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpLmxlbmd0aDtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIGNvbnN0IGxhdGVzdFRhc2tFbGVtZW50ID0gdGFza3NbbnVtYmVyT2ZUYXNrcyAtIDFdO1xuICBzZWxlY3RUYXNrVGl0bGUobGF0ZXN0VGFza0VsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmlvcml0eVN0eWxpbmcoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGxldCBoaWdoUHJpb3JpdHlCdG4gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaC1wcmlvcml0eS1idG5cIik7XG4gICAgbGV0IG1lZGl1bVByaW9yaXR5QnRuID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLm1lZGl1bS1wcmlvcml0eS1idG5cIik7XG4gICAgbGV0IGxvd1ByaW9yaXR5QnRuID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLmxvdy1wcmlvcml0eS1idG5cIik7XG5cbiAgICAoZ2V0VGFza3MoKSB8fCB0YXNrTGlicmFyeSlbaW5kZXhdLmhpZ2hQcmlvcml0eVxuICAgICAgPyBoaWdoUHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXN0eWxpbmdcIilcbiAgICAgIDogaGlnaFByaW9yaXR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1zdHlsaW5nXCIpO1xuXG4gICAgKGdldFRhc2tzKCkgfHwgdGFza0xpYnJhcnkpW2luZGV4XS5tZWRpdW1Qcmlvcml0eVxuICAgICAgPyBtZWRpdW1Qcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktc3R5bGluZ1wiKVxuICAgICAgOiBtZWRpdW1Qcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktc3R5bGluZ1wiKTtcblxuICAgIChnZXRUYXNrcygpIHx8IHRhc2tMaWJyYXJ5KVtpbmRleF0ubG93UHJpb3JpdHlcbiAgICAgID8gbG93UHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXN0eWxpbmdcIilcbiAgICAgIDogbG93UHJpb3JpdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LXN0eWxpbmdcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWxsRWRpdEJ0bnMoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ0biA9IHRhc2sucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJ0blwiKTtcbiAgICBlZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbG9hZFByb2plY3RJbnB1dHMoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcmVtb3ZlQWxsUHJvamVjdElucHV0cyh0YXNrKTtcbiAgICBsb2FkQWxsUHJvamVjdElucHV0cyh0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbFByb2plY3RJbnB1dHModGFzaykge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1maWVsZFwiKTtcbiAgd2hpbGUgKHByb2plY3RJbnB1dC5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdElucHV0LnJlbW92ZUNoaWxkKHByb2plY3RJbnB1dC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkQWxsUHJvamVjdElucHV0cyh0YXNrKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IHRhc2sucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZpZWxkXCIpO1xuICAoZ2V0UHJvamVjdHMoKSB8fCBwcm9qZWN0c0FycmF5KS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0KTtcbiAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SGVhZGVyKHByb2plY3ROYW1lKSB7XG4gIHJlbW92ZVByb2plY3RIZWFkZXIoKTtcblxuICBjb25zdCB0YXNrc1BhbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcm9qZWN0SGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0LWhlYWRlci1jb250YWluZXJcIik7XG4gIHByb2plY3RIZWFkZXJCdG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtaGVhZGVyLWJ0bi1jb250YWluZXJcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtaGVhZGVyXCIpO1xuXG4gIHByb2plY3RIZWFkZXIudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgcHJvamVjdEhlYWRlci5kaXNhYmxlZCA9IHRydWU7XG5cbiAgcHJvamVjdEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgcHJvamVjdEhlYWRlckJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVSZW5hbWVQcm9qZWN0QnRuKCkpO1xuICBwcm9qZWN0SGVhZGVyQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oKSk7XG4gIHByb2plY3RIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlckJ0bkNvbnRhaW5lcik7XG4gIHRhc2tzUGFuZS5pbnNlcnRCZWZvcmUocHJvamVjdEhlYWRlckNvbnRhaW5lciwgdGFza3NQYW5lLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0SGVhZGVyKCkge1xuICBjb25zdCB0YXNrc1BhbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICBpZiAodGFza3NQYW5lLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpKSB7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IHRhc2tzUGFuZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0SGVhZGVyLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbmFtZVByb2plY3RCdG4oKSB7XG4gIGNvbnN0IHJlbmFtZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW5hbWVQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJyZW5hbWUtcHJvamVjdC1idG5cIik7XG4gIHJlbmFtZVByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtaGVhZGVyLWVkaXRpbmdcIik7XG4gIHJldHVybiByZW5hbWVQcm9qZWN0QnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZXRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBzZXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2V0UHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwic2V0LXByb2plY3QtYnRuXCIpO1xuICBzZXRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0LWhlYWRlci1lZGl0aW5nXCIpO1xuICByZXR1cm4gc2V0UHJvamVjdEJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEJ0bigpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgcmV0dXJuIGRlbGV0ZVByb2plY3RCdG47XG59XG5cbmZ1bmN0aW9uIHN3YXBQcm9qZWN0SGVhZGVyQnRuKGJ0bikge1xuICBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2V0LXByb2plY3QtYnRuXCIpXG4gICAgPyBzd2FwU2V0UHJvamVjdEJ0bihidG4pXG4gICAgOiBzd2FwUmVuYW1lUHJvamVjdEJ0bihidG4pO1xufVxuXG5mdW5jdGlvbiBzd2FwU2V0UHJvamVjdEJ0bihzZXRQcm9qZWN0QnRuQ29udGFpbmVyKSB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IHNldFByb2plY3RCdG5Db250YWluZXIuY2xvc2VzdChcbiAgICBcIi5wcm9qZWN0LWhlYWRlci1idG4tY29udGFpbmVyXCJcbiAgKTtcbiAgcGFyZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZChcbiAgICBjcmVhdGVSZW5hbWVQcm9qZWN0QnRuKCksXG4gICAgc2V0UHJvamVjdEJ0bkNvbnRhaW5lclxuICApO1xufVxuXG5mdW5jdGlvbiBzd2FwUmVuYW1lUHJvamVjdEJ0bihyZW5hbWVQcm9qZWN0QnRuQ29udGFpbmVyKSB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IHJlbmFtZVByb2plY3RCdG5Db250YWluZXIuY2xvc2VzdChcbiAgICBcIi5wcm9qZWN0LWhlYWRlci1idG4tY29udGFpbmVyXCJcbiAgKTtcbiAgcGFyZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZChcbiAgICBjcmVhdGVTZXRQcm9qZWN0QnRuKCksXG4gICAgcmVuYW1lUHJvamVjdEJ0bkNvbnRhaW5lclxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyRWRpdGFibGUoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlckJ0biA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWhlYWRlci1lZGl0aW5nXCJcbiAgKTtcbiAgaWYgKHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtcHJvamVjdC1idG5cIikpIHtcbiAgICBzd2FwUHJvamVjdEhlYWRlckJ0bihwcm9qZWN0SGVhZGVyQnRuKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2V0LXByb2plY3QtYnRuXCIpKSB7XG4gICAgc3dhcFByb2plY3RIZWFkZXJCdG4ocHJvamVjdEhlYWRlckJ0bik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdEhlYWRlcigpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7XG4gIGlmIChwcm9qZWN0SGVhZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2V0LXByb2plY3QtYnRuXCIpKSB7XG4gICAgcHJvamVjdEhlYWRlci5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVQcm9qZWN0SGVhZGVyKCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbiAgaWYgKHByb2plY3RIZWFkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtcHJvamVjdC1idG5cIikpIHtcbiAgICBwcm9qZWN0SGVhZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vL1RBU0tCQVIgUkVMQVRFRFxuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtdG9kb1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGNsZWFuUHJvamVjdHMoKTtcbiAgKGdldFByb2plY3RzKCkgfHwgcHJvamVjdHNBcnJheSkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhblByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pdGVtXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3RJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3QtaXRlbVwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidGFza2Jhci1idG5cIik7XG4gIHByb2plY3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2YXRlZFByb2plY3RTdHlsZShpbmRleCkge1xuICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gIGlmIChpbmRleCkge1xuICAgIHByb2plY3RFbGVtZW50c1tpbmRleCAtIDFdLmNsYXNzTGlzdC5hZGQoXCJ0YXNrYmFyLWJ0bi1hY3RpdmF0ZVwiKTtcbiAgfVxufVxuXG4vL05PVEVTIFJFTEFURURcblxuZnVuY3Rpb24gcmVuZGVyTm90ZXMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tcIikpIHtcbiAgICBjbGVhblRhc2tzKCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnRuXCIpKSB7XG4gICAgY2xlYW5BZGROb3RlQnRuKCk7XG4gIH1cbiAgcmVtb3ZlUHJvamVjdEhlYWRlcigpO1xuICBjbGVhbk5vdGVzKCk7XG4gIGFwcGVuZEFkZE5vdGVCdG4oKTtcbiAgKGdldE5vdGVzKCkgfHwgbm90ZXNMaWJyYXJ5KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY3JlYXRlTm90ZShpdGVtKTtcbiAgfSk7XG4gIGRpc2FibGVBbGxOb3RlRWRpdEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQWRkTm90ZUJ0bigpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBjb25zdCBzdmdTdHJpbmcgPSBgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCItNS4wIC0xMC4wIDExMC4wIDEzNS4wXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJhZGQtbm90ZS1sb2dvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwibTU0LjE2OCAzNy41djguMzMyaDguMzMyYzIuMzA0NyAwIDQuMTY4IDEuODYzMyA0LjE2OCA0LjE2OHMtMS44NjMzIDQuMTY4LTQuMTY4IDQuMTY4aC04LjMzMnY4LjMzMmMwIDIuMzA0Ny0xLjg2MzMgNC4xNjgtNC4xNjggNC4xNjhzLTQuMTY4LTEuODYzMy00LjE2OC00LjE2OHYtOC4zMzJoLTguMzMyYy0yLjMwNDcgMC00LjE2OC0xLjg2MzMtNC4xNjgtNC4xNjhzMS44NjMzLTQuMTY4IDQuMTY4LTQuMTY4aDguMzMydi04LjMzMmMwLTIuMzA0NyAxLjg2MzMtNC4xNjggNC4xNjgtNC4xNjhzNC4xNjggMS44NjMzIDQuMTY4IDQuMTY4em0tMzguNjY4IDEuOTk2MWMxLjA4MiAwIDIuMTY4LTAuNDE0MDYgMi45MTgtMS4yMDcgMC43ODkwNi0wLjc1IDEuMjQ2MS0xLjgzMiAxLjI0NjEtMi45NTcgMC0xLjA4Mi0wLjQ2MDk0LTIuMTY0MS0xLjI1LTIuOTE0MS0xLjUtMS41ODU5LTQuMzMyLTEuNTg1OS01Ljg3NSAwLTAuNzkyOTcgMC43NS0xLjIwNyAxLjgzMi0xLjIwNyAyLjkxNDEgMCAxLjEyODkgMC40MTQwNiAyLjIxMDkgMS4yMDcgMi45NTcgMC43NSAwLjc5Mjk3IDEuODM1OSAxLjIwNyAyLjk2MDkgMS4yMDd6bTIwLjQ1Ny0yMC4wNzhjMS4wODIgMCAyLjE2NDEtMC40NjA5NCAyLjkxOC0xLjI1MzkgMC43ODkwNi0wLjc1IDEuMjUtMS44MzIgMS4yNS0yLjk1NyAwLTEuMDgyLTAuNDYwOTQtMi4xNjQxLTEuMjA3LTIuOTE0MS0xLjU0My0xLjU0My00LjMzMi0xLjU4NTktNS45MTggMC0wLjc5Mjk3IDAuNzg5MDYtMS4yMDcgMS44MzItMS4yMDcgMi45MTQxIDAgMS4xMjg5IDAuNDE0MDYgMi4yMTA5IDEuMjA3IDIuOTU3IDAuNzg5MDYgMC43OTI5NyAxLjg3NSAxLjI1MzkgMi45NTcgMS4yNTM5em0tMTIuNDU3IDguMjQ2MWMxLjA4MiAwIDIuMTY4LTAuNDU3MDMgMi45MTgtMS4yNSAwLjc5Mjk3LTAuNzUgMS4yNS0xLjgzNTkgMS4yNS0yLjkxOCAwLTEuMTI1LTAuNDU3MDMtMi4yMTA5LTEuMjUtMi45NTctMS41NDMtMS41NDMtNC4zMzItMS41ODItNS44NzUgMC0wLjc5Mjk3IDAuNzkyOTctMS4yMTA5IDEuODM1OS0xLjIxMDkgMi45NjA5IDAgMS4wODIgMC40MTc5NyAyLjE2OCAxLjIwNyAyLjkxOCAwLjc1IDAuNzkyOTcgMS44MzU5IDEuMjQ2MSAyLjk2MDkgMS4yNDYxem01NS44OTggNTEuODMyYzAuMDE1NjI0LTAuMDE1NjI1IDAuMDQyOTY4LTAuMDIzNDM4IDAuMDU4NTkzLTAuMDM5MDYzczAuMDIzNDM4LTAuMDQyOTY5IDAuMDM5MDYzLTAuMDU4NTkzYzcuNTE1Ni03LjU0MyAxMi4xNzItMTcuOTM4IDEyLjE3Mi0yOS4zOTggMC01LjQ4ODMtMS4wOTM4LTEwLjcyMy0zLjAzMTItMTUuNTIzLTAuMDI3MzQ0LTAuMDc0MjE4LTAuMDUwNzgxLTAuMTQ0NTMtMC4wNzgxMjUtMC4yMTg3NS0yLjEwNTUtNS4xMzY3LTUuMTk1My05Ljc3MzQtOS4wNTQ3LTEzLjY0NS0wLjAxOTUzMS0wLjAxOTUzMS0wLjAyNzM0NC0wLjA1MDc4MS0wLjA0Njg3NS0wLjA3MDMxMnMtMC4wNDY4NzUtMC4wMjM0MzgtMC4wNjY0MDYtMC4wNDI5NjljLTcuNTQzLTcuNTE1Ni0xNy45MzQtMTIuMTY4LTI5LjM5MS0xMi4xNjgtMC45Njg3NSAwLTEuODE2NCAwLjM4MjgxLTIuNTIzNCAwLjkzMzU5LTAuMTM2NzIgMC4xMDE1Ni0wLjMwODU5IDAuMTUyMzQtMC40MzM1OSAwLjI3MzQ0LTAuMTk1MzEgMC4yMDMxMy0wLjMwODU5IDAuNDY4NzUtMC40NjA5NCAwLjcwNzAzLTAuNDMzNTkgMC42NjQwNi0wLjc1IDEuNDA2Mi0wLjc1IDIuMjUzOSAwIDAuODU1NDcgMC4zMjAzMSAxLjYwNTUgMC43NjE3MiAyLjI2NTYgMC4xNDg0NCAwLjIzNDM4IDAuMjU3ODEgMC40OTIxOSAwLjQ0OTIyIDAuNjkxNDEgMC4xOTUzMSAwLjE4NzUgMC40NTMxMiAwLjI5Mjk3IDAuNjgzNTkgMC40NDE0MSAwLjY2MDE2IDAuNDQ1MzEgMS40MTQxIDAuNzY5NTMgMi4yNzM0IDAuNzY5NTMgMTguMzc5IDAgMzMuMzMyIDE0Ljk1MyAzMy4zMzIgMzMuMzMycy0xNC45NTMgMzMuMzMyLTMzLjMzMiAzMy4zMzItMzMuMzMyLTE0Ljk1My0zMy4zMzItMzMuMzMyYzAtMC41NjI1LTAuMTEzMjgtMS4xMDU1LTAuMzI0MjItMS42MDU1LTAuMDYyNS0wLjE1MjM0LTAuMTgzNTktMC4yNjE3Mi0wLjI2MTcyLTAuNDAyMzQtMC4xODM1OS0wLjMzMjAzLTAuMzU5MzgtMC42NzE4OC0wLjYyMTA5LTAuOTQ5MjItMC4xNTIzNC0wLjE1MjM0LTAuMzU5MzgtMC4yMTg3NS0wLjUzMTI1LTAuMzM5ODQtMC42OTE0MS0wLjUxMTcyLTEuNTAzOS0wLjg3MTA5LTIuNDI5Ny0wLjg3MTA5cy0xLjczODMgMC4zNTkzOC0yLjQyOTcgMC44NzEwOWMtMC4xNzE4NyAwLjEyMTA5LTAuMzc4OTEgMC4xODc1LTAuNTMxMjUgMC4zMzk4NC0wLjI4NTE2IDAuMjk2ODgtMC40NzY1NiAwLjY2MDE2LTAuNjY3OTcgMS4wMTk1LTAuMDYyNSAwLjExNzE5LTAuMTY0MDYgMC4yMDcwMy0wLjIxNDg0IDAuMzI4MTItMC4yMDcwMyAwLjUtMC4zMjQyMiAxLjA0My0wLjMyNDIyIDEuNjA5NCAwIDUuNDk2MSAxLjA5MzggMTAuNzM0IDMuMDM5MSAxNS41NDMgMC4wMTk1MzEgMC4wNTQ2ODcgMC4wMzUxNTYgMC4xMDkzOCAwLjA1ODU5NCAwLjE2NDA2IDIuMTA1NSA1LjE0ODQgNS4xOTUzIDkuNzkzIDkuMDU4NiAxMy42NzYgMC4wMjM0MzggMC4wMTk1MzIgMC4wMjczNDQgMC4wNTQ2ODggMC4wNTA3ODEgMC4wNzQyMTkgMC4wMTk1MzIgMC4wMjM0MzggMC4wNTA3ODIgMC4wMjczNDQgMC4wNzQyMTkgMC4wNTA3ODEgMy43MjY2IDMuNzEwOSA4LjE1MjMgNi43MjI3IDEzLjA1OSA4LjgyMDMgMC4wNTA3ODEgMC4wMjM0MzcgMC4wOTM3NSAwLjA0Njg3NSAwLjE0ODQ0IDAuMDcwMzEzIDQuOTc2NiAyLjEwMTYgMTAuNDQ1IDMuMjY5NSAxNi4xOCAzLjI2OTUgNS40NTMxIDAgMTAuNjQ4LTEuMDgyIDE1LjQyNi0yLjk5NjEgMC4xMDU0Ny0wLjAzOTA2MyAwLjIwNzAzLTAuMDY2NDA2IDAuMzEyNS0wLjExMzI4IDUuMTQwNi0yLjEwOTQgOS43ODEyLTUuMTk5MiAxMy42Ni05LjA2MjV6XCJcbiAgICAgICAgICAgICAgLz48L3N2Z1xuICAgICAgICAgICAgPjxzdHJvbmc+Tm90ZTwvc3Ryb25nPmA7XG5cbiAgYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhZGQtbm90ZS1idG5cIik7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBzdmdTdHJpbmc7XG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQWRkTm90ZUJ0bigpIHtcbiAgY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnRuXCIpO1xuICBpZiAoYWRkTm90ZUJ0bikge1xuICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGFkZE5vdGVCdG4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuTm90ZXMoKSB7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlXCIpO1xuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQobm90ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKG5vdGUpIHtcbiAgY29uc3Qgbm90ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3RlRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOb3RlRWRpdEJ0bigpKTtcbiAgbm90ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZURlbGV0ZUJ0bigpKTtcbiAgbm90ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZVRpdGxlKG5vdGUpKTtcbiAgbm90ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZURlc2NyaXB0aW9uKG5vdGUpKTtcbiAgbm90ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm5vdGVcIik7XG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVFbGVtZW50KTtcbiAgc2Nyb2xsQXV0byhub3RlRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVUaXRsZShub3RlKSB7XG4gIGNvbnN0IG5vdGVUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbm90ZVRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG5vdGUubm90ZVRpdGxlKTtcbiAgbm90ZVRpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJub3RlLXRpdGxlXCIpO1xuICBub3RlVGl0bGUuZGlzYWJsZWQgPSB0cnVlO1xuICBub3RlVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5vdGUtdGl0bGUtY29udGFpbmVyXCIpO1xuICBub3RlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZVRpdGxlKTtcbiAgcmV0dXJuIG5vdGVUaXRsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZURvbmVCdG4oKSB7XG4gIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkb25lQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJub3RlLWRvbmUtYnRuXCIpO1xuICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoXCJub3RlLWVkaXRpbmdcIik7XG4gIHJldHVybiBkb25lQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlRWRpdEJ0bigpIHtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm5vdGUtZWRpdC1idG5cIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcIm5vdGUtZWRpdGluZ1wiKTtcbiAgcmV0dXJuIGVkaXRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVEZWxldGVCdG4oKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwibm90ZS1kZWxldGUtYnRuXCIpO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlRGVzY3JpcHRpb24obm90ZSkge1xuICBjb25zdCBub3RlRGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBub3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG5vdGVEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBub3RlLm5vdGVEZXNjcmlwdGlvbjtcbiAgbm90ZURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIzXCIpO1xuICBub3RlRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjIwXCIpO1xuICBub3RlRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmliZSB5b3VyIG5vdGUuLi5cIik7XG4gIG5vdGVEZXNjcmlwdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gIG5vdGVEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwibm90ZS1kZXNjcmlwdGlvblwiKTtcbiAgbm90ZURlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJub3RlLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcbiAgbm90ZURlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVEZXNjcmlwdGlvbik7XG4gIHJldHVybiBub3RlRGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHN3YXBOb3RlQnRucyhidG4pIHtcbiAgYnRuLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGUtZG9uZS1idG5cIilcbiAgICA/IHN3YXBOb3RlRG9uZUJ0bihidG4pXG4gICAgOiBzd2FwTm90ZUVkaXRCdG4oYnRuKTtcbn1cblxuZnVuY3Rpb24gc3dhcE5vdGVEb25lQnRuKGRvbmVCdG4pIHtcbiAgY29uc3Qgbm90ZSA9IGRvbmVCdG4uY2xvc2VzdChcIi5ub3RlXCIpO1xuICBkb25lQnRuLnJlbW92ZSgpO1xuICBub3RlLnByZXBlbmQoY3JlYXRlTm90ZUVkaXRCdG4oKSk7XG59XG5cbmZ1bmN0aW9uIHN3YXBOb3RlRWRpdEJ0bihlZGl0QnRuKSB7XG4gIGNvbnN0IG5vdGUgPSBlZGl0QnRuLmNsb3Nlc3QoXCIubm90ZVwiKTtcbiAgZWRpdEJ0bi5yZW1vdmUoKTtcbiAgbm90ZS5wcmVwZW5kKGNyZWF0ZU5vdGVEb25lQnRuKCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOb3Rlc0VkaXRhYmxlKCkge1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgbm90ZXMuZm9yRWFjaCgobm90ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlQnRuID0gbm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtZWRpdGluZ1wiKTtcbiAgICBpZiAoKGdldE5vdGVzKCkgfHwgbm90ZXNMaWJyYXJ5KVtpbmRleF0uZWRpdEZsYWcgPT09IHRydWUpIHtcbiAgICAgIGlmIChub3RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1lZGl0LWJ0blwiKSkge1xuICAgICAgICBzd2FwTm90ZUJ0bnMobm90ZUJ0bik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoZ2V0Tm90ZXMoKSB8fCBub3Rlc0xpYnJhcnkpW2luZGV4XS5lZGl0RmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChub3RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1kb25lLWJ0blwiKSkge1xuICAgICAgICBzd2FwTm90ZUJ0bnMobm90ZUJ0bik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGF0ZXN0Tm90ZUVkaXRhYmxlKCkge1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgbGV0IG51bWJlck9mTm90ZXMgPSBub3Rlcy5sZW5ndGg7XG4gIHNldE5vdGVFZGl0RmxhZyh0cnVlLCBudW1iZXJPZk5vdGVzIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZU5vdGVJbnB1dHMoKSB7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlXCIpO1xuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgaWYgKG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLWRvbmUtYnRuXCIpKSB7XG4gICAgICBlbmFibGVOb3RlSW5wdXRFbGVtZW50cyhub3RlKTtcbiAgICAgIGVuYWJsZU5vdGVUZXh0YXJlYUVsZW1lbnRzKG5vdGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVOb3RlSW5wdXRzKCkge1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgbm90ZXMuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgIGlmIChub3RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1lZGl0LWJ0blwiKSkge1xuICAgICAgZGlzYWJsZU5vdGVJbnB1dEVsZW1lbnRzKG5vdGUpO1xuICAgICAgZGlzYWJsZU5vdGVUZXh0QXJlYUVsZW1lbnRzKG5vdGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZU5vdGVJbnB1dEVsZW1lbnRzKG5vdGUpIHtcbiAgbGV0IGlucHV0RmllbGRzID0gbm90ZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGlucHV0RmllbGRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZU5vdGVUZXh0YXJlYUVsZW1lbnRzKG5vdGUpIHtcbiAgbGV0IGlucHV0RmllbGRzID0gbm90ZS5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XG4gIGlucHV0RmllbGRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVOb3RlSW5wdXRFbGVtZW50cyhub3RlKSB7XG4gIGxldCBpbnB1dEZpZWxkcyA9IG5vdGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICBpbnB1dEZpZWxkcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVOb3RlVGV4dEFyZWFFbGVtZW50cyhub3RlKSB7XG4gIGxldCB0ZXh0QXJlYUZpZWxkcyA9IG5vdGUucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYUZpZWxkcy5mb3JFYWNoKCh0ZXh0QXJlYSkgPT4ge1xuICAgIHRleHRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5vdGVUaXRsZShub3RlKSB7XG4gIGNvbnN0IG5vdGVUaXRsZSA9IG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLXRpdGxlXCIpO1xuICBub3RlVGl0bGUuc2VsZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGRlc2VsZWN0Tm90ZVRpdGxlKG5vdGUpIHtcbiAgY29uc3Qgbm90ZVRpdGxlID0gbm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtdGl0bGVcIik7XG4gIG5vdGVUaXRsZS5mb2N1cygpO1xuICBub3RlVGl0bGUuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdExhdGVzdE5vdGVUaXRsZSgpIHtcbiAgbGV0IG51bWJlck9mTm90ZXMgPSAoZ2V0Tm90ZXMoKSB8fCBub3Rlc0xpYnJhcnkpLmxlbmd0aDtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGVcIik7XG4gIGNvbnN0IGxhdGVzdE5vdGVFbGVtZW50ID0gbm90ZXNbbnVtYmVyT2ZOb3RlcyAtIDFdO1xuICBzZWxlY3ROb3RlVGl0bGUobGF0ZXN0Tm90ZUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWxsTm90ZUVkaXRCdG5zKCkge1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgbm90ZXMuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBub3RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1lZGl0LWJ0blwiKTtcbiAgICBlZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59XG5cbi8vU1RZTElOR1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrYmFyQnRuQWN0aXZhdGlvbigpIHtcbiAgY29uc3QgdGFza2JhckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tiYXItYnRuXCIpO1xuICB0YXNrYmFyQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tiYXItYnRuLWFjdGl2YXRlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza2JhckJ0bkFjdGl2YXRpb24oYnRuKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza2Jhci1idG4tYWN0aXZhdGVcIik7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFza2JhckJ0bihidG4pIHtcbiAgcmVtb3ZlVGFza2JhckJ0bkFjdGl2YXRpb24oKTtcbiAgYWRkVGFza2JhckJ0bkFjdGl2YXRpb24oYnRuKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21vZGVybi1ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQge1xuICByZW5kZXJUYXNrcyxcbiAgc2Nyb2xsVG9Ub3AsXG4gIGFkZFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIGRlbGV0ZVRlbXBvcmFyeVRhc2ssXG4gIHNhdmVUYXNrLFxuICBzZWxlY3RMYXRlc3RUYXNrVGl0bGUsXG4gIGRlc2VsZWN0VGFza1RpdGxlLFxuICBzZXRFZGl0RmxhZyxcbiAgcmVuZGVyVGFza3NFZGl0YWJsZSxcbiAgcmVuZGVyTGF0ZXN0VGFza0VkaXRhYmxlLFxuICBlbmFibGVJbnB1dHMsXG4gIGRpc2FibGVJbnB1dHMsXG4gIHRvZ2dsZVByaW9yaXR5LFxuICBzZXRQcmlvcml0eVN0eWxpbmcsXG4gIGZpbmRUYXNrRWRpdGluZ1N0YXR1cyxcbiAgc29ydFRhc2tMaWJyYXJ5LFxuICBsb2FkVG9kYXlzVGFza3MsXG4gIHJldmVydFRhc2tMaWJyYXJ5LFxuICBsb2FkVGhpc1dlZWtzVGFza3MsXG4gIHJlbmRlclByb2plY3RzLFxuICBhZGRQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBmaW5kTnVtYmVyT2ZQcm9qZWN0cyxcbiAgcmVsb2FkUHJvamVjdElucHV0cyxcbiAgbG9hZFByb2plY3RUYXNrcyxcbiAgY3JlYXRlUHJvamVjdEhlYWRlcixcbiAgcmVtb3ZlUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUHJvamVjdEhlYWRlckVkaXRhYmxlLFxuICBlbmFibGVQcm9qZWN0SGVhZGVyLFxuICBkaXNhYmxlUHJvamVjdEhlYWRlcixcbiAgc2F2ZVByb2plY3ROYW1lLFxuICB1cGRhdGVQcm9qZWN0c0luVGFza0xpYnJhcnksXG4gIGNoZWNrUHJvamVjdEV4aXN0cyxcbiAgY2hlY2tNb3JlVGhhbk9uZVByb2plY3QsXG4gIHJlbmRlck5vdGVzLFxuICBhZGROb3RlLFxuICBkZWxldGVOb3RlLFxuICBzYXZlTm90ZSxcbiAgc2VsZWN0TGF0ZXN0Tm90ZVRpdGxlLFxuICBkZXNlbGVjdE5vdGVUaXRsZSxcbiAgc2V0Tm90ZUVkaXRGbGFnLFxuICByZW5kZXJOb3Rlc0VkaXRhYmxlLFxuICByZW5kZXJMYXRlc3ROb3RlRWRpdGFibGUsXG4gIGVuYWJsZU5vdGVJbnB1dHMsXG4gIGRpc2FibGVOb3RlSW5wdXRzLFxuICBmaW5kTm90ZUVkaXRpbmdTdGF0dXMsXG4gIGFjdGl2YXRlVGFza2JhckJ0bixcbiAgZmluZEFjdGl2YXRlZFByb2plY3RJbmRleCxcbiAgYWRkQWN0aXZhdGVkUHJvamVjdFN0eWxlLFxuICBzdG9yYWdlQXZhaWxhYmxlLFxufSBmcm9tIFwiLi9iYXJyZWxcIjtcblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgYWxlcnQoXG4gICAgXCJQbGVhc2UgZW5hYmxlIGxvY2FsIHN0b3JhZ2UgaW4geW91ciBicm93c2VyIG9yIGV4aXQgcHJpdmF0ZSBicm93c2luZyB0byBwcm9jZWVkIHdpdGggdXNpbmcgdGhpcyBhcHBsaWNhdGlvbiBlZmZlY3RpdmVseS5cIlxuICApO1xufVxuXG5yZW5kZXJUYXNrcygpO1xucmVuZGVyUHJvamVjdHMoKTtcblxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmNvbnN0IGV2ZXJ5dGhpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZXJ5dGhpbmctYnRuXCIpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ0blwiKTtcbmNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZy1idG5cIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCB0YXNrQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrYmFyXCIpO1xuY29uc3Qgbm90ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWJ0blwiKTtcblxuc2Nyb2xsVG9Ub3AodGFza3NDb250YWluZXIpO1xuYWN0aXZhdGVUYXNrYmFyQnRuKGV2ZXJ5dGhpbmdCdG4pO1xuXG5ldmVyeXRoaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlcnRUYXNrTGlicmFyeSk7XG5ldmVyeXRoaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrcyk7XG5ldmVyeXRoaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrc0VkaXRhYmxlKTtcbmV2ZXJ5dGhpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVuYWJsZUlucHV0cyk7XG5ldmVyeXRoaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0SGVhZGVyKTtcbmV2ZXJ5dGhpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFRvVG9wLmJpbmQobnVsbCwgdGFza3NDb250YWluZXIpKTtcbmV2ZXJ5dGhpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBhY3RpdmF0ZVRhc2tiYXJCdG4uYmluZChudWxsLCBldmVyeXRoaW5nQnRuKVxuKTtcbmV2ZXJ5dGhpbmdCdG4uY2xpY2soKTsgLy9UbyBsb2FkIGFsbHRhc2tzIGJ5IGRlZmF1bHQgdXBvbiByZWxvYWRcblxudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRUb2RheXNUYXNrcyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza3MpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tzRWRpdGFibGUpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVuYWJsZUlucHV0cyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlUHJvamVjdEhlYWRlcik7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3AuYmluZChudWxsLCB0YXNrc0NvbnRhaW5lcikpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFza2JhckJ0bi5iaW5kKG51bGwsIHRvZGF5QnRuKSk7XG5cbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkVGhpc1dlZWtzVGFza3MpO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tzKTtcbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrc0VkaXRhYmxlKTtcbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbmFibGVJbnB1dHMpO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3RIZWFkZXIpO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFRvVG9wLmJpbmQobnVsbCwgdGFza3NDb250YWluZXIpKTtcbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgYWN0aXZhdGVUYXNrYmFyQnRuLmJpbmQobnVsbCwgdXBjb21pbmdCdG4pXG4pO1xuXG4vLyBBZGQgdGFza3NcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZXJ0VGFza0xpYnJhcnkpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrLmJpbmQobnVsbCwgXCJOZXcgVGFza1wiKSk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tzKTtcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTGF0ZXN0VGFza0VkaXRhYmxlKTtcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyVGFza3NFZGl0YWJsZSk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVuYWJsZUlucHV0cyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdExhdGVzdFRhc2tUaXRsZSk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3RIZWFkZXIpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVRhc2tiYXJCdG4uYmluZChudWxsLCBldmVyeXRoaW5nQnRuKSk7XG5cbi8vRGVsZXRlIHRlbXBvcmFyeSB0YXNrc1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1idG5cIikgfHxcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmluaXNoLXRhc2stYnRuXCIpXG4gICkge1xuICAgIGRlbGV0ZVRlbXBvcmFyeVRhc2soZXZlbnQudGFyZ2V0KTtcbiAgfVxufSk7XG5cbi8vRGVsZXRlIHRhc2tzXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJ0blwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmaW5pc2gtdGFzay1idG5cIilcbiAgKSB7XG4gICAgZGVsZXRlVGFzayhldmVudC50YXJnZXQpO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gICAgcmVuZGVyVGFza3NFZGl0YWJsZSgpO1xuICAgIGVuYWJsZUlucHV0cygpO1xuICAgIHNjcm9sbFRvVG9wKHRhc2tzQ29udGFpbmVyKTtcbiAgfVxufSk7XG5cbi8vU2F2ZSB0YXNrc1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmUtYnRuXCIpKSB7XG4gICAgY29uc3QgdGFzayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgcHJvamVjdEZpZWxkID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZmllbGRcIik7XG4gICAgY29uc3QgZHVlRGF0ZUZpZWxkID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtcGlja2VyXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkZpZWxkID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgc2F2ZVRhc2soXG4gICAgICBldmVudC50YXJnZXQsXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICBwcm9qZWN0RmllbGQudmFsdWUsXG4gICAgICBkdWVEYXRlRmllbGQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25GaWVsZC52YWx1ZVxuICAgICk7XG4gIH1cbn0pO1xuXG4vL0Rlc2VsZWN0IHRhc2sgdGl0bGVcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkb25lLWJ0blwiKSkge1xuICAgIGNvbnN0IGVkaXRpbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWVkaXRpbmdcIik7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gICAgY29uc3QgYnRuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVkaXRpbmdCdG5zLCBldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tidG5JbmRleF07XG4gICAgZGVzZWxlY3RUYXNrVGl0bGUodGFzayk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ0blwiKSkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGRlc2VsZWN0VGFza1RpdGxlKHRhc2spO1xuICAgIH0pO1xuICB9XG59KTtcblxuLy9TZXQgZWRpdCBmbGFnXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idG5cIikpIHtcbiAgICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1lZGl0aW5nXCIpO1xuICAgIGNvbnN0IGJ0bkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0YXNrQnRucywgZXZlbnQudGFyZ2V0KTtcbiAgICBzZXRFZGl0RmxhZyh0cnVlLCBidG5JbmRleCk7XG4gIH1cbn0pO1xuXG4vL1VuLXNldCBlZGl0IGZsYWdcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkb25lLWJ0blwiKSkge1xuICAgIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWVkaXRpbmdcIik7XG4gICAgY29uc3QgYnRuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRhc2tCdG5zLCBldmVudC50YXJnZXQpO1xuICAgIHNldEVkaXRGbGFnKGZhbHNlLCBidG5JbmRleCk7XG4gIH1cbn0pO1xuXG4vL1N3YXAgZG9uZSBhbmQgZWRpdCBidXR0b25zXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9uZS1idG5cIikgfHxcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idG5cIilcbiAgKSB7XG4gICAgcmVuZGVyVGFza3NFZGl0YWJsZSgpO1xuICAgIGVuYWJsZUlucHV0cygpO1xuICAgIGRpc2FibGVJbnB1dHMoKTtcbiAgfSBlbHNlIGlmIChcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2V0LXByb2plY3QtYnRuXCIpIHx8XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbmFtZS1wcm9qZWN0LWJ0blwiKVxuICApIHtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyRWRpdGFibGUoKTtcbiAgICBlbmFibGVQcm9qZWN0SGVhZGVyKCk7XG4gICAgZGlzYWJsZVByb2plY3RIZWFkZXIoKTtcbiAgfVxufSk7XG5cbi8vU2V0IHByaW9yaXR5IGZsYWdcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1idG5cIikpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBjb25zdCB0aGlzVGFzayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIik7XG4gICAgY29uc3QgdGFza0luZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0YXNrcywgdGhpc1Rhc2spO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlnaC1wcmlvcml0eS1idG5cIikpIHtcbiAgICAgIHRvZ2dsZVByaW9yaXR5KFwiaGlnaFByaW9yaXR5XCIsIHRhc2tJbmRleCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLXByaW9yaXR5LWJ0blwiKSkge1xuICAgICAgdG9nZ2xlUHJpb3JpdHkoXCJtZWRpdW1Qcmlvcml0eVwiLCB0YXNrSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2dnbGVQcmlvcml0eShcImxvd1ByaW9yaXR5XCIsIHRhc2tJbmRleCk7XG4gICAgfVxuICB9XG59KTtcblxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWJ0blwiKSkge1xuICAgIHNldFByaW9yaXR5U3R5bGluZygpO1xuICB9XG59KTtcblxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrXCIpKSB7XG4gICAgY29uc3QgdGhpc1Rhc2sgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1idG5cIikpIHtcbiAgICAgIGNvbnN0IGVkaXRCdG4gPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYnRuXCIpO1xuICAgICAgaWYgKGZpbmRUYXNrRWRpdGluZ1N0YXR1cygpKSB7XG4gICAgICAgIGVkaXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbi8vU29ydCB0YXNrc1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmUtYnRuXCIpKSB7XG4gICAgc29ydFRhc2tMaWJyYXJ5KCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgfVxufSk7XG5cbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idG5cIikgJiYgIWZpbmRUYXNrRWRpdGluZ1N0YXR1cygpKSB7XG4gICAgZXZlbnQudGFyZ2V0LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn0pO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBudW1iZXJPZlByb2plY3RzID0gZmluZE51bWJlck9mUHJvamVjdHMoKTtcbiAgYWRkUHJvamVjdChgUHJvamVjdCAjJHtudW1iZXJPZlByb2plY3RzICsgMX1gKTtcbn0pO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBhY3RpdmF0ZWRQcm9qZWN0SW5kZXggPSBmaW5kQWN0aXZhdGVkUHJvamVjdEluZGV4KCk7XG4gIHJlbmRlclByb2plY3RzKCk7XG4gIGFkZEFjdGl2YXRlZFByb2plY3RTdHlsZShhY3RpdmF0ZWRQcm9qZWN0SW5kZXgpO1xufSk7XG5cbi8vUmVmcmVzaCBwcm9qZWN0cyBsaXN0IG9mIGlucHV0c1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZWxvYWRQcm9qZWN0SW5wdXRzKCk7XG59KTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRBY3RpdmF0ZWRQcm9qZWN0U3R5bGUoKTtcbn0pO1xuXG50YXNrQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XG4gICAgY3JlYXRlUHJvamVjdEhlYWRlcihldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgfVxufSk7XG5cbnRhc2tCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RcIikpIHtcbiAgICBsb2FkUHJvamVjdFRhc2tzKGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gICAgcmVuZGVyVGFza3NFZGl0YWJsZSgpO1xuICAgIGVuYWJsZUlucHV0cygpO1xuICAgIHNjcm9sbFRvVG9wKHRhc2tzQ29udGFpbmVyKTtcbiAgICBhY3RpdmF0ZVRhc2tiYXJCdG4oZXZlbnQudGFyZ2V0KTtcbiAgfVxufSk7XG5cbmxldCBvbGRQcm9qZWN0TmFtZTtcblxuLy9TYXZlIHByb2plY3QgbmFtZVxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbmFtZS1wcm9qZWN0LWJ0blwiKSkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuICAgIG9sZFByb2plY3ROYW1lID0gcHJvamVjdFRpdGxlRWxlbWVudC52YWx1ZTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNldC1wcm9qZWN0LWJ0blwiKSkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IHByb2plY3RUaXRsZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKCFjaGVja1Byb2plY3RFeGlzdHMobmV3UHJvamVjdE5hbWUpKSB7XG4gICAgICAvL1NhdmUgcHJvamVjdCBvbmx5IGlmIHByb2plY3QgZG9lcyBub3QgYWxyZWFkeSBleGlzdFxuICAgICAgc2F2ZVByb2plY3ROYW1lKG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgICB1cGRhdGVQcm9qZWN0c0luVGFza0xpYnJhcnkob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdFRpdGxlRWxlbWVudC52YWx1ZSA9IG9sZFByb2plY3ROYW1lO1xuICAgIH1cbiAgfVxufSk7XG5cbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZXQtcHJvamVjdC1idG5cIikpIHtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9XG59KTtcblxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmUtYnRuXCIpKSB7XG4gICAgaWYgKHRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIikpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPVxuICAgICAgICB0YXNrc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuICAgICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUVsZW1lbnQudmFsdWU7XG4gICAgICBsb2FkUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgcmVuZGVyVGFza3NFZGl0YWJsZSgpO1xuICAgICAgZW5hYmxlSW5wdXRzKCk7XG4gICAgfVxuICB9XG59KTtcblxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpLnZhbHVlO1xuICAgIGlmIChjaGVja01vcmVUaGFuT25lUHJvamVjdCgpKSB7XG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgcmVuZGVyVGFza3NFZGl0YWJsZSgpO1xuICAgICAgZW5hYmxlSW5wdXRzKCk7XG4gICAgICByZW1vdmVQcm9qZWN0SGVhZGVyKCk7XG4gICAgICBzY3JvbGxUb1RvcCh0YXNrc0NvbnRhaW5lcik7XG4gICAgICByZWxvYWRQcm9qZWN0SW5wdXRzKCk7XG4gICAgICBhY3RpdmF0ZVRhc2tiYXJCdG4oZXZlcnl0aGluZ0J0bik7XG4gICAgfVxuICB9XG59KTtcblxuLy9OT1RFUyBSRUxBVEVEXG5cbm5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJOb3Rlcyk7XG5ub3Rlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3AuYmluZChudWxsLCB0YXNrc0NvbnRhaW5lcikpO1xubm90ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlVGFza2JhckJ0bi5iaW5kKG51bGwsIG5vdGVzQnRuKSk7XG5cbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKFxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtbm90ZS1idG5cIikgfHxcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5hZGQtbm90ZS1idG5cIilcbiAgKSB7XG4gICAgYWRkTm90ZShcIk5ldyBOb3RlXCIpO1xuICAgIHJlbmRlck5vdGVzKCk7XG4gICAgcmVuZGVyTGF0ZXN0Tm90ZUVkaXRhYmxlKCk7XG4gICAgcmVuZGVyTm90ZXNFZGl0YWJsZSgpO1xuICAgIGVuYWJsZU5vdGVJbnB1dHMoKTtcbiAgICBzZWxlY3RMYXRlc3ROb3RlVGl0bGUoKTtcbiAgfVxufSk7XG5cbi8vRGVsZXRlIG5vdGVzXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZS1kZWxldGUtYnRuXCIpKSB7XG4gICAgZGVsZXRlTm90ZShldmVudC50YXJnZXQpO1xuICAgIHJlbmRlck5vdGVzKCk7XG4gICAgcmVuZGVyTm90ZXNFZGl0YWJsZSgpO1xuICAgIGVuYWJsZU5vdGVJbnB1dHMoKTtcbiAgfVxufSk7XG5cbi8vU2F2ZSBub3Rlc1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGUtZG9uZS1idG5cIikpIHtcbiAgICBjb25zdCBub3RlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubm90ZVwiKTtcbiAgICBjb25zdCBub3RlVGl0bGUgPSBub3RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS10aXRsZVwiKTtcbiAgICBjb25zdCBub3RlRGVzY3JpcHRpb25GaWVsZCA9IG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLWRlc2NyaXB0aW9uXCIpO1xuICAgIHNhdmVOb3RlKGV2ZW50LnRhcmdldCwgbm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcHRpb25GaWVsZC52YWx1ZSk7XG4gIH1cbn0pO1xuXG4vL0Rlc2VsZWN0IG5vdGUgdGl0bGVcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RlLWRvbmUtYnRuXCIpKSB7XG4gICAgY29uc3QgZWRpdGluZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGUtZWRpdGluZ1wiKTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgICBjb25zdCBidG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZWRpdGluZ0J0bnMsIGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3Qgbm90ZSA9IG5vdGVzW2J0bkluZGV4XTtcbiAgICBkZXNlbGVjdE5vdGVUaXRsZShub3RlKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGUtZWRpdC1idG5cIikpIHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZVwiKTtcbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBkZXNlbGVjdE5vdGVUaXRsZShub3RlKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vU2V0IG5vdGUgZWRpdCBmbGFnXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZS1lZGl0LWJ0blwiKSkge1xuICAgIGNvbnN0IG5vdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlLWVkaXRpbmdcIik7XG4gICAgY29uc3QgYnRuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG5vdGVCdG5zLCBldmVudC50YXJnZXQpO1xuICAgIHNldE5vdGVFZGl0RmxhZyh0cnVlLCBidG5JbmRleCk7XG4gIH1cbn0pO1xuXG4vL1VuLXNldCBub3RlIGVkaXQgZmxhZ1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGUtZG9uZS1idG5cIikpIHtcbiAgICBjb25zdCBub3RlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZS1lZGl0aW5nXCIpO1xuICAgIGNvbnN0IGJ0bkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChub3RlQnRucywgZXZlbnQudGFyZ2V0KTtcbiAgICBzZXROb3RlRWRpdEZsYWcoZmFsc2UsIGJ0bkluZGV4KTtcbiAgfVxufSk7XG5cbi8vU3dhcCBub3RlJ3MgZG9uZSBhbmQgZWRpdCBidXR0b25zXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZS1kb25lLWJ0blwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RlLWVkaXQtYnRuXCIpXG4gICkge1xuICAgIHJlbmRlck5vdGVzRWRpdGFibGUoKTtcbiAgICBlbmFibGVOb3RlSW5wdXRzKCk7XG4gICAgZGlzYWJsZU5vdGVJbnB1dHMoKTtcbiAgfVxufSk7XG5cbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZVwiKSkge1xuICAgIGNvbnN0IHRoaXNOb3RlID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0aGlzTm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtZWRpdC1idG5cIikpIHtcbiAgICAgIGNvbnN0IGVkaXRCdG4gPSB0aGlzTm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtZWRpdC1idG5cIik7XG4gICAgICBpZiAoZmluZE5vdGVFZGl0aW5nU3RhdHVzKCkpIHtcbiAgICAgICAgZWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==