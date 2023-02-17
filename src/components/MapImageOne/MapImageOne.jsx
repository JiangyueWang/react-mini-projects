import { React,useState} from 'react';
const MapImageOne = (props) => {
    const [current, setCurrent] = useState(0);
    
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
                previous
            </p> 
        </div>

    );
}
 
export default MapImageOne;