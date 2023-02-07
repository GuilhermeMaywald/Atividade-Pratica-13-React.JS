import useCounter from "../hooks/useCounter"

function Contador(){
    const {count, increment, decrement} = useCounter();
    return(
        <div>
            <button onClick={() => increment()}>Increment</button>
            <span>{count}</span>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default Contador