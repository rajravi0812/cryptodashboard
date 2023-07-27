import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setSuccess } from "../Action/Action";
import ScrollSpy from "./ScrollSpy";
import { realDate } from './AreaGraph';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

//Here we register Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//declare option data of a graph
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


function LineGraph() {
    const loadingState = useSelector((state)=>state.loadingReducer);
    const dispatch = useDispatch();
    const setDays = useSelector((state)=>state.dOneReducer);
    const switchCoin = useSelector((state)=>state.changeCrypto);
    const dataSet1 = [];
    const labels = [];
  const [data,setData] = useState(
    {
      labels: dataSet1,
      datasets: [{
        label:"Price",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(0, 153, 204,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(0, 153, 204,1)",
        data:labels,
      }]
    }
  )
//calling an api
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
            borderColor: "rgba(0, 153, 204,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(0, 153, 204,1)",
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
    {/* Here we use loader file which work when it is true else show graph with data */}
    {(loadingState.loaded)? <ScrollSpy/>:
    <Line className='p-5' options={options} data={data} />
    }
    </>
  )
}

export default LineGraph;
