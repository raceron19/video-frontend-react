import React from 'react'
import { connect } from 'react-redux';
import { searchVideos } from '../actions'
import '../assets/styles/components/Search.scss'

const Search = props => {
    const mainTitle = "What you want to see today?";
    const inputPlaceholder = "Search... "

    const handleSearch = event => {
        props.searchVideos(event.target.value);
    }
    return (
        <section className="main">
            <h2 className="main__title">{mainTitle}</h2>
            <input 
                className="input" 
                type="text" 
                placeholder={inputPlaceholder} 
                onChange={handleSearch}
            />
        </section>
    )
}

const mapDispatchToProps = {
    searchVideos,
}

export default connect(null, mapDispatchToProps)(Search);