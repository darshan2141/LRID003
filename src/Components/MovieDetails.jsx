import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=299857d5&i=${id}`).then((res) => {
      if (!res.ok) {
        throw new Error("Somthing wrong");
      }
      return res.json();
    }).then((res) => {
      console.log(res);
      setMovie(res);
    })
      .catch((err) => { console.log(err); })
  }, []);

  return (
    <div className='px-5'>

      <div className='border-b-2 pb-4'>
        <div className=' flex items-center gap-5 cursor-pointer w-fit' onClick={() => { navigate(-1) }}>
          <FaArrowLeftLong size={25} />
          <p className='text-[18px] font-semibold'>Back</p>
        </div>
      </div>

      <div className='pt-5 flex flex-col md:flex-row gap-10'>
        <div className='flex justify-center flex-1'>
          <img src={movie?.Poster} alt="" />
        </div>
        <div className='flex-1'>
            <h1 className='text-[30px] leading-[22px] font-semibold mb-5'>{movie?.Title}</h1>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>Genre :</span> { movie?.Genre}</h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>Actors :</span> { movie?.Actors} </h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>imdbRating :</span> { movie?.imdbRating} / 10</h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>Language :</span> { movie?.Language} </h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>Released :</span> { movie?.Released} </h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>Country :</span> { movie?.Country}</h2>
            <h2 className='text-[16px] leading-[18px] font-semibold mb-3'><span className='text-[20px]'>BoxOffice :</span> { movie?.BoxOffice}</h2>
        </div>
      </div>
    </div>
  )
}
