import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import "./topbar.css";
import avatarimage from "../../assets/images/avatar.png";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">REACT ADMIN</div>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneIcon />
            <span className="iconBadgge">2</span>
          </div>
          <div className="topbarIcons">
            <SettingsIcon />
            <span className="iconBadgge">2</span>
          </div>
          <div className="topbarIcons">
            <div className="avatar">
              {" "}
              <Avatar src={avatarimage}></Avatar>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
