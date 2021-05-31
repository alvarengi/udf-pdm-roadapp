import React from "react";
import { ScrollView } from "react-native";
import CardOcorrencia from "./CardOcorrencia";

const Ultimas = () => {
	return (
		<ScrollView>
			<CardOcorrencia
				Icone="🚧"
				Tipo="Bloqueio"
				Local="Rua Carlos Augusto Cornelsen, Bom Retiro"
				Horario="31/5/2021, às 17:18"></CardOcorrencia>
			<CardOcorrencia
				Icone="〰️"
				Tipo="Desnível"
				Local="Avenida São João, Vila Joana"
				Horario="27/2/2021, às 11:34"></CardOcorrencia>
			<CardOcorrencia
				Icone="🕳️"
				Tipo="Buraco"
				Local="Rua da Imprensa, Monte Castelo"
				Horario="15/1/2021, às 05:02"></CardOcorrencia>
		</ScrollView>
	);
};

export default Ultimas;
