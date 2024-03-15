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

console.log(teacher3);
