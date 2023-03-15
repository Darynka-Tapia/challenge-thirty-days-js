function protectDog(dog) {
    const dogClone = Object.assign({}, dog);
    Object.freeze(dogClone);

    for (let i in dogClone) {
        if( typeof dogClone[i] === 'object') Object.freeze(dogClone[i])
    }
    return dogClone;
}

const protected = protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
  })
  protected.name = "Toro"
console.log(protected.name )