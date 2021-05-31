import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import Styles from "../../styles";

const SelecionarTipo = () => {
	return (
		<SafeAreaView style={Styles.AdicionarOcorrencia.Container}>
			<View style={Styles.AdicionarOcorrencia.TopBar}>
				<Text style={Styles.AdicionarOcorrencia.Title}>
					Hmm, então você quer nos ajudar?
				</Text>
				<Text style={Styles.AdicionarOcorrencia.Text}>
					Para começar, selecione o tipo de ocorrência.
				</Text>
			</View>

			<View style={Styles.AdicionarOcorrencia.Content}>
				<RadioButton.Group>
					<RadioButton.Item mode="ios" label="🕳️ Buraco"></RadioButton.Item>
					<RadioButton.Item mode="ios" label="〰️ Desnível"></RadioButton.Item>
					<RadioButton.Item mode="ios" label="🚧 Bloqueio"></RadioButton.Item>
				</RadioButton.Group>
			</View>
		</SafeAreaView>
	);
};

export default SelecionarTipo;
