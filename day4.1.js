function findFamousCats(cats) {
    // Tu código aquí 👈
    let FamousMichis = [];
    let maxFollowers = 0;
    cats.forEach(( michi ) => {
        const totalFollowores = michi.followers.reduce((acumulador, numero) => acumulador + numero );
        const isFisrt = maxFollowers === 0;
        const isMayor = totalFollowores > maxFollowers;
        maxFollowers = isFisrt ? totalFollowores : (isMayor ? totalFollowores : maxFollowers);
    })
    let catsFilter = cats.filter((michi) => michi.followers.reduce((acumulador, numero) => acumulador + numero ) === maxFollowers )
    catsFilter.forEach(( michi ) => {
        FamousMichis.push(michi.name);
    })
    return FamousMichis
}
  
console.log(
    findFamousCats([
        {
            name: "Luna",
            followers: [500, 200, 300]
          },
          {
            name: "Michi",
            followers: [100, 300]
          },
    ]) 
);
