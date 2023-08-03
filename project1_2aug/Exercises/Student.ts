interface School {
    study(): void;
}

class Student implements School {
    constructor(private name: string, private age: number) {
    }

    study(): void {
        console.log(this.name);
    }
}

class Class {
    students: School[];

    constructor() {
        this.students = [];
    }

    addStudent(student: School) {
        this.students.push(student);
    }

}

class CSStudent extends Student {
    constructor(name: string, age: number, private rollNo: number) {
        super(name, age);
    }

    study(): void {
        super.study();
        console.log(this.rollNo);
    }
}

const student1 = new Student('ab', 19);
const student2 = new CSStudent('cd', 20, 3);

const school = new Class();

school.addStudent(student1);
school.addStudent(student2);

school.students[0].study();
school.students[1].study();

for (const student of school.students) {
    student.study();
}
