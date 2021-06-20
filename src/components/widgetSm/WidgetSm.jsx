import React from 'react'
import './widgetSm.css'
import {Visibility} from '@material-ui/icons';
function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Membes</span>
            <ul className="widggetSmList">
               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg"></img>
               <div className="widgetSmUser">
                  <span className="widgetSmUserName">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
               </div>
               <buttom className="widgetSmButton">
               <Visibility/>
               Display
               </buttom>
               </li>

               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg"></img>
               <div className="widgetSmUser">
                  <span className="widgetSmUserName">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
               </div>
               <buttom className="widgetSmButton">
               <Visibility/>
               Display
               </buttom>
               </li>

               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg"></img>
               <div className="widgetSmUser">
                  <span className="widgetSmUserName">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
               </div>
               <buttom className="widgetSmButton">
               <Visibility/>
               Display
               </buttom>
               </li>

               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg"></img>
               <div className="widgetSmUser">
                  <span className="widgetSmUserName">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
               </div>
               <buttom className="widgetSmButton">
               <Visibility/>
               Display
               </buttom>
               </li>

               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg"></img>
               <div className="widgetSmUser">
                  <span className="widgetSmUserName">Anna Keller</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
               </div>
               <buttom className="widgetSmButton">
               <Visibility/>
               Display
               </buttom>
               </li>

            </ul>
        </div>
    )
}

export default WidgetSm
