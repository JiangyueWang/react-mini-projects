import React, { useState, useEffect, useRef} from "react";
const UseRefComponent = () => {

    const [nameOne, setNameOne] = useState(""); 
    const renderCount = useRef(0);   

    const inputRef = useRef();
    function focus() {
        inputRef.current.focus();
    }

    const prevName = useRef("");
    useEffect(() => {
        renderCount.current ++;
        prevName.current = nameOne;
    },[nameOne])

    return (  
        <div>
            <div>
                <p>keys of ref</p>
                <ul>
                    <li>
                         ref does cause component re-render
                    </li>
                </ul>
            </div>
            <h2>useRef use cases</h2>
            <div>
                <h3>useRef use case one</h3>
                <p>count how many times a component has been render</p>
                <div>
                    <input ref={inputRef} value={nameOne} onChange={e => setNameOne(e.target.value)}></input> 
                    <p>my name is {nameOne}</p> 
                    <p>I rendered {renderCount.current} times</p>
                </div>
            </div>
            <div>
                <h3>useRef use case two</h3>
                <p>reference elements inside HTML</p>
                <div>
                    <p>click the button below to bring focus to the input</p>
                    <button onClick={focus}>Focus</button>
                </div>
            </div>
            <div>
                <h3>useRef use case three</h3>
                <p>store previous value of a state variable</p>
                <div>
                    <p>my name is {nameOne} </p>  
                    <p>{prevName.current}</p>it used to be 
                </div>
            </div>

        </div>
    );
}
 
export default UseRefComponent ;