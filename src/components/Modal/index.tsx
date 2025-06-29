import type { ReactNode, MouseEventHandler } from 'react';

import "./index.css";



interface Props {
	id: string;
	state: [boolean, (value: boolean) => void];
	title?: string;
	width?: number;
	height?: number;
	onClose?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
}
export function Modal({ id, title, state, width, height, onClose, children }: Props) {
	const handleClose: MouseEventHandler<HTMLButtonElement> = (e) => {
		state[1](false);
		onClose?.(e);
	};


	return (
		<div className={`modal-${id} ${state[0] ? "visible" : ""}`}>
			<div
				className="content"
				style={{
					width: width ? width : "500px",
					height: height ? height : "400px"
				}}
			>
				<div className="head">
					<h2>{ title }</h2>
					<button onClick={handleClose}>&times;</button>
				</div>
				<div className="body">
					{ children }
				</div>
			</div>
		</div>
	);
}