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
var student = /** @class */ (function () {
    function student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    student.prototype.verify = function () {
        if (this.marks >= 35) {
            console.log("Student name is " + this.name + " and her marks is " + this.marks);
        }
        else {
            console.log('Failed');
        }
    };
    return student;
}());
exports.student = student;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name, marks, subject) {
        var _this = _super.call(this, id, name, marks) || this;
        _this.subject = subject;
        return _this;
    }
    return Teacher;
}(student));
var std = new Teacher(1, 'Pooja', 88, 'Maths');
//console.log('Student Marks is : ' +std.marks);
std.verify();
