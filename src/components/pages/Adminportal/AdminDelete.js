import React, { useState } from 'react'
import './AdminDelete.css'
import {useNavigate} from "react-router-dom";
import home_icon from '../../assets/home.png'
import address_icon from '../../assets/pin.png'
import price_icon from '../../assets/money.png'
import desc_icon from '../../assets/notes.png'
import city_icon from '../../assets/buildings.png'
import rating_icon from '../../assets/review.png'
import features_icon from '../../assets/new-features.png'
import distance_icon from '../../assets/distance.png'
import types_icon from '../../assets/categories.png'

const DeleteHotel=()=>{
    return(
        <div className='main-container'>
          <div className="main-header">
            <div className="heading">Delete Hotel</div>
            <div className="heading-underline"></div>
          </div>
          <div className="delete-inputs">
            <div className="each-input">
            <img src={types_icon} alt="" />
            <input type="text" placeholder="Type" />
            </div>

            <div className="each-input">
            <img src={home_icon} alt="" />
            <input type="text" placeholder="Name of the hotel" />
            </div>
         
            <div className="each-input">
            <img src={city_icon} alt="" />
            <input type="text" placeholder="City" />
            </div>
        </div>
            
            <div className="submit-container">
                <div className='delete-button'>Delete</div>
            </div>
        </div>
    )
}

export default DeleteHotel