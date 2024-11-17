import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const AgendasFull = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
		actions.recuperarAgendas()
	}, [])

	return (
		<div className="container-fluid">
			{
                store.agendas?.map((item, index) => {
                    return(
                        <div key={item.id}>
                            <p>{item.slug}</p>
                        </div>
                    )
                } )
            }
		</div>
	);
};