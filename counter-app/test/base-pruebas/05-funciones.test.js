import {getUser,getUsuarioActivo} from "../../src/base-pruebas/05-funciones"

describe("prueba 05-funciones",()=>{

    test("get user retorna",()=>{
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
    const user = getUser()
    expect(testUser).toEqual(user)//para comparar objetos
    })

    test("getUsuarioActivo retorna",()=>{
        const name = getUsuarioActivo()
        const ejemplo = {
            uid: 'ABC567',
            username: name.nombre
        }
    expect(ejemplo).toStrictEqual(name)
    })
})