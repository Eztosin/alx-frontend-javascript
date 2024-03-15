interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsofExperience?: number;
location: string;
[key: string]: any;

const teacher3: Teacher = {
firstName: 'Oluwatosin',
lastName: 'Ezekiel',
fullTimeEmployee: false,
location: 'Canada',
contract: false,
};

interface Directors extends Teacher {
numberOfReports: number;
}

const director1: Directors = {
firstName: 'John',
lastName: 'Doe',
fullTimeEmployee: true,
location: 'London',
numberOfReports: 17,
};

interface printTeacherFunction {
(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
const firstLetter = firstName.charAt(O).toUpperCase();
const fullName = `${firstLetter}. ${lastName}`;
return fullName;
};

console.log(printTeacher("Joshua", "Doe"));

console.log(teacher3);
console.log(director1);


