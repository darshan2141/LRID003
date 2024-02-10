import React from 'react'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='py-5'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<MovieList />} />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
