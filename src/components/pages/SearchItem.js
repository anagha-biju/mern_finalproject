import { useEffect, useState } from "react";
import "./searchItem.css";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
const SearchItem = ({item}) => {
  const location = useLocation();
  console.log(location.state)
  
  // const Millisecondperday=1000*60*60*24;
  // console.log(getTime(localStorage.getItem("endDate")));
  // const dateDifferent=(date1,date2)=>{
  //   const timeDiffert=Math.abs(date2- date1);
  //   const daydiff=Math.ceil(timeDiffert/Millisecondperday)
  //   return daydiff
  // }
  // console.log(localStorage.getItem("endDate"))
  // // console.log(dateDifferent(localStorage.getItem("endDate"),localStorage.getItem("startDate")))
  return (
   <>
      <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}s</h1>
        <span className="siDistance">{item.city}||{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.decs}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
        <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton" >See availability</button>
          </Link>
         
        </div>
      </div>
    </div>
   </>
  );
};

export default SearchItem;