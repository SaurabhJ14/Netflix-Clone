import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowId='1' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowId='2' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowId='4' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowId='3' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowId='5' title='Thrilling' fetchURL={requests.requestAny} />
        </>
    )
}

export default Home