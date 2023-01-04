export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
