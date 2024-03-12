export default function getStudentsByLocation(studentLists, city) {
  return studentLists.filter((student) => student.location === city);
}
