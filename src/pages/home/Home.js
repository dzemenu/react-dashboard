import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featured/FeaturedInfo'
import data from '../../assets/data/dummy'

import './home.css'
export default function Home() {
    return (
        <div className='hcontainer'>
         <FeaturedInfo />
         <Chart data={data} title='Sales Analytics' datakey='name' grid={true}/>
        </div>
    )
}
