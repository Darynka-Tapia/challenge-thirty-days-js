
function arrayModified() {
    Array.prototype.myFilter = function(condition) {
        const newArray = [];
        this.forEach(element => condition(element) && newArray.push(element));
        return newArray
    }
}  

arrayModified();

const arr = [
    {
      name: "Juan",
      age: 10,
    },
    {
      name: "Pedro",
      age: 20,
    },
    {
      name: "Maria",
      age: 30,
    },
  ];

  console.log(arr.myFilter((person) => person.age > 18) )