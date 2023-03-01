import { React, useRef } from 'react'

import {
    SnapList,
    SnapItem,
    useScroll,
    useDragToScroll
  } from 'react-snaplist-carousel';
  

const MapImageTwo = (props) => {
    const snapList = useRef(null);
    // Once goToSnapItem is called with a specific index, it will scroll the SnapList to the corresponding SnapItem in the list. 
    const goToSnapItem = useScroll({ ref: snapList });
    const { isDragging } = useDragToScroll({ ref: snapList, disable: false });

    return ( 
        <div>
        <p>{isDragging ? 'Dragging' : 'No dragging'}</p>
        {/* The SnapList component provides the list container that holds the images, 
        and the SnapItem component is used to wrap each image in the list. */}
            <SnapList ref={snapList}> 
            
                {props.images.map((image, index) => (
                    <SnapItem margin={{ left: '15px', right: '15px' }} key={image} >
                        
                        {index === props.images.length - 1 ? 
                            <img src={image} alt="images" onClick={() =>  goToSnapItem(0)}/> :
                            <img src={image} alt="images" onClick={() =>  goToSnapItem(index + 1)}/>
                        }
                    </SnapItem>
                    ) 
                )}
            </SnapList>

            <div>
                <h3>Function explain</h3> 
                <p>click the image will swip to the next one</p>
                <p>once click on the last image will return to the first image</p>
                <p>click the image then drag to left or right</p>
            </div>
            
            <div>
                <h3>
                    React concepts used
                </h3> 
                <ul>
                    <li>react-snaplist-carousel package</li>
                    <li>handle onClick event</li>
                </ul>
                <p>Resource: <a href="https://www.npmjs.com/package/react-snaplist-carousel">react-snaplist-carousel
</a></p>
            </div>
        </div>
    );
}
 
export default MapImageTwo;