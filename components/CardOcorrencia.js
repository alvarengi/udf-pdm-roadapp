import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "../styles";

class CardOcorrencia extends Component {
	constructor(props) {
		super(props);
		const { Tipo, Local, Horario, Icone } = this.props;
		this.state = {
			Tipo,
			Local,
			Horario,
			Icone,
		};
	}

	render() {
		return (
			<View style={Styles.CardOcorrencia.Container}>
				<View style={Styles.CardOcorrencia.Icone}>
					{this.state.Icone}
					{/* <i class="i isomething"></i> */}
				</View>
				<View style={Styles.CardOcorrencia.Descricao}>
					<Text style={Styles.CardOcorrencia.Texto}>
						Tipo: {this.state.Tipo}
					</Text>
					<Text style={Styles.CardOcorrencia.Texto}>
						Local: {this.state.Local}
					</Text>
					<Text style={Styles.CardOcorrencia.Texto}>
						Horário: {this.state.Horario}
					</Text>
				</View>
			</View>
		);
	}
}

export default CardOcorrencia;
