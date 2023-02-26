export function getStudentAverage(students) {
  // Tu código aquí 👈
  let studentsAverage = [];
  students.forEach((student) => {
    const sumGrades = student.grades.reduce((acumulador, numero) => acumulador + numero);
    const average = sumGrades / student.grades.length;
    studentsAverage.push({ name: student.name, average: parseFloat(average.toFixed(2)) });
  })
  let sumStudentsAverage = studentsAverage.reduce((acumulador, numero) => (acumulador + numero.average), 0);
  let classAverage = parseFloat((sumStudentsAverage / studentsAverage.length).toFixed(2));
  
  return { classAverage, students: [...studentsAverage ]}
}

getStudentAverage([
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
])