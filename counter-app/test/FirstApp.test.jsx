import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"
describe("pruebas en <FirstApp />",()=>{
    test("debe hacer el snapshot",()=>{
        const title = "titulo loco"
        render( <FirstApp title={title}/> )
    })
})