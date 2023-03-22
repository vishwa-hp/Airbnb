import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./components/data.js"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import './App.css';
import HighchartsExporting from 'highcharts/modules/exporting';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsExporting(Highcharts);
Highcharts3D(Highcharts);


const getOptions = (type) => ({
    chart: {
      type,
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 30,
        depth: 300,
      },
    },
    title: {
      text: _.startCase(`${type} chart`),
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    xAxis: [
      {
        visible: false,
      },
      {
        visible: false,
      },
      {
        visible: false,
      },
    ],
    plotOptions: {
      [type]: {
        depth: 100,
      },
    },
    series: [
        {
            data: [[0, 2, 0], [1, 2, 0], [2, 1, 0], [3, 4, 0], [4, 3, 0], [5, 2, 0]],
          },
          {
            data: [[0, 4, 100], [1, 3, 100], [2, 6, 100], [3, 5, 100], [4, 4, 100], [5, 6, 100]],
          },
          {
            data: [[0, 5, 200], [1, 7, 200], [2, 7, 200], [3, 6, 200], [4, 7, 200], [5, 7, 200]],
          },
    ],
    credits: {
      enabled: false,
    },
  });
function App() {
    
     const cards = data.map(item => {
      return (
          <Card 
          key={item.id}
          item={item}
            
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <HighchartsReact highcharts={Highcharts} options={getOptions('pie')} />
      <HighchartsReact highcharts={Highcharts} options={getOptions('scatter')} />
          <section className="cards-list">
                {cards}
            </section>
      </div>
  )
}

export default App;
