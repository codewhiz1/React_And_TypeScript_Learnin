let student: (a:string , b: string) => void;


student = (stu_name: string , section: string) => {
    console.log(`${stu_name} is in section ${section}`)
}

student("AAAAAAAAA", "B");

let calculations: (a: number , b: number , c: string) => number;

calculations = (numOne : number , numTwo: number , status: string) => {
    if(status === 'active'){
        return numOne + numTwo;
    }else {
        return numOne - numTwo;
    }
}

console.log(calculations(87 , 25 , 'active'));



let studentDetails:(obj : {names_12: string , sub: string }) => void;



studentDetails = (students: {names_12: string , sub: string}) => {
    console.log(`${students.names_12} have the subject ${students.sub}`);
}

//console.log(studentDetails.students{"AAAAAAAAA", "Maths"});
