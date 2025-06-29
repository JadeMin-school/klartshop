import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
	faBars,
} from '@fortawesome/free-solid-svg-icons';

import { Modal } from "../../../Modal";

import t from "../../../../i18n";

import "./index.css";



export default function CategoryButton() {
	const [modal, setModal] = useState(false);


	return (
		<>
			<FA
				icon={faBars}
				onClick={() => setModal(true)}
			/>
			<Modal
				id="category"
				state={[modal, setModal]}
				title={t("modal.category.title").toString()}
			>
				<div className="category">
					<Link
						to="/category/ALL"
						onClick={() => setModal(false)}
					>
						{ t("modal.category.all").toString() }
					</Link>
					<Link
						to="/category/OUTER"
						onClick={() => setModal(false)}
					>
						{ t("modal.category.outer").toString() }
					</Link>
					<Link
						to="/category/TOP"
						onClick={() => setModal(false)}
					>
						{ t("modal.category.top").toString() }
					</Link>
					<Link
						to="/category/BOTTOM"
						onClick={() => setModal(false)}
					>
						{ t("modal.category.bottom").toString() }
					</Link>
					<Link
						to="/category/ACC"
						onClick={() => setModal(false)}
					>
						{ t("modal.category.accessories").toString() }
					</Link>
				</div>
			</Modal>
		</>
	);
}