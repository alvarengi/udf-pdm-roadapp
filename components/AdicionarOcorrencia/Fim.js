import React from "react";
import { SafeAreaView, Text } from "react-native";
import Style from "../../styles";

const Fim = () => (
	<SafeAreaView style={Style.AdicionarOcorrencia.Fim}>
		<Text style={Style.AdicionarOcorrencia.Title}>✔️</Text>
		<Text style={Style.AdicionarOcorrencia.FimTitle}>
			Ocorrência registrada com sucesso!
		</Text>
		<Text style={Style.AdicionarOcorrencia.FimText}>
			Muito obrigado pela sua contribuição.
		</Text>
	</SafeAreaView>
);

export default Fim;
