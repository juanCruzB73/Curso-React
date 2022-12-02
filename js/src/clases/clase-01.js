import heroes, {owner} from "../data/superHeroes"

const getHeroesById = id => heroes.find(e => e.id === id)


export const getHeroesByOwner = owner => heroes.filter(e => e.owner === owner)

export default getHeroesById