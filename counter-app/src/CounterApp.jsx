import {useState} from "react"
import PropTypes from "prop-types"

export const CounterTypes = ({value})=>{

    const [counter, setCounter] = useState(value)
    const sumar = ()=> setCounter(counter + 1)
    const restar = ()=> counter > 0 ? setCounter(counter - 1) : 0
    const reset = ()=> setCounter(value)
    return(
    <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={ sumar }>+1</button>
        <button onClick={ restar }>-1</button>
        <button onClick={ reset }>reset</button>
    </>
    )
}
CounterTypes.propTypes = {
    value: PropTypes.number
}