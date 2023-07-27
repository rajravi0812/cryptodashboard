import React, { useState } from 'react'
import { Piegraph } from './Piegraph';

function Currencyxng() {
    const [firstCur, setFirst] =useState("btc");
    const [second, setSecond]  = useState("eth");
    const [price, setPrice] = useState("");
    const [convertRate, setconvertRate] =useState("32.4");

    //convert coin exchange 
    const conversion = ()=>{
        let convertPrice="";
        switch (firstCur){
                case "btc":
                    if(second==="eth"){
                        convertPrice = (price*16);
                        return setconvertRate(convertPrice);
                    }
                    if(second==="th"){
                        convertPrice = (price*30687);
                        return setconvertRate(convertPrice);
                    }
                    if(second==="pi"){
                        convertPrice = (price*1250);
                        return setconvertRate(convertPrice);
                    }
                    if(second==="btc"){
                        alert("Same Type Currency Can't Exchange")
                    }
                    break;
                case "eth":
                        if(second==="btc"){
                            convertPrice = (price/16.2).toFixed(4);
                            return setconvertRate(convertPrice);
                        }
                        if(second==="th"){
                            convertPrice = (price*2750);
                            return setconvertRate(convertPrice);
                        }
                        if(second==="pi"){
                            convertPrice = (price*110);
                        return setconvertRate(convertPrice);
                        }
                        if(second==="eth"){
                            alert("Same type of Currency Can't Exchange")
                        }
                        break;
                case "th":
                            if(second==="eth"){
                                convertPrice = (price/2750).toFixed(8);
                            return setconvertRate(convertPrice);
                            }
                            if(second==="btc"){
                                convertPrice = (price/30687).toFixed(8);
                                return setconvertRate(convertPrice);
                            }
                            if(second==="pi"){
                                convertPrice = (price*3.5);
                                return setconvertRate(convertPrice);
                            }
                            if(second==="th"){
                                alert("Same type of Currency Can't Exchange")
                            }
                            break;
                case "pi":
                                if(second==="eth"){
                                    convertPrice = (price/110).toFixed(6);
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="th"){
                                    convertPrice = (price/3.5).toFixed(8);
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="btc"){
                                    convertPrice = (price/1250).toFixed(8);
                                    return setconvertRate(convertPrice);
                                }
                                if(second==="pi"){
                                    alert("Same type of Currency Can't Exchange")
                                }
                                break;
                default:
                    return convertPrice;
        }
        
    }
  return (
    <>
    
        <div className='grid lg:grid-cols-2 mb-5 gap-3'>
            <div className=' grid grid-rows-5 bg-white shadow-md rounded-lg '>
                <div className='grid grid-cols-2 row-span-1  '>
                    <div className='font-bold p-2 text-left'>Portfolio</div>
                    <div className=' font-bold p-2 text-right pr-4'>Total Value:$1000</div>
                </div>
                <div className=' row-span-4 h-60'>
                    <Piegraph/>
                </div> 
            </div>
            
            <div className='  grid-rows-5 bg-white shadow-lg rounded-lg overflow-hidden'>
                <div className='mb-2 text-left font-bold p-2'>Exchange Coins</div>
                <div className='grid grid-cols-2 '>
                    <div className=''></div>
                    <div className='text-sm relative text-left start-12  text-slate-600'>Enter Value</div>
                    
                </div>
                <div className='grid grid-cols-4  mb-5'>
                    <div className='p-1 text-orange-500 font-bold'>Sell</div>
                    <div>
                        <select onChange={(e)=>setFirst(e.target.value)} className='cbtn bg-slate-100 border-stone-200 shadow-md border rounded  h-9 text-center outline-none  w-24'>
                        <option value="btc">Bitcoin</option>
                        <option value="eth">Ethereum</option>
                        <option value="th">Tether</option>
                        <option value="pi">Pi</option>
                        </select>
                    </div>
                    <div className='cols-span-2 ml-10 '>
                        <input onChange={(e)=>setPrice(e.target.value)}  className="bg-slate-100 border-stone-200 shadow-md border rounded  h-9 text-center outline-none text-sm w-24" type="number" placeholder="Avl: 02BTC"/>
                    </div>
                    
                </div>
                <div className='grid grid-cols-4 mb-7'>
                    <div className='text-sky-500 p-1 font-bold'>Buy</div>
                    <div>
                        <select onChange={(e)=>setSecond(e.target.value)} className="cbtn bg-slate-100 border-stone-200 shadow-md border rounded  h-9 text-center outline-none  w-24">
                        <option value="eth">Ethereum</option>
                        <option value="btc">Bitcoin</option>
                        <option value="th">Tether</option>
                        <option value="pi">Pi</option>
                        </select>
                    </div>
                    <div>
                        <div className='text-sky-600 h-9 text-center outline-none w-fit-content border-none p-2 relative start-8'><strong>{convertRate} $</strong></div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <button onClick={conversion} className='cbtn2 mb-7 shadow-md font-medium  bg-blue-700 h-10 w-24 rounded-lg text-white'>Exchange</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Currencyxng;
