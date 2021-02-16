const person = {
    name: 'Joy',
    age: 29
}
const data = JSON.stringify(person);

const dataParsed = JSON.parse(data);
console.log(dataParsed.name);
