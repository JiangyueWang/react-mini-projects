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

    // onClick the image to change to loop through the image
    const handleImgClick = (index) => {
        if(index === props.images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current => current + 1);
        }
      }

    return (  
        <div>            

            <p onClick={preImg}>
                Previous
            </p> 
            
            {props.images.map(
                    (image, index) =>
                        current === index ? 
                            (<div key={image}>
                                <img src={image} alt="images" onClick={() => handleImgClick(index)} />
                            </div>) : null
            )}


            <p onClick={nextImg}> 
                Next
            </p>
            
            <div> 
                <h3>Function explain</h3>
                <p>click next/prev button to view the next/previous image</p>
                <p>click the image itself to loop through the images</p>
            </div>

            <div>
                <h3>
                    React concepts used
                </h3> 
                <ul>
                    <li>useState (storing and updating state)</li>
                    <li>Conditionals (ternaries)</li>
                    <li>Lists, keys, and .map()</li>
                    <li>handle onClick event</li>
                </ul>
                <p>Resource: <a href="https://www.freecodecamp.org/news/react-projects-for-beginners-easy-ideas-with-code/">React Projects for Beginners in 2023 – Fun Ideas with Code</a></p>
            </div>
        </div>

    );
}
 
export default MapImageOne;