import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {

  const[data, setData] = useState([]);
  const[ser, setSer] = useState([]);
  const[title, setTitle] = useState([]);
  useEffect(()=>{
    axios.get('https://team3-logesh.azurewebsites.net/api/Transaction/group').then((response) => {
            setData(response.data);
            console.log(response.data.numberOfTransaction);
    });
  },[])
  var array = [];
  var dataArr = [];
  useEffect(()=>{

    console.log(data);
    data.map((d)=>{
        array.push(d.numberOfTransaction)
        dataArr.push( d.date);
    })
    setSer(array);
    setTitle(dataArr)

  },[data])
  const series = [
    {
      name: 'Daily traffic',
      data: ser,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val ;
      },
      offsetY: -20,
      style: {
        fontSize: '16px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: title,
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val ;
        },
      },
    },
    title: {
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444',
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart 
        options={options} 
        series={series} 
        type="bar" height={650} />
    </div>
  );
};

export default ApexChart;
