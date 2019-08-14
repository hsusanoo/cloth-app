import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './collection.scss';
import CollectionItem from './CollectionItem';

const Collection = ({ title, items }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div className='collection'>
            <h1 className='collection-title'>{title.toUpperCase()}</h1>
            <div className='slider-container'>
                <Slider {...settings} className='collection-preview'>
                    {items.map((item, index) => (
                        <CollectionItem key={index} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default Collection;
