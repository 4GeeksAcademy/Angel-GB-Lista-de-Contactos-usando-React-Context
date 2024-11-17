import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const EditarFormulario = () => {
    const { actions } = useContext(Context);
    
    // Estados locales para almacenar temporalmente los valores de los inputs
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    const formularioCompleto = () => {
        return name !== '' && address !== '' && phone !== '' && email !== '';
    };


    const enviarContacto = () => {
        if (formularioCompleto()) {
            actions.actualizarNombre(name);
            actions.actualizarDireccion(address);
            actions.actualizarTelefono(phone);
            actions.actualizarEmail(email);
            actions.editarContacto();
        } else {
            alert('Por favor, complete todos los campos antes de enviar');
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
                        <div className="col-6">
                            <div className="input-group p-2">
                                <span className="input-group-text">Teléfono</span>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group p-2">
                                <span className="input-group-text">Email</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center">
                        <Link to="/">
                            <button
                                onClick={enviarContacto}
                                disabled={!formularioCompleto()}
                                type="button"
                                className="btn btn-warning m-1"
                            >
                                Aceptar
                            </button>
                        </Link>
                        <Link to="/">
                            <button type="button" className="btn btn-warning m-1">Cancelar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarFormulario;