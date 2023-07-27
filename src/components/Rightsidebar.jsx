import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { sidbarApi, } from "../Action/Action";
import Scrollsidebar from './Scrollsidebar';
import {setLoadingBar, setSuccessBar } from "../Action/Action"; 
import axios from 'axios';

function Rightsidebar() {
  const setCur = useSelector((state)=>state.setCurrency);
  const setData = useSelector((state)=>state.reducerSidbar);
  const loadingState = useSelector((state)=>state.loadingSidebar);
  const dispatch= useDispatch();

  //calling an api using axios and useEffect to optimize the code.
    useEffect(()=>{
            const sidebarData = async ()=>{
            dispatch(setLoadingBar(true));
            const response = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${setCur}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`);
              dispatch(setLoadingBar(false));
              dispatch(setSuccessBar(true));
              dispatch(sidbarApi(response.data));
            }
        try{
          sidebarData();
        }catch(err){
          console.log(err);
        }
        
        // eslint-disable-next-line
    },[setCur])

  return (
    <div>
      <div className='grid grid-rows-10 mt-2 scroll-auto'>
        <div className='p-4 font-bold text-xl bg-white rounded-t-md shadow'>Top Cryptocurrency By Market Cap</div>

            {/* Here is the code of coin list of 100 to show in right of webpage using map method */}
        <div className='scroll overflow-y-auto  shadow-md rounded-md'>
        {setData && setData.map((data)=>
            <div className=' grid-rows-2 gap-2 pt-2 pb-2 bg-white rounded mb-2 shadow ' key={data.id}>
            <div className=' grid-cols-3 flex'>
                <div className='text-left pl-3 font-medium text-stone-600 w-4/5 flex '>{data.name} 
                  <img alt='coin' src={data.image} className='h-8 w-9 p-1'/>  
                </div>
                <div className='mt-1 relative text-right w-1/5'>
                            {data.market_cap_change_percentage_24h > 0 ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-caret-up-fill float-right" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-caret-down-fill float-right"  viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>} 
                </div>
                <div className='text-left pl-1 pr-2 text-stone-800 text-sm '>{data.market_cap_change_percentage_24h.toFixed(2)}%</div>
            </div>
            
            {/* Here we add loader page */}
            {(loadingState.loaded)? <Scrollsidebar/> :
            <div className='text-left pl-3  font-medium text-sm'>
              <strong className='text-stone-700'>Mkt.Cap:</strong>
               <span className='text-stone-500'> {data.market_cap} <strong className='text-black'>{setCur==="usd"?"$":(setCur==="inr")?"₹":"Ξ"}</strong></span> 
            </div>}
            </div>
        )}
        </div>
        
      </div>
    </div>
  )
}

export default Rightsidebar;
