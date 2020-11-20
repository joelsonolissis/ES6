const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
   MAN: Symbol('M'),
   WOMAN: Symbol('W')
}

const persons = [
    {
        name:'Guilherme',
        age: 27,
        gender: gender.MAN
    },
    
    {
        name: 'Pedro',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 22,
        gender: gender.WOMAN
    }

];
// retornar a quantidade de itens de un array
console.log('Items: ', persons.length);

// Verificar se é array
console.log(' A variavel persosn é um array ? :', Array.isArray(persons));

// Interrar os itens do array
persons.forEach( (person, index, arr) => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Lista apenas com homens: ', mens);

// Juntando operações 
const totalEvenAges = persons 
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person)=>{
                                age += person.age;
                                return age;
                            }, 0);

                            console.log('\n Some de idades das pessoas que possuem idades par', totalEvenAges);