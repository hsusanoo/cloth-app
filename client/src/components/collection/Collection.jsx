import React from 'react';
import Slider from 'react-slick';

import CollectionItem from './CollectionItem';
import More from './More';

import {
    CollectionContainer,
    CollectionTitle,
    SliderContainer,
} from './collection.styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Collection = ({ title, items, routeName }) => {
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
        <CollectionContainer>
            <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
            <SliderContainer>
                <Slider {...settings}>
                    {items
                        .filter((item, index) => index < 6)
                        .map((item, index) => (
                            <CollectionItem key={index} item={item} />
                        ))}
                    <More routeName={routeName} />
                </Slider>
            </SliderContainer>
        </CollectionContainer>
    );
};
export default Collection;
