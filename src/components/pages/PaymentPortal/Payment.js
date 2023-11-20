import React, { useState } from 'react'
import './Payment.css'
import {useNavigate} from "react-router-dom";
import card_name from '../../assets/id-card.png'
import card_number from '../../assets/credit-card.png'
import card_cvv from '../../assets/cvv.png'
import card_expiry from '../../assets/expiry.png'

const PaymentPortal = () => {
    const navigate=useNavigate()
    const SuccesRedirect=()=>{
      navigate("/payment-success",{})
    }
  return (
    <div className='entire-payment'>
        <div className='payment-portal'>
          <div className="paymentheader">
            <div className="heading-text">Payment Portal</div>
          </div>
          <div className="payment-details">
            <div className="payment-info">
            <img src={card_name} alt="" />
            <input type="text" placeholder="Enter Cardholder's Name" />
            </div>
         
            <div className="payment-info">
            <img src={card_number} alt="" />
            <input type="text" placeholder="Enter Card Number" />
            </div>
            <div className="payment-info">
            <img src={card_cvv} alt="" />
            <input type="text" placeholder="Enter CVV Number" />
            </div>
            <div className="payment-info">
            <img src={card_expiry} alt="" />
            <input type="text" placeholder="Enter Expiry Date" />
            </div>
            </div>
            <div className="payment-container">
                <div className='payment-button' onClick={SuccesRedirect}>Pay Now</div>
            </div>
        </div>
        <div className='total-payment'>
            <div className='message'>You are paying,</div>
            <div className='total'>Rs 10,000</div>
            <div className='payment-breakdown'>
                <div className='payment-elements'>
                    <div className='lhs'>
                      <div className='cost-category'>Cost of the rooms</div>
                      <div className='room-caption'>Rooms:1</div>
                   </div>
                   <div className='breakdown-cost1'>Rs 10,000</div>
                </div>
                <div className='payment-elements'>
                    <div className='lhs'>
                     <div className='cost-category'>Additional Costs</div>
                     <div className='room-caption'>Extra Services</div>
                   </div>
                   <div className='breakdown-cost2'>Rs 0</div>
                </div>
                <div className="footer-underline"></div>
            </div>
            <div className='payment-footer'>
                <div className='payment-footer-element'>
                  <div className='tax'>Tax</div>
                  <div className='breakdown-cost3'>Rs 0</div>
                </div>
                <div className='payment-footer-element'>
                  <div className='total-footer'>Total</div>
                  <div className='breakdown-cost4'>Rs 0</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PaymentPortal