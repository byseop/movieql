export const people = [
    {
        id: 1,
        name: "Bae youngseop",
        age: 26,
        gender: "male"
    },
    {
        id: 2,
        name: "AAA",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "BBB",
        age: 30,
        gender: "male"
    },
    {
        id: 4,
        name: "CCC",
        age: 40,
        gender: "female"
    },
    {
        id: 5,
        name: "DDD",
        age: 50,
        gender: "male"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};