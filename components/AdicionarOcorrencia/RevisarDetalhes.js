import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Styles from "../../styles";

const RevisarDetalhes = () => (
	<SafeAreaView style={Styles.AdicionarOcorrencia.Container}>
		<View style={Styles.AdicionarOcorrencia.TopBar}>
			<Text style={Styles.AdicionarOcorrencia.Title}>Revise os detalhes</Text>
			<Text style={Styles.AdicionarOcorrencia.Text}>
				Para finalizar, confira as informações inseridas
			</Text>
		</View>
		<View style={Styles.AdicionarOcorrencia.Content}>
			<Text style={Styles.AdicionarOcorrencia.Text}>Tipo: Bloqueio</Text>
			<Text style={Styles.AdicionarOcorrencia.Text}>
				Local: Rua Carlos Augusto Cornelsen, Bom Retiro, Curitiba, PR, 80520-560
			</Text>
			<Text style={Styles.AdicionarOcorrencia.Text}>
				Horário: 31/5/2021, às 17:18
			</Text>
		</View>
	</SafeAreaView>
);

export default RevisarDetalhes;
