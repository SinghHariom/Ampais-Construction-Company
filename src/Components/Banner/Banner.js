//import styles from './Banner.module.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCarouselCaption = styled(Carousel.Caption)`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;

    h3 {
        color: green;
    }

    .btn-success {
        background-color: green;
        border: none;

        &:hover {
            background-color: darkgreen;
        }
    }
`;

const Banner = () => {
    return (
      <section className='Bannersubhero'>
        <Carousel>
            <Carousel.Item>
                <StyledCarouselCaption>
                    <h3>WHAT ARE THE MAINTENANCE CHARGES FOR ARTIFICIAL FOOTBALL GRASS?</h3>
                    <button className="btn btn-success">GET SOLUTION HERE</button>
                </StyledCarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <StyledCarouselCaption>
                    <h3>ANOTHER IMPORTANT MESSAGE</h3>
                    <button className="btn btn-success">LEARN MORE</button>
                </StyledCarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <StyledCarouselCaption>
                    <h3>YET ANOTHER MESSAGE</h3>
                    <button className="btn btn-success">DISCOVER NOW</button>
                </StyledCarouselCaption>
            </Carousel.Item>
        </Carousel>
        </section>
    );
};

export default Banner;
