import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-play-64.png'
import plusIcon from '../assets/static/icons8-plus-64.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration } = props;
    const handleSetFavorite = () => {
        props.setFavorite(
            {
                id, cover, title, year, contentRating, duration
            }
        )
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            className="carousel-item__details--img"
                            src={playIcon}
                            alt="play icon"
                        />
                    </Link>
                    {!props.myList &&
                        <img
                            className="carousel-item__details--img"
                            src={plusIcon}
                            alt="Plus Icon"
                            onClick={handleSetFavorite}
                        />
                    }
                    {props.myList &&
                        <img
                            src={removeIcon}
                            className="carousel-item__details--img"
                            alt="Remove Icon"
                            onClick={() => handleDeleteFavorite(id)}
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year}  ${contentRating}  ${duration}`}
                </p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);
