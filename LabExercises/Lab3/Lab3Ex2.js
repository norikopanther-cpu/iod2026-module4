//Exercise2
const data = [
    {name: 'Bob', age: 23}, 
    {name: 'Alice', age: 39}
]
data.forEach(
    person => addCard(person.name, `Age: ${person.age}`)
)
