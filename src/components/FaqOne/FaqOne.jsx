import QuestionOne from "./QuestionOne";

const FaqOne = (props) => {
    return (
        <div >
            <div className="container">
            <h3>Frequently Asked Questions</h3>
            <div className="questions">
                {props.questions.map(question => (
                <QuestionOne question={question}/>
            ))}
            </div>
            </div>
            <div> 
                <h3>Function explain</h3>
                <p>click "+" button to expand the answer</p>
                <p>click "-" to collapse the answer</p>
            </div>

            <div>
                <h3>
                    React concepts used
                </h3> 
                <ul>
                    <li>Toggling state with useState</li>
                    <li>Passing data to components via props</li>
                    <li>Displaying multiple components with .map()</li>
                    <li>handle onClick event</li>
                </ul>
                <p>Resource: <a href="https://www.freecodecamp.org/news/react-projects-for-beginners-easy-ideas-with-code/">React Projects for Beginners in 2023 – Fun Ideas with Code</a></p>
            </div>
        </div>
    );
}
 
export default FaqOne;