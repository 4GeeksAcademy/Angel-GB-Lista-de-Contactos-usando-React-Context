import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Tu agenda</span>
			</Link>
			<div>
				<Link to={"/AñadirContacto"}>
					<button type="button" className="btn btn-info m-1">Crear contacto</button>
				</Link>
				{/* <Link to={"/Agendas"}>
					<button type="button" className="btn btn-warning m-1">Ver agendas</button>
				</Link> */}
			</div>

		</nav>
	);
};
