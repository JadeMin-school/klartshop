import type { ChangeEventHandler, FormEventHandler } from 'react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';

import { Modal } from "../../../Modal";

import t from "../../../../i18n";

import "./index.css";



export default function MyButton() {
	const navigate = useNavigate();
	const [loginModal, setLoginModal] = useState(false);
	const [myModal, setMyModal] = useState(false);
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const clearModals = () => {
		setLoginModal(false);
		setMyModal(false);
		setUser({
			username: "",
			password: ""
		});
	};
	const onLogin = () => {
		clearModals();

		navigate("/my");
	};
	const onLogout = () => {
		clearModals();

		localStorage.clear();
	};

	const onChangeUser: ChangeEventHandler<HTMLInputElement> = (e) => {
		const { name, value } = e.target;

		setUser(prev => ({
			...prev,
			[name]: value
		}));
	};
	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		localStorage.setItem("username", user.username);
		localStorage.setItem("password", user.password);

		onLogin();
	};
	const onClickButtons = () => {
		const isLoggedIn = localStorage.getItem("username") && localStorage.getItem("password");

		if (isLoggedIn) {
			setMyModal(true);
		} else {
			setLoginModal(true);
		}
	};


	return (
		<>
			<FA
				icon={faUser}
				onClick={() => onClickButtons()}
			/>
			<Modal
				id="login"
				state={[loginModal, setLoginModal]}
				title={t("modal.login.title").toString()}
			>
				<form onSubmit={onSubmit}>
					<label>
						{ t("modal.login.username").toString() }
						<input
							type="text"
							name="username"
							value={user.username}
							onChange={onChangeUser}
							required
						/>
					</label>
					<label>
						{ t("modal.login.password").toString() }
						<input
							type="password"
							name="password"
							value={user.password}
							onChange={onChangeUser}
							required
						/>
					</label>
					<label>
						<input type="submit"/>
					</label>
					<div>
						<GoogleLogin
							onSuccess={credentialResponse => {
								const decode = jwtDecode(credentialResponse.credential!) as {
									name: string;
									email: string;
								};
								
								localStorage.setItem("username", decode.name);
								localStorage.setItem("password", decode.email);

								onLogin();
							}}
							useOneTap={true}
						/>
					</div>
				</form>
			</Modal>
			<Modal
				id="my"
				state={[myModal, setMyModal]}
				title={t("modal.my.title").toString()}
			>
				<Link
					to="/my"
					onClick={() => clearModals()}
				>
					{ t("modal.my.page").toString() }
				</Link>
				<Link
					to="/"
					onClick={() => onLogout()}
				>
					{ t("modal.my.logout").toString() }
				</Link>
			</Modal>
		</>
	);
}