import React, { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'


import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3001/initalState';

const App = () => {
    
    const initialState = useInitialState(API);
    return (
        <div className="App">
            <Header />
            <Search />
            {
                initialState.mylist.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                    {
                        initialState.mylist.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                    </Carousel>
                </Categories>
            }
            <Categories title="New">
                <Carousel>
                    {
                        initialState.trends.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }

                </Carousel>
            </Categories>
            <Categories title="Specials">
                <Carousel>
                    {
                        initialState.originals.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

export default App;