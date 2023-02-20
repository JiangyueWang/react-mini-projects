import { React, useRef, useState } from 'react'

import {
    SnapList,
    SnapItem,
    useScroll,
  } from 'react-snaplist-carousel';
  

const MapImageTwo = (props) => {
    const snapList = useRef(null);
    // Once goToSnapItem is called with a specific index, it will scroll the SnapList to the corresponding SnapItem in the list. 
    const goToSnapItem = useScroll({ ref: snapList });

    return ( 
        <div>
        <p> snap list and snap item</p>
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
        </div>
    );
}
 
export default MapImageTwo;