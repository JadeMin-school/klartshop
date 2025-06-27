import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faCartShopping, faMagnifyingGlass, faBars, faUser
} from '@fortawesome/free-solid-svg-icons';

import Logo from "../../assets/logo.png";

import "./index.css";



interface Props {
	showSearchModal: (visible: boolean) => void;
}
export default function Header({ showSearchModal }: Props) {
	return (
		<header>
			<div className="left">
				<Link to="/" className="logo">
					<img src={Logo} alt="Logo"/>
				</Link>
			</div>
			<div className="right">
				<FA icon={faCartShopping}/>
				<FA icon={faUser}/>
				<FA
					icon={faMagnifyingGlass}
					onClick={() => showSearchModal(true)}
				/>
				<FA icon={faBars}/>
			</div>
		</header>
	)
}