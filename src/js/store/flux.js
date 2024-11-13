const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactos: []
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
			post: {
				"name": "string",
				"phone": "",
				"email": "",
				"address": ""
			},
			recuperarAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AngelGB/contacts")
					.then(response => response.json())
					.then(response => setStore({ "contactos": response.contacts }))
					.catch(error => console.log(error))
			},
			crearContacto: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AngelGB/contacts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(post)
				})
					.then(response => response.json())
					.then(() => cargarTareas())
					.catch(error => console.log(error()))
			}
		}
	};
};

export default getState;
