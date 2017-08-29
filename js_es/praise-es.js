"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(startNum, maxNum, dom) {
        _classCallCheck(this, PraiseButton);

        this.startNum = startNum;
        this.maxNum = maxNum;
        this.dom = document.getElementById(dom);
    }

    _createClass(PraiseButton, [{
        key: "action",
        value: function action() {
            var _this = this;

            this.dom.onclick = function () {
                if (_this.maxNum > _this.startNum) {
                    _this.startNum = add(_this.startNum);
                    alert("\u70B9\u8D5E\u4E86" + _this.startNum + "\u6B21");
                } else {
                    _this.startNum = 0;
                    alert("超过次数了");
                }
            };
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(startNum, maxNum, dom) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, startNum, maxNum, dom)); //es6一定要写 不然报错
    }

    return Thumb;
}(PraiseButton);

exports.default = { Thumb: Thumb };

//其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，
//自然default只能有一个值，所以一个文件内不能有多个export default。
//本质上，a.js文件的export default输出一个叫做default的变量，
//然后系统允许你为它取任意名字。
//所以可以为import的模块起任何变量名，且不需要用大括号包含
