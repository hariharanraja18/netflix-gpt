import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
	const [isSignInForm,setIsSignInForm]= useState(true);

	const toggleSignIn =()=>{
		setIsSignInForm(!isSignInForm);
	}
  return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
					alt="Netflix-bgImage"
				/>
			</div>
			<form
				action=""
				className="absolute w-3/12 bg-black/80 text-white mx-auto right-0 left-0 my-36 p-12 ">
				<h1 className="text-3xl font-bold py-4 mx-2">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && 
				<input
					className="w-full p-4 m-2  bg-gray-700 rounded-lg"
					type="text"
					placeholder="Full Name"
				/>}
				<input
					className="w-full p-4 m-2  bg-gray-700 rounded-lg"
					type="email"
					placeholder="Email address"
				/>
				<input
					className="w-full p-4 m-2 bg-gray-700 rounded-lg"
					type="password"
					placeholder="password"
					name=""
					id=""
				/>
				<button className="w-full p-4 m-2 bg-red-700 rounded-lg" type="submit">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p className="m-2 cursor-pointer" onClick={()=>toggleSignIn()}>{isSignInForm? "New to Netflix? sign up now":"Already a user? Sign In"}</p>
			</form>
		</div>
	);
}

export default Login
