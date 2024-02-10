import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function MovieList() {

  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('iron');

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=299857d5&s=${search}`).then((res) => {
      if (!res.ok) {
        throw new Error("Somthing wrong");
      }
      return res.json();
    }).then((res) => {
      console.log(res.totalResults / 10);
      setMovies(res.Search);
    })
      .catch((err) => { console.log(err); })
  }, [search])

  const handleOnChangeSearch = (data) => {
    if (data == "") {
      setSearch('iron');
    } else {
      setSearch(data);
    }
  }

  return (
    <div>
    <h1 className='text-center text-[40px] font-semibold pb-4'> Movie Seach Application</h1>
      <SearchBar handleOnChangeSearch={handleOnChangeSearch} />

      <div className='flex flex-wrap justify-start gap-[20px] sm:gap-[20px]  md:gap-[20px] p-5'>
        {
          movies?.map((movie, index) => (
            <div key={index} onClick={() => { navigate(`/movie-details/${movie.imdbID}`) }} className=' cursor-pointer bg-red-300
            w-[calc(100%/2-10px)] sm:w-[calc(100%/3-14px)] md:w-[calc(100%/3-14px)] lg:w-[calc(100%/5-16px)] flex justify-center'>
              <img className='border w-full aspect-[1/1.5]  object-cover' src={movie.Poster} alt={movie.Title} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
