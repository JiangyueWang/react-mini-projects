import { React, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import {
    SnapList,
    SnapItem,
  } from 'react-snaplist-carousel';
  

const MapImageTwo = (props) => {
    const snapList = useRef(null);
    const goToSnapItem = useScroll({ ref: snapList });

    const [current, setCurrent] = useState(0);

    const handleImgClick = (index) => {
        if(index === props.images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current => current + 1);
        }
        if (snapList.current) {
            snapList.current.scroll({ left: index * snapList.current.offsetWidth, behavior: 'smooth' });
        }
      }

    return ( 
        <div>
        <p> snap list and snap item</p>
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