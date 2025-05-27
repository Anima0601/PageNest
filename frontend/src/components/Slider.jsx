import React from 'react';
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from './../assets/list.json';
import SlickSlider from "react-slick"; 

function Slider() {
    const Datafilter = list.filter((data) => data.price === "Free");
    console.log(list);
    console.log(Datafilter);

    var settings = { 
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max w-screen-2xl container mx-auto mt-4 md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-2xl mt-6'>Free Books</h1>
                <p className='font-serif mt-1'>Read and enjoy a wide range of our free books anywhere,anytime.</p>
            </div>
            <div>
                <SlickSlider {...settings}>
                    {Datafilter.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
}

export default Slider;
