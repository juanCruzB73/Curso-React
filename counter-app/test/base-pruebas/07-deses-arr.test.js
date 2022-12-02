import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe("07-deses-array",()=>{
    test("debe retornar un string y un numero",()=>{
        const [letras, numeros] = retornaArreglo()
        expect(typeof letras).toBe("string")
        expect(typeof numeros).toBe("number")
    })
})