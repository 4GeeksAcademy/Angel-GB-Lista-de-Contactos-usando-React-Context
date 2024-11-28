// import React, { useContext, useEffect } from "react";
// import { Context } from "../store/appContext";

// export const AgendasFull = () => {
//     const { store, actions } = useContext(Context)

//     useEffect(() => {
// 		actions.traerContactos()
// 	}, [])
//     console.log(store.contactosRandomUser);
    
// 	return (
// 		<div className="container-fluid">
// 			{
//                 store.contactosRandomUser?.map((item, index) => {
//                     return(
//                         <div key={index}>
//                             <img src={item.picture.medium} />
//                             <p>{item.name.first}</p>
//                         </div>
//                     )
//                 } )
//             }
// 		</div>
// 	);
// };