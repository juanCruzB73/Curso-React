import getHeroesById from "./clases/clase-01"

/*const promesa = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    const heroe = getHeroesById(1)
    resolve(heroe)//resolve le manda los datos al then
    reject("no se encontro el heroe")
  },2000)
});

promesa.then((heroe)=>{
  console.log("promesa cumplida", heroe)
})
.catch(err => console.warn(err))
*/
const getHeroesByIdAsync = (id)=>{
  return new Promise ((resolve,reject)=>{//resolve manda datos al then y reject viseversa
    setTimeout(()=>{
      const heroe = getHeroesById(id)
      let heroes = heroe ? resolve(heroe) : reject("no se encontro el heroe")
    },2000)
  });
}

getHeroesByIdAsync(1)
.then(console.log)
.catch(console.warn)