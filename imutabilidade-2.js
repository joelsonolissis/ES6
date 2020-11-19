const students = [
    {
        name: 'Joelson Morais',
        grade: 7

    },
    {
        name: 'Fábio Oliveira',
        grade: 10
    },
    {
        name: 'Anna Karynna',
        grade: 5
    },
    {
        name: 'Daniela Cassoma',
        grade: 20
    },
    {
        name: 'Paulo Ferreira',
        grade: 0
    },
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >=7);
}
console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\n Lista de alunos: ');
console.log(students);