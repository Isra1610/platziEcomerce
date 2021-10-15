import React, { useRef } from "react";
import "@styles/Login.scss";

import logoYardSale from "@logos/logo_yard_sale.svg";

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (e) => {
		const formData = new FormData(form.current);
		const data = {
			username: formData.get("email"),
			password: formData.get("password"),
		};
		console.log(data);
	};
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logoYardSale} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">
						Email address
					</label>
					<input
						type="text"
						name="email"
						placeholder="platzi@example.com"
						className="input input-email"
					/>
					<label htmlFor="password" className="label">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="*********"
						className="input input-password"
					/>
					<button
						type="submit"
						className="primary-button login-button"
						onClick={handleSubmit}
						href="/"
					>
						Log in
					</button>
					<a href="/password-recovery">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" href="/signup">
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Login;
