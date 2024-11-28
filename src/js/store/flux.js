import { toast } from "sonner";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agendas: [],
			contactosRandomUser: [],
			contactos: [],
			contactosLocal: [],
			nombre: [],
			address: [],
			phone: [],
			email: [],
			genero: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			// recuperarAgendas: () => {
			// 	fetch("https://playground.4geeks.com/contact/agendas")
			// 		.then(response => response.json())
			// 		.then(response => setStore({ "agendas": response.agendas }))
			// },
			crearAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AngelGB", {
					method: "POST"
				})
					.then(response => response.json())
					.then(response => getActions().recuperarAgenda())
			},
			recuperarAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AngelGB/contacts")
					.then(response => response.json())
					.then(response => setStore({ "contactos": response.contacts }))
					.catch(error => console.log(error))
			},
			actualizarNombre: (nuevoNombre) => {
				setStore({ nombre: [nuevoNombre] });
			},
			actualizarTelefono: (nuevoTelefono) => {
				setStore({ phone: [nuevoTelefono] });
			},
			actualizarEmail: (nuevoEmail) => {
				setStore({ email: [nuevoEmail] });
			},
			actualizarDireccion: (nuevaDireccion) => {
				setStore({ address: [nuevaDireccion] });
			},
			actualizarGenero:(nuevoGenero) => {
				setStore({ genero: [nuevoGenero]})
			},
			crearContacto: () => {
				const store = getStore();
				const contacto = {
					name: store.nombre[0],
					phone: store.phone[0],
					email: store.email[0],
					address: store.address[0]
				};

				fetch("https://playground.4geeks.com/contact/agendas/AngelGB/contacts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacto)
				})
					.then(response => response.json())
					.then(() => getActions().recuperarAgenda())
					.catch((error) => console.log(error));
			},
			editarContacto: (id) => {
				const store = getStore();
				const contacto = {
					name: store.nombre[0],
					phone: store.phone[0],
					email: store.email[0],
					address: store.address[0]
				};
				fetch(`https://playground.4geeks.com/contact/agendas/AngelGB/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacto)
				})
					.then(response => response.json())
					.then(() => getActions().recuperarAgenda())
					.catch((error) => console.log(error));
			},
			eliminarContacto: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/AngelGB/contacts/${id}`, {
					method: "DELETE",
				})
					.then(() => getActions().recuperarAgenda())
					.catch((error => console.log(error)))
			}
		}
	};
};

export default getState;
