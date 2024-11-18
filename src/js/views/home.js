import React, { useContext, useEffect, } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.recuperarAgenda()
	}, [])

	return (
		<div className="container-fluid p-3">
			<div className="text-center mt-2">
				<div><h1>Contactos</h1></div>
			</div>
			<div className="row">
				{store.contactos?.map((item, index) => {
					return (
						<div key={item.id} className="Tarjeta col-6 p-3">
							<div className="card" key={index}>
								<h5 className="card-title">Nombre: {item.name}</h5>
								<p className="card-text">Direccion: {item.address}</p>
								<p className="card-text">Telefono: {item.phone}</p>
								<p className="card-text">Email: {item.email}</p>
								<Link to={`/EditarContacto/${item.id}`} >
								<FaUserEdit/>
								</Link>
								<MdDelete onClick={() => { actions.eliminarContacto(item.id) }}  />
							</div>
						</div>
					)
				})
				}
			</div>
		</div>
	)
}
