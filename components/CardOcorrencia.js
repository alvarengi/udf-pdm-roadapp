import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles";

const CardOcorrencia = ({ Tipo, Local, Horario, Icone }) => (
	<View style={Styles.CardOcorrencia.Container}>
		<View style={Styles.CardOcorrencia.Icone}>{Icone}</View>
		<View style={Styles.CardOcorrencia.Descricao}>
			<Text style={Styles.CardOcorrencia.Texto}>Tipo: {Tipo}</Text>
			<Text style={Styles.CardOcorrencia.Texto}>Local: {Local}</Text>
			<Text style={Styles.CardOcorrencia.Texto}>Horário: {Horario}</Text>
		</View>
	</View>
);

export default CardOcorrencia;
