"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Student_1 = require("./Student");
var principal = /** @class */ (function (_super) {
    __extends(principal, _super);
    function principal(id, name, marks) {
        return _super.call(this, id, name, marks) || this;
    }
    return principal;
}(Student_1.student));
var pp = new principal(2, 'Sanju', 26);
console.log("Principal name is : " + pp.name);
