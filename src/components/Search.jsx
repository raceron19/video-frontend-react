import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => {
    const mainTitle = "What you want to see today?";
    const inputPlaceholder = "Search... "
    return (
        <section className="main">
            <h2 className="main__title">{mainTitle}</h2>
            <input className="input" type="text" placeholder={inputPlaceholder} />
        </section>
    )
}

export default Search;