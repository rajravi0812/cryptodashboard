import React from 'react';
import LineGraph from './LineGraph';
import {cryptoSwitch,graphSwitch, oneAction, monthAction,threeAction,weekAction,sixAction,yearAction} from "../Action/Action";
import { useDispatch, useSelector } from 'react-redux';
import AreaGraph from './AreaGraph';
import VertGraph from './VertGraph';


function Graphbar() {
  const setgraph = useSelector((state)=>state.gSwitch)//reducer
  const dispatch = useDispatch();
  return (
    <div className='grid grid-rows-8 bg-white shadow-md rounded-lg '>
      <div className=' row-span-1'>
        <div className='grid lg:grid-cols-5 grid-cols-2 '>
          <div className='col-span-3 grid sm:grid-cols-2 justify-center p-2 '>
              <div className=' p-2 sm:text-right'>
              <input  onClick={()=>{dispatch(oneAction())}} type="radio" className='hidden' id='radio1' name='days' value="1D"  />
              <label className=' h-8 w-10 bg-slate-100 btn1 bt shadow-md p-1 px-2 rounded text-grey-900 font-medium cursor-pointer mr-3 ' htmlFor='radio1'>1D</label>

              <input onClick={()=>{dispatch(weekAction())}} type="radio" className='hidden' id='radio2' name='days' value="1W"  />
              <label className='  h-8 w-10 bg-slate-100 btn2 bt shadow-md p-1 px-2 mx-4 rounded text-grey-900 cursor-pointer mr-3 font-medium' htmlFor='radio2'>1W</label>

              <input onClick={()=>{dispatch(monthAction())}} type="radio" className='hidden' id='radio3' name='days' value="1M"   />
              <label className=' h-8 w-10 bg-slate-100 btn3 bt shadow-md p-1 px-2 mx-4 rounded text-grey-900 font-medium cursor-pointer mr-3' htmlFor='radio3'>1M</label>
              </div>

              <div className=' p-2 sm:text-left'>
              <input onClick={()=>{dispatch(threeAction())}} type="radio" className='hidden' id='radio4' name='days' value="3M"/>
              <label className=' h-8 w-10 bg-slate-100 btn4 bt shadow-md p-1 px-2 rounded text-grey-900 font-medium cursor-pointer mr-3' htmlFor='radio4'>3M</label>

              <input onClick={()=>{dispatch(sixAction())}} type="radio" className='hidden' id='radio5' name='days' value="6M" />
              <label className=' h-8 w-10 bg-slate-100 btn5 bt shadow-md p-1 px-2 mx-4 rounded text-grey-900 font-medium cursor-pointer mr-3' htmlFor='radio5'>6M</label>

              <input onClick={()=>{dispatch(yearAction())}}  type="radio" className='hidden' id='radio6' name='days' value="1Y" />
              <label className= ' h-8 w-10 bg-slate-100 btn6 bt shadow-md p-1 px-2 mx-4 rounded text-grey-900 font-medium cursor-pointer mr-3' htmlFor='radio6'>1Y</label>
              </div>
              
          </div>
          <div className='py-3  col-span-2 flex justify-center  ' >
            <select data-testid="default_coin" onChange={(e)=>dispatch(cryptoSwitch(e.target.value))} className="gbtn shadow-md border border-stone-300 rounded  h-9 text-center bg-slate-100 outline-none mx-3 w-28"  >
                            <option value="1">Bitcoin</option>
                            <option value="2">Ethereum</option>
                            <option value="3">Dogecoin</option>
                            <option value="4">Binance</option>
                            <option value="5">Ripple</option>
                            <option value="6">Cardano</option>
                            <option value="7">Tron</option>
                            <option value="8">Solana</option>
                            <option value="9">Litecoin</option>
                            <option value="10">Polkadot</option>
                            <option value="11">Polygon</option>
                            <option value="12">Wrapped bitcoin</option>
                            <option value="13">Shiba Inu</option>
                            <option value="14">Avalanche</option>
                            <option value="15">Uniswap</option>
                            <option value="16">Chainlink</option>
                            <option value="17">Steller</option>
                            <option value="18">Monero</option>
                            <option value="19">Cosmos-Hub</option>
                            <option value="20">Ethereum Classic</option>
            </select>

            <select onChange={(e)=>dispatch(graphSwitch(e.target.value))} className="gbtn shadow-md border-stone-300 border rounded  h-9 text-center outline-none bg-slate-100 mx-3 w-28" >
                            <option  value="1">Area Graph</option>
                            <option  value="2">Line Graph</option>
                            <option value="3"> Bar Graph</option>
            </select>
          </div>
        </div>
      </div>
      <div className=' row-span-7 chart-container'>
      {setgraph==="1"?<AreaGraph/>:(setgraph==="2")?<LineGraph/>:<VertGraph/> }
      </div>
    </div>
  )
}

export default Graphbar;
