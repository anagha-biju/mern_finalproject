import React, { useEffect, useState } from 'react';
import './reserve.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Reserve({ setOpen, hotelId }) {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [selectedRooms, setSelectedRooms] = useState([]);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start);

        const dates = [];
        while (date <= end) {
            dates.push(new Date(date));
            date.setDate(new Date(date) + 1);
        }

        return dates;
    };
    const alldates = getDatesInRange(localStorage.getItem('startDate'), localStorage.getItem('endDate'))
console.log(new Date(alldates).getTime())
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavalibledate.some((date) =>
           alldates.includes(date)
        //    console.log(date)
        );
        console.log(isFound);
        return !isFound;
    };

    useEffect(() => {
        getHotel()
    }, [rooms])
    const getHotel = async () => {
        let resp = await fetch(`http://localhost:5500/Hotel/room/${hotelId}`);
        let result = await resp.json();
        setRooms(result)
    };
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };
    const handleClick = async () => {
        try {
          await Promise.all(
            selectedRooms.map((roomId) => {
              const res = axios.put(`http://localhost:5500/rooms/avability/${roomId}`, {
                dates: alldates,
              });
              return res.data;
              
            })
          );
          setOpen(false);
          navigate("/");
        } catch (err) {
            console.log(err)
        }
      }; 
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                {rooms?.map((item) => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumber.map((roomNumber) => (
                                <div className="room" key={roomNumber._id}>
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button className="rButton"  onClick={handleClick}>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}

export default Reserve;