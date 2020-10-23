import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-play-64.png'
import plusIcon from '../assets/static/icons8-plus-64.png'

const CarouselItem = () => {
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="people" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="play icon" />
                    <img className="carousel-item__details--img" src={plusIcon} alt="more info icon" />
                </div>
                <p className="carousel-item__details--title">descriptive title</p>
                <p className="carousel-item__details--subtitle">2019  16+  114mins</p>
            </div>
        </div>
    );
}

export default CarouselItem;