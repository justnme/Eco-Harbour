import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate()

  const handelClick = async () => {
		const email = document.getElementById('email').value;

		try {
			const { data } = await axios.get('/user/profile');
			if (data._id) {
				await axios.post('/sendEmail', { email });
				toast.success("Email Recorded Successfully");
			}
		} catch (error) {
			const message = error.response?.data?.message;
			if (message === "Unauthorized User, No Token") {
				toast.warning("Please Login Before Register");
				navigate('/login');
			} else if (message === "Not Found - /") {
				toast.success("Email Sent Successfully");
			} else if (message === "Error in Sail") {
				toast.error("Error in mail");
			} else {
				console.log(error);
				toast.error("An error occurred.");
			}
		}
	};


  return (
    <section id='signup'>
      <h3>Sign Up for the Latest News and Technology Upadtes</h3>
      <div>
        <input id='email' type='email' placeholder='Your Email Address'/>
        <button className='btn' onClick={handelClick}>Sign Up</button>
      </div>    
    </section>
  )
}

export default SignUp
