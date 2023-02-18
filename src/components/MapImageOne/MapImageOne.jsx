import { React,useState} from 'react';
const MapImageOne = (props) => {
    // initialise the current state variable 
    const [current, setCurrent] = useState(0);
    
    // nextImg and preImg functions update current variable
    const nextImg = () => { 
        setCurrent(current === props.images.length - 1 ? 0 : current + 1)
    }
    const preImg = () => {
        setCurrent(current === 0 ? props.images.length - 1 : current - 1)
    }

    return (  
        <div>            
            <p onClick={nextImg}> 
                Next
            </p>
            
            {props.images.map(
                    (image, index) =>
                        current === index ? 
                            (<div key={image}>
                                <img src={image} alt="images" />
                            </div>) : null
            )}

            <p onClick={preImg}>
                Previous
            </p> 

            <div>
                <p>
                    React concepts used
                </p> 
                <ul>
                    <li>useState (storing and updating state)</li>
                    <li>Conditionals (ternaries)</li>
                    <li>Lists, keys, and .map()</li>
                </ul>
                <p>Resource: <a href="https://www.freecodecamp.org/news/react-projects-for-beginners-easy-ideas-with-code/">React Projects for Beginners in 2023 – Fun Ideas with Code</a></p>
            </div>
        </div>

    );
}
 
export default MapImageOne;