import realfooder from "../src/images/projects/realfooder.png";
import empresaurio from "../src/images/projects/empresaurio.png";
import ironnews from "../src/images/projects/ironnews.png";
import expense from "../src/images/projects/expense.png";
import helpers from "../src/images/projects/helpers.png";
import solidarity from "../src/images/projects/solidarity.png";

export const projects = [
	{
		id: 1,
		isFinished: true,
		title: "El RealFooder",
		techs: ["JS", "CSS", "HTML"],
		img: realfooder,
		link: "https://angelluishernandez.github.io/Ironhack-Web-App/",
		github: "https://github.com/angelluishernandez/ironhack-game",
		description:
			"Primer proyecto de Ironhack. El Realfooder es un tower-defense en el que tienes que evitar la comida no saludable y consumir la más saludable",
		description2: "Desarrollado con Javascript, HTML y CSS",
		isIronhack: true,
	},
	{
		id: 2,
		isFinished: true,
		title: "Empresaurio",
		techs: ["JS", "CSS", "HTML", "NODE", "EXPRESS", "MONGODB", "BOOTSTRAP"],
		img: empresaurio,
		link: "https://empresaurio.herokuapp.com",
		github: "https://github.com/angelluishernandez/empresaurio",
		description:
			"Segundo proyecto de Ironhack. Empresaurio es una aplicación que permite a los empleados de una empresa registrar cuando fichan en su trabajo. Al mismo tiempo los miembros de recursos humanos pueden controlar los fichajes de los trabajadores",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap, MongoDB, NodeJS, Express",
		isIronhack: true,
	},
	{
		id: 3,
		isFinished: true,
		title: "IronNews - Front",
		techs: [
			"JS",
			"CSS",
			"HTML",
			"BOOTSTRAP",
			"API REST",
			"REACT",
			"REDUX",
			"AXIOS",
		],
		img: ironnews,
		link: "https://ironnewsapi.herokuapp.com",
		github: "https://github.com/angelluishernandez/iron-news-front",
		description:
			"Tercer proyecto de Ironhack. En Ironnews, el usuario puede consultar y almacenar noticias de su interes gracias a la API newsapi.org",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap, React y API Rest",
		isIronhack: true,
	},
	{
		id: 4,
		isFinished: true,
		title: "IronNews - Back",
		techs: ["NODE", "EXPRESS", "MONGODB"],
		img: "",
		link: "https://ironnewsapi.herokuapp.com",
		github: "https://github.com/angelluishernandez/Ironnews-api",
		description: "Tercer proyecto de Ironhack. Back para IronNews",
		description2: "Desarrollado con MongoDB, NodeJS, Express",
		isIronhack: true,
	},
	{
		id: 5,
		isFinished: true,
		title: "Expense Tracker",
		techs: [
			"JS",
			"CSS",
			"HTML",
			"BOOTSTRAP",
			"API REST",
			"REACT",
			"REDUX",
			"REACT-HOOKS",
			"REACT-CONTEXT",
			"FIREBASE",
			"JEST",
			"ENZYME",
		],
		img: expense,
		link: "",
		github:
			"https://github.com/angelluishernandez/expensetracker-redux-project-",
		description:
			"Proyecto personal. Una aplicación que permite contabilizar gastos",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context), Firebase",
		isIronhack: false,
	},
	{
		id: 6,
		isFinished: false,
		title: "Solidarity",
		techs: [
			"JS",
			"CSS",
			"HTML",
			"BOOTSTRAP",
			"API REST",
			"REACT",
			"REDUX",
			"REACT-HOOKS",
			"REACT-CONTEXT",
		],
		img: solidarity,
		link: "",
		github: "https://github.com/angelluishernandez/solidarity",
		description:
			"Proyecto personal. Una red social que permite poner en común lo que no necesitamos para ayudar a quienes más lo necesitan",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context)",
		isIronhack: true,
	},
	{
		id: 7,
		isFinished: false,
		title: "Helpers",
		techs: [
			"JS",
			"CSS",
			"HTML",
			"BOOTSTRAP",
			"API REST",
			"REACT",
			"REDUX",
			"REACT-HOOKS",
			"REACT-CONTEXT",
			"FIREBASE",
		],
		img: helpers,
		link: "",
		github: "https://github.com/angelluishernandez/helpers",
		description:
			"Proyecto personal. Una aplicación que permite al usuario registrar tareas con sus pasos correspondientes",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context), Firebase",
		isIronhack: true,
	},
	{
		id: 8,
		isFinished: false,
		title: "React-clothing",
		techs: [
			"JS",
			"CSS",
			"HTML",
			"BOOTSTRAP",
			"API REST",
			"REACT",
			"REDUX",
			"REACT-HOOKS",
			"REACT-CONTEXT",
			"FIREBASE",
			"STYLED COMPONENTS",
		],
		img: "clothing",
		link: "",
		github: "https://github.com/angelluishernandez/helpers",
		description:
			"Proyecto personal. Una aplicación que permite al usuario registrar tareas con sus pasos correspondientes",
		description2:
			"Desarrollado con Javascript, HTML, CSS, Bootstrap, Styled Components, NodeJS, Express, React (Redux, Hooks y Context), Firebase",
		isIronhack: true,
	},
];
