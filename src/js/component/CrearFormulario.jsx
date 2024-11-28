import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CrearFormulario = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate()


    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [dominioEmail, setDominioEmail] = useState("");
    const [genero, setGenero] = useState("")



    const formularioCompleto = () => {
        return name !== "" && address !== "" && phone !== "" && userEmail !== "" && dominioEmail !== "" && genero !== "";

    };

    const paginaPrincipal = () => {
        navigate("/")
    }

    const enviarContacto = () => {
        if (formularioCompleto()) {
            const emailCompleto = `${userEmail}${dominioEmail}`
            actions.actualizarNombre(name);
            actions.actualizarDireccion(address);
            actions.actualizarTelefono(phone);
            actions.actualizarEmail(emailCompleto);
            actions.actualizarGenero(genero);
            actions.crearContacto();
            toast.success('Contacto creado correctamente', {
                action: {
                    label: 'ok',
                    onClick: paginaPrincipal
                },
            })
        }
    };

    return (
        <div className="container-fluid p-5">
            <div className="card">
                <div className="card-header text-center p-2">
                    <h3>Introduzca los datos del contacto</h3>
                </div>
                <div className="card-body">

                    <div className="input-group p-2">
                        <span className="input-group-text">Nombre y apellido</span>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="input-group p-2">
                        <span className="input-group-text">Dirección</span>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <div className="d-flex">
                                <div className="input-group p-2">
                                    <span className="input-group-text">Teléfono</span>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        maxLength={11}
                                    />
                                </div>
                                <div className="input-group p-2">
                                    <span className="input-group-text">Genero</span>
                                    <select className="form-select" aria-label="Default select example"
                                        onChange={(e) => { setGenero(e.target.value) }}>
                                        <option value="">Seleccionar</option>
                                        <option value="men">Hombre</option>
                                        <option value="women">Mujer</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-group p-2">
                                <span className="input-group-text">Email</span>
                                <input
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "@") {
                                            e.preventDefault();
                                        }
                                    }}
                                    type="email"
                                    className="form-control"
                                />
                                <select className="form-select" aria-label="Default select example"
                                    onChange={(e) => { setDominioEmail(e.target.value) }}>
                                    <option value="">Seleccionar</option>
                                    <option value="@hotmail.com">@hotmail.com</option>
                                    <option value="@yahoo.com">@yahoo.com</option>
                                    <option value="@gmail.com">@gmail.com</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={enviarContacto}
                            disabled={!formularioCompleto()}
                            type="button"
                            className="btn btn-warning m-1">Aceptar</button>
                        <Link to="/">
                            <button type="button" className="btn btn-warning m-1">Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrearFormulario;