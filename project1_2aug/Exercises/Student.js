var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.study = function () {
        console.log(this.name);
    };
    return Student;
}());
var Class = /** @class */ (function () {
    function Class() {
        this.students = [];
    }
    Class.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    return Class;
}());
var CSStudent = /** @class */ (function (_super) {
    __extends(CSStudent, _super);
    function CSStudent(name, age, rollNo) {
        var _this = _super.call(this, name, age) || this;
        _this.rollNo = rollNo;
        return _this;
    }
    CSStudent.prototype.study = function () {
        _super.prototype.study.call(this);
        console.log(this.rollNo);
    };
    return CSStudent;
}(Student));
var student1 = new Student('ab', 19);
var student2 = new CSStudent('cd', 20, 3);
var school = new Class();
school.addStudent(student1);
school.addStudent(student2);
school.students[0].study();
school.students[1].study();
for (var _i = 0, _a = school.students; _i < _a.length; _i++) {
    var student = _a[_i];
    student.study();
}
