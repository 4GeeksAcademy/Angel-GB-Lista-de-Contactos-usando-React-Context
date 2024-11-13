import React from "react";

const Formulario = () => {




    return (
        <div>
            <div className="input-group">
                <span className="input-group-text">First and last name</span>
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
            </div>
            <div className="imput-group">
                <span className="input-group-text">Direccion</span>
                <input type="address" placeholder="" aria-label="Direccion" className="form-control" />
            </div>

            <input type="text" placeholder="" aria-label="Email" className="form-control" />
            <input type="number" placeholder="" aria-label="Telefono" className="form-control" />
        </div>
    )
}

export default Formulario