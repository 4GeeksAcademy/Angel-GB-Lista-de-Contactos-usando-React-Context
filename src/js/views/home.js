import React, { useContext, useEffect, } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.recuperarAgenda()
	}, [])

	console.log(store.contactos);

	return (
		<div>
			<div className="text-center mt-5">
				<div><h1>Agenda</h1></div>
			</div>
			<div className="row">
				{store.contactos.map((item, index) => {
					return (
						<div className="col-3">
							<div className="card">
								<div key={index} className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.adress}</p>
									<p className="card-text">{item.phone}</p>
									<p className="card-text">{item.email}</p>
								</div>
							</div>
						</div>
					)
				})
				}
			</div>
		</div>
	)



}
