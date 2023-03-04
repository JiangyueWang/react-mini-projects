import { useState } from "react";

const FaqTwo = (props) => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if(selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }

    return (
    <div>
        <h3>Frequently Asked Questions</h3>
        {props.questions.map((question, index) => (
            
            <div>
                   <p>{question.title}</p> 
                    <button onClick={() => toggle(index)}>{selected === index ? '-' : '+'}</button> 
                
                <div className={selected === index ? 'content show' : 'content'}>
                    {question.info}
                </div>
            </div>
        ))}
    </div>  );
}
 
export default FaqTwo;