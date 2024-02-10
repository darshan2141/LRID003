import React from 'react'

export default function SearchBar({ handleOnChangeSearch }) {
    return (
        <div className='mb-5 mx-5 flex items-center border-4 pe-3'>
            <input type="text" placeholder='Search movie name'
                onChange={(e) => { handleOnChangeSearch(e.target.value) }}
                className='focus:outline-none w-full px-3 py-3' />
        </div>
    )
}
