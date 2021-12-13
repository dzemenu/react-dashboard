import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featured/FeaturedInfo'
import './home.css'
export default function Home() {
    return (
        <div className='hcontainer'>
         <FeaturedInfo />
         <Chart />
        </div>
    )
}
