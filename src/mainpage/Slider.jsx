import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Wraper from '../component/Wraper';

const Slider = () => {
    const carouselContainer = useRef();
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth)
                : container.scrollLeft + (container.offsetWidth);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    const gotofirst = () => {
        const container = carouselContainer.current;
        container.scrollTo({
            left: 0,
            behavior: 'smooth',
        });

    }
    const [count, setCount] = useState(6);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count === 0) {
                gotofirst();
                setCount(6)
            } else {
                navigation("right");
                setCount(count - 1)
            }
        }, 3000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
    return (
        <>
           <Wraper>

            <div className='slider-main-box' ref={carouselContainer} style={{marginTop:"50px"}}>
                <div className="slider-box" >
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>
                <div className="slider-box">
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>
                <div className="slider-box">
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>
                <div className="slider-box">
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>
                <div className="slider-box">
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>
                <div className="slider-box">
                    <div className="slider-con" >
                        <img src="imges\slider img.jpg" alt="imgs" />

                    </div>
                </div>

            </div>
           </Wraper>
        </>
    )
}

export default Slider
