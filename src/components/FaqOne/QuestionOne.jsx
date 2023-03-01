import { useState } from "react";
const QuestionOne = (props) => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (  
    <div>
        <p>{props.question.title}</p>
        <button onClick={handleClick}>{isOpen ? "-" : "+"}</button>
        {isOpen === true ? (<p>{props.question.info}</p>) : null}
    </div>
    );
}
 
export default QuestionOne;