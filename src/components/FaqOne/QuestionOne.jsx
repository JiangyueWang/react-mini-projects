import { useState } from "react";
const QuestionOne = (props) => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (  
        <section>
            <div className="question">
                <div className="flex">
                    <p>{props.question.title}</p>
                    <div>
                        <button onClick={handleClick}>{isOpen ? "-" : "+"}</button>
                    </div>
                    
                </div>
                {isOpen === true ? (<p>{props.question.info}</p>) : null}
            </div>
        </section>

    );
}
 
export default QuestionOne;