import { getSaludo } from "../../src/base-pruebas/02-template-string"
describe("pruebas en 02-template-string",()=>{

    test("getSaludo debe retornar",()=>{
        const nombre = "juan"
        const mensaje = getSaludo(nombre)
        expect(mensaje).toBe(`Hola ${nombre}`)
    })
})