import React from 'react'
import Header from './Header'

const Login = () => {
  return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
					alt="Netflix-bgImage"
				/>
			</div>
			<form action="" className="absolute w-3/12 bg-black/80 text-white mx-auto right-0 left-0 my-36 p-12 ">
                <h1 className='text-3xl font-bold py-4 mx-2'>Sign In</h1>
				<input
					className="w-full p-4 m-2  bg-gray-700 rounded-lg"
					type="text"
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
					Sign In
				</button>
                <p className='m-2'>New to Netflix? sign up now</p>
			</form>
		</div>
	);
}

export default Login
