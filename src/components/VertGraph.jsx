import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setSuccess } from "../Action/Action";
import ScrollSpy from "./ScrollSpy";
import { realDate } from './AreaGraph';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
  
  var options = {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          text: 'USD'
        },
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        title: {
          display: true,
          text: 'DATE'
        },
        grid: {
          display: false
        }
      }
    }
  };


function VertGraph() {
    const loadingState = useSelector((state)=>state.loadingReducer);
    const dispatch = useDispatch();
    const setDays = useSelector((state)=>state.dOneReducer);
    const switchCoin = useSelector((state)=>state.changeCrypto);
    const dataSet1 = [];
    const labels = [];
  const [data,setData] = useState(
    {
      labels: [],
      datasets: [{
        label:"Price",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data:[],
      }]
    }
  )
//calling an api with axios
  useEffect(()=>{
   const fetchData= async()=>{
     dispatch(setLoading(true));
      const url = `https://api.coingecko.com/api/v3/coins/${switchCoin}/market_chart?vs_currency=usd&days=${setDays}&interval=daily`
     await axios(url)
          .then(res=>{
          dispatch(setLoading(false));
          dispatch(setSuccess(true));
          res.data.prices.map((e)=>{
          dataSet1.push(realDate(e[0]));
          labels.push(e[1].toFixed(4));
          return {dataSet1,labels}
        })
        setData({
          labels: dataSet1,
          datasets: [{
            label:"Price",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data:labels,
          }]
        })
        
      }).catch(e=>{
          console.log('error',e)
      })
    }
    fetchData();
    // eslint-disable-next-line
  },[switchCoin,setDays])

  return (
    <>  
   
    {(loadingState.loaded)? <ScrollSpy/>:
    <Bar className='p-5' options={options} data={data} />
  }
   </>
        
    
  )
}

export default VertGraph;
