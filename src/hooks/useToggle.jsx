import { useState } from "react";

function useToggle(){
    const [alterna, setAlterna] = useState(true);

    function toggleAlternate(){
        setAlterna(!alterna)
    }

    return [alterna, toggleAlternate];
}

export default useToggle;