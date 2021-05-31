import { StyleSheet } from "react-native";

const Styles = {
	TelaInicial: StyleSheet.create({
		txtGrande: {
			fontSize: 40,
			color: "white",
		},
		areaView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#485563",
		},
		linearGradient: {
			width: "100%",
			height: "100%",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
	}),
	CardOcorrencia: StyleSheet.create({
		Container: {
			flex: 1,
			flexDirection: "row",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(79,195,247 ,1)",
			borderColor: "rgba(179,229,252 ,1)",
			borderWidth: 1,
			fontSize: 20,
			padding: 10,
		},
		Icone: {
			flex: 0.3,
			fontSize: 40,
			justifyContent: "center",
			alignItems: "center",
		},
		Descricao: {
			flex: 0.7,
			fontSize: 30,
			justifyContent: "center",
		},
		Texto: {
			color: "rgba(225,245,254 ,1)",
		},
	}),
	AdicionarOcorrencia: StyleSheet.create({
		Container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(245,245,245 ,1)",
			fontSize: 20,
			padding: 10,
		},
		Title: {
			fontWeight: 600,
			color: "rgba(66,66,66 ,1)",
			fontSize: 30,
		},
		Text: {
			color: "rgba(66,66,66 ,1)",
		},
		TopBar: {
			marginBottom: 40,
		},
		BottomBar: {
			marginTop: 90,
		},
		Content: {
			flex: 1,
			justifyContent: "center",
		},
		Fim: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "rgba(139,195,74 ,1)",
		},
		FimTitle: {
			fontSize: 25,
			color: "rgba(238,238,238 ,1)",
		},
		FimText: {
			color: "rgba(238,238,238 ,1)",
		},
	}),
};

export default Styles;
