import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
describe("pruebas en 08-imp-exp",()=>{
    //getElementById
    test("getHeroesById retorna un heroe",()=>{
        const id = 1
        const hero = getHeroeById( id )
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })
    test("getHeroesById retorna undefined si no esta el id",()=>{
        const id = 100
        const hero = getHeroeById( id )
        expect(hero).toBeFalsy()
    })
    //getHeroesByOwner
    test("getHeroesByOner devuelve 3 de DC",()=>{
        const owner = "DC"
        const hero = getHeroesByOwner(owner)
        expect(hero.length).toEqual(3)
    })
    test("getHeroesByOwwner devuelve 2 de Marvel",()=>{
        const owner = "Marvel"
        const hero = getHeroesByOwner(owner)
        expect(hero.length).toEqual(2)
    })
})