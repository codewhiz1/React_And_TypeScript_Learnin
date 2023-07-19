"use strict";
let student;
student = (stu_name, section) => {
    console.log(`${stu_name} is in section ${section}`);
};
student("AAAAAAAAA", "B");
let calculations;
calculations = (numOne, numTwo, status) => {
    if (status === 'active') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calculations(87, 25, 'active'));
let studentDetails;
studentDetails = (students) => {
    console.log(`${students.names_12} have the subject ${students.sub}`);
};
//console.log(studentDetails.students{"AAAAAAAAA", "Maths"});
