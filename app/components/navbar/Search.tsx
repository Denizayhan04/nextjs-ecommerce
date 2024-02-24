"use client"
import { searchByInput } from '@/app/redux/searchSlice';
import { RootState } from '@/app/store/store';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux'



const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) =>  state.searchState.value )
  console.log(search);

  return (
    <div className='hidden md:flex flex-1 mx-8 md:max-w-screen-lg h-10 relative  items-center'>

      <form className='w-full h-8 flex items-center' onSubmit={(e) => {
        const input = e.currentTarget.querySelector("#textinput") as HTMLInputElement;
        dispatch(searchByInput(input.value))
        console.log(search)
        e.preventDefault()
      }}>
        <input maxLength={60} id='textinput' type='text' className='relative w-full h-full rounded-xl outline-none	px-5' placeholder='lütfen giriniz ' />
        <button type="submit" className='bg-white absolute right-4'><CiSearch size={28}></CiSearch></button>
      </form>

    </div>
  )
}

export default Search

