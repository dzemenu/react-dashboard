import React from 'react'
import './widgetLg.css'
import avatar from '../../assets/images/avatar.png'
export default function WidgetLg() {
    return (
        <div className='widgetlg'>
            <h3 className="widgetlgTitle">Latest Transaction</h3>
            <table className="widgetlgTable">
                <tr className="widgetlgTr">
                    <th className="widgetlgTh">Customer</th>
                    <th className="widgetlgTh">Date</th><th className="widgetlgTh">Amount</th><th className="widgetlgTh">Status</th>
                </tr>
                <tr className="widgetTr">
                    <td className="widgetUser">
                        <img src={avatar} alt="" className="widgetlgImg" />
                        dilu kefale
                    </td>
                    <td className="widgetlgTddate">jan 1</td>
                    <td className="widgetlgTdamount">$454.45</td>
                    <td className="widgetlgTd"><button className="widgetlgButton approved">Active</button></td>
                </tr>
                <tr className="widgetTr">
                    <td className="widgetUser">
                        <img src={avatar} alt="" className="widgetlgImg" />
                        dilu kefale
                    </td>
                    <td className="widgetlgTddate">jan 1</td>
                    <td className="widgetlgTdamount">$454.45</td>
                    <td className="widgetlgTdsatus"><button className="widgetlgButton pending">Pending</button></td>
                </tr> <tr className="widgetTr">
                    <td className="widgetUser">
                        <img src={avatar} alt="" className="widgetlgImg" />
                        dilu kefale
                    </td>
                    <td className="widgetlgTddate">jan 1</td>
                    <td className="widgetlgTdamount">$454.45</td>
                    <td className="widgetlgTd"><button className="widgetlgButton declined">Declined</button></td>
                </tr>
            </table>
        </div>
    )
}
