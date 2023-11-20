import React, { useState } from 'react'
import './AdminRoomAdd.css'
import {useNavigate} from "react-router-dom";
import title_icon from '../../assets/bed.png'
import people_icon from '../../assets/people.png'
import room_no_icon from '../../assets/room-key.png'
import description_icon from '../../assets/product-description.png'

const AddRoom=()=>{
    return(
        <div className='room-container'>
          <div className="room-header">
            <div className="room-heading">Add Room Details</div>
            <div className="room-heading-underline"></div>
          </div>
          <div className="room-all-inputs">
            <div className="room-each-input">
            <img src={title_icon} alt="" />
            <input type="text" placeholder="Title" />
            </div>

            <div className="room-each-input">
            <img src={room_no_icon} alt="" />
            <input type="text" placeholder="Room number" />
            </div>
         
            <div className="room-each-input">
            <img src={people_icon} alt="" />
            <input type="text" placeholder="Maximum guests" />
            </div>
            <div className="room-each-input">
            <img src={description_icon} alt="" />
            <input type="text" placeholder="Description" />
            </div>
        </div>
            
            <div className="room-submit-container">
                <div className='save-button'>Save</div>
            </div>
        </div>
    )
}

export default AddRoom