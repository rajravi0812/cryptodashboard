import React from 'react';
import { useDispatch } from "react-redux";
import {currency} from "../Action/Action";

function Searchbar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid sm:grid-cols-6 gap-2 py-2 overflow-hidden">
            <div className="w-24 lg:col-span-1 md:col-span-2 col-span-3 shadow-md ">
              <select data-testid="convert_currency" onChange={(e)=>dispatch(currency(e.target.value))} className=" border-none rounded shadow-md  h-9 text-center outline-none  w-24">
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                  <option value="eth" >ETH</option>
              </select>
            </div>
            
            <div className="lg:col-span-5 md:col-span-4 col-span-3 w-full h-9 shadow flex rounded outline-none bg-white">
                  <div className='bg-slate-50 rounded-l'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="rgb(30 41 59)" className="bi bi-search m-2 " viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  </div>
                  <input type="text" className=" lg:w-4/5 w-full relative h-9 border-none rounded outline-none p-1" placeholder="Search coins" />
            </div>
          </div>
    </>
  )
}

export default Searchbar;
