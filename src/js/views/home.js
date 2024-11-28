import React, { useContext, useEffect, } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";


export const Home = () => {
	const { store, actions } = useContext(Context)
	
	const fotoConIdFija = (id) => {
		// const genero = ${genero} store.genero
        return `https://randomuser.me/api/portraits/men/${id}.jpg`;
    };

	const eliminarContacto = (id) => {
        toast("¿Seguro que quieres eliminar este contacto?", {
            action: {
                label: "Eliminar",
                onClick: () => {
                    actions.eliminarContacto(id);
                    toast.success("Contacto eliminado correctamente");
                },
            },
        });
    };

	useEffect(() => {
		actions.recuperarAgenda()
	}, [])


	return (
		<div className="container-fluid p-4">
			<div className="text-center mt-2">
				<div><h1>Tus contactos</h1></div>
			</div>
			<div className="row p-5">
				{store.contactos?.map((item, index) => {
					return (
						<div key={item.id} className="tarjetafull col-4 p-3">
							<div className="card " key={index}>
								<div className="">
									<div className="tarjeta card-body p-2 d-flex justify-content-start">
										<div>
											<img className="rounded-circle float-start" src={fotoConIdFija(item.id)} />
										</div>
										<div className="text-start p-2">
											<h5>{item.name}</h5>
											<p className="card-tect text-break"></p>
											<p className="card-text text-break"><FaMapMarkerAlt /><strong> : {item.address}</strong></p>
											<p className="card-text text-break"><strong><FaPhone /> : {item.phone}</strong></p>
											<p className="card-text text-break"><strong><TfiEmail /> : {item.email}</strong></p>
										</div>
									</div>
									<div className="card-footer">
										<div className="d-flex justify-content-center">
											<button className="btn btn-primary m-1">
												<Link to={`/EditarContacto/${item.id}`} >
													<FaUserEdit color="white" />
												</Link>
											</button>
											<button type="button" className="btn btn-primary m-1"><MdDelete onClick={() => { eliminarContacto(item.id) }} /></button>
										</div>
									</div>
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
