describe("pruebas de <Democompomnent/>",()=>{
    test('prueba correcta', ()=>{
        const mensaje1 = "hola"
        const mensaje2 = mensaje1.trim()
        expect(mensaje1).toBe(mensaje2)
      })
})