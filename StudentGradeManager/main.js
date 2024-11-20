class Student {
    constructor(name, age) {
        this.name = name
        this.age = age;
        this.gradeList = [];
    }

    addGrade(...numbers) {
        this.gradeList.push(...numbers);
    }

    getAverage() {
        const sum = this.gradeList.reduce((acc, num) => acc + num);
        const average = sum / this.gradeList.length;
        console.log(`Average grade of student ${this.name} = ${average}`);
    }
}

const student = new Student('John', 25);
student.addGrade(1, 2, 3);
student.getAverage();