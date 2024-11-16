// import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const images = [
        'http://localhost:5102/images/1.jpg',
        'http://localhost:5102/images/2.jpg',
        'http://localhost:5102/images/3.jpg',
        'http://localhost:5102/images/4.jpg',
    ];

    return (
        <div className="bg-gray-100 p-5">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="px-2">
                        <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg shadow-md" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
