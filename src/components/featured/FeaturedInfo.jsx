import React from "react";
import "./featuredinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function FeaturedInfo() {
  return (
    <div className="featuredContainer">
      <div className="featured">
        <div className="featureditem">
          <span className="featuredtitle">Revenue</span>
          <div className="featureMoneycontainer">
            <span className="featureMoney">$1,000,000</span>
            <span className="featuredmoneyrate">
              -11.3 <ArrowDownwardIcon className="featuredIcon negative" />
            </span>
          </div>
        <span className="featuredsub">compared to last month</span>
        </div>

      </div>
      <div className="featured">
        <div className="featureditem">
          <span className="featuredtitle">Sales</span>
          <div className="featureMoneycontainer">
            <span className="featureMoney">$1,4540,000</span>
            <span className="featuredmoneyrate">
              -4.3 <ArrowDownwardIcon className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredsub">compared to last month</span>
        </div>
        
      </div>
      <div className="featured">
        <div className="featureditem">
          <span className="featuredtitle">Cost</span>
          <div className="featureMoneycontainer">
            <span className="featureMoney">$450,000</span>
            <span className="featuredmoneyrate">
              11.3 <ArrowUpwardIcon className="featuredIcon " />
            </span>
          </div>
        <span className="featuredsub">compared to last month</span>
        </div>

      </div>
    </div>
  );
}
