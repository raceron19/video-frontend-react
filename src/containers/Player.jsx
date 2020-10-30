import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux';
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound';

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    
    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source  src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Back
                </button>
            </div>
        </div>
    )
    : <NotFound /> ;
}

const mapDispatchToProps = {
    getVideoSource,
}

const mapStateToPros = state => {
    return {
        playing: state.playing,
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Player);
