import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.png'
import {Socails, About, Account} from './Data'

const Footer = () => {
  return (
    <footer>
        <div className='col' id='footer-image'>
            <Link to='/'><img src={logo} alt="Eco-Harbour Tracker"/></Link>
        </div>
        <div className="col">
            <h4>Contact</h4>
            <p><strong>Address : </strong>Room No. 002, First Floor, Block 2</p>
            <p>Christ University, Bangalore, Karnataka</p>
            <p><strong>Phone : </strong>+91 9610078190</p>  
            <p><strong>Hours : </strong>10:00 A.M. TO 10:00 P.M.    Mon - Sat</p>  
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    {Socails.map((socail) => {
                        return <a className='socail' key={socail.id} href={socail.url} alt={socail.text}>{socail.icon}</a> 
                    })}
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            {About.map((item) => {
                return <a key={item.id} href={item.url}>{item.text}</a>
            })}
        </div>
        <div className="col">
            <h4>My Account</h4>
            {Account.map((item) => {
                return <a key={item.id} href={item.url}>{item.text}</a>
            })}
        </div>
        <div className="copyright">
            <p>© 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
  )
}

export default Footer
