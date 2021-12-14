import React from "react";
import "./widgetSm.css";
import avatar from "../../assets/images/avatar.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmTitle">New Members</span>
      <ul className="widgetsmList">
        <li className="widgetsmItem">
          <img src={avatar} alt="" className="widgetsmImg" />
          <div className="widgetsmUser">
            <span className="widgetsmUserName">Dilu kefale</span>
            <span className="widgetsmUserTitle">Frontend Engineer</span>
          </div>
          <button className="widgetsmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgetsmItem">
          <img src={avatar} alt="" className="widgetsmImg" />
          <div className="widgetsmUser">
            <span className="widgetsmUserName">Yosef kefale</span>
            <span className="widgetsmUserTitle">Backend Engineer</span>
          </div>
          <button className="widgetsmButton">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetsmItem">
          <img src={avatar} alt="" className="widgetsmImg" />
          <div className="widgetsmUser">
            <span className="widgetsmUserName">Yosef kefale</span>
            <span className="widgetsmUserTitle">Backend Engineer</span>
          </div>
          <button className="widgetsmButton">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li> <li className="widgetsmItem">
          <img src={avatar} alt="" className="widgetsmImg" />
          <div className="widgetsmUser">
            <span className="widgetsmUserName">Yosef kefale</span>
            <span className="widgetsmUserTitle">Backend Engineer</span>
          </div>
          <button className="widgetsmButton">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
