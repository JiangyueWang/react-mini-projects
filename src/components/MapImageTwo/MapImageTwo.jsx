import { React, useRef, useState } from 'react';

import {
    SnapList,
    SnapItem,
  } from 'react-snaplist-carousel';
  

const MapImageTwo = (props) => {
    const snapList = useRef(null);

    const [current, setCurrent] = useState(0);

    const handleImgClick = (index) => {
        if(index === props.images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current => current + 1);
        }
        if (snapList.current) {
            snapList.current.scroll();
        }
      }

    return ( 
        <div>
        <p> snap list and snap item</p>
        {/* The SnapList component provides the list container that holds the images, 
        and the SnapItem component is used to wrap each image in the list. */}
            <SnapList ref={snapList}> 
            
                {props.images.map((image, index) => (
                    <SnapItem key={image}>
                    {current === index ? (
                        <img src={image} alt="images" onClick={() => handleImgClick(index)} />
                    ) : null}
                    </SnapItem>
                ))}
            </SnapList>
        </div>
    );
}
 
export default MapImageTwo;