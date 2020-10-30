import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Categories from '../components/Categories'
import Search from '../components/Search'


import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'
import Header from '../components/Header';


const Home = ({ filtered, myList, trends, originals }) => {
    const isSerching = filtered.length > 0;
    return (
        <div className="App">
            <Header />
            <Search />
            {
                 isSerching ?
                 <Categories title={`Results: found ${filtered.length} results that match your search`} >
                     <Carousel>
                         {
                             filtered.map(
                                 item => <CarouselItem key={item.id} {...item} />
                             )
                         }
                     </Carousel>
                 </Categories>
                 :
                myList.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        {
                            myList.map(
                                item => <CarouselItem key={item.id} {...item} myList={true} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            <Categories title="New">
                <Carousel>
                    {
                        trends.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }

                </Carousel>
            </Categories>
            <Categories title="Specials">
                <Carousel>
                    {
                        originals.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        filtered: state.filtered,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);
