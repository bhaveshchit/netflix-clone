import React from 'react'
import Row from './Row'
import "./App.css"
import requests from './requests'

import Banner from  "./Banner"
import Nav from './Nav'
const App = () => {
  return (
    <div className='app'> 
 <Nav />
   <Banner />
    
    <Row 
    title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
      /> 
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
  
   </div>
  )
}

export default App