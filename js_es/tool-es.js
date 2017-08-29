"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
window.add = function (num) {
	return num + 1;
};

var libs = function () {
	function add(num) {
		return num + 1;
	}
	return {
		add: add
	};
}();

exports.default = libs;
