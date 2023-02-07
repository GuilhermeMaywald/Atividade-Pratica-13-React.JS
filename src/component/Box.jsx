import useToggle from "../hooks/useToggle";
import "./box.css";

function Box(){
    const [alterna, toggleAlternate] = useToggle()
    return(
        <div className={alterna ? 'box red' : 'box blue'}>
            <button onClick={() => toggleAlternate()}>Mudar</button>
        </div>
    )
}

export default Box;