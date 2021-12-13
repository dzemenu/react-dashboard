
import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyIcon from '@mui/icons-material/Money';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
export default function SideBar() {
    return (
        <div className='containerSidebbar'>
                <div className='siderbarmenu'>
                    <h3 className='siderbartitle'> GENERAL</h3> 
                        <ul className='siderbarlist'>
                            <li className="sidebartitle active" >
                                <LineStyleIcon className='sidebarIcons'/>
                                Home
                            </li>
                            <li className='sidebartitle'>
                                <WorkIcon className='sidebarIcons'/>
                                Work
                            </li>
                            <li className='sidebartitle'>
                                <TimelineIcon className='sidebarIcons'/>
                                time
                            </li>
                            
                        </ul>
                    </div>
              <div className='siderbarmenu'>
                    <h3 className='siderbartitle'> Sales</h3> 
                        <ul className='siderbarlist'>
                            <li className='sidebartitle'>
                                <MonetizationOnIcon className='sidebarIcons'/>
                                Sales
                            </li>
                            <li className='sidebartitle'>
                                <PaymentIcon className='sidebarIcons'/>
                                Cost
                            </li>
                            <li className='sidebartitle'>
                                <MoneyIcon className='sidebarIcons'/>
                                Revenues
                            </li>
                            
                        </ul>
                    </div>
                    <div className='siderbarmenu'>
                    <h3 className='siderbartitle'> Staff</h3> 
                        <ul className='siderbarlist'>
                            <li className='sidebartitle'>
                                <PersonOutlineIcon className='sidebarIcons'/>
                                People
                            </li>
                            <li className='sidebartitle'>
                                <EngineeringIcon className='sidebarIcons'/>
                                Engineers
                            </li>
                            <li className='sidebartitle'>
                                <SupervisorAccountIcon className='sidebarIcons'/>
                                Accountants
                            </li>
                            
                        </ul>
                    </div>
             
        </div>
    )
}
