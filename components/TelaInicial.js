import React from "react";
import { SafeAreaView, Text } from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "../styles";

const TelaInicial = () => (
	<Swiper>
		<SafeAreaView style={Styles.TelaInicial.areaView}>
			<LinearGradient
				colors={["#485563", "#29323c"]}
				style={Styles.TelaInicial.linearGradient}>
				<Text style={Styles.TelaInicial.txtGrande}>Hi!</Text>
			</LinearGradient>
		</SafeAreaView>
		<SafeAreaView style={Styles.TelaInicial.areaView}>
			<Text style={Styles.TelaInicial.txtGrande}>Hello!</Text>
		</SafeAreaView>
		<SafeAreaView style={Styles.TelaInicial.areaView}>
			<Text style={Styles.TelaInicial.txtGrande}>See ya</Text>
		</SafeAreaView>
	</Swiper>
);

export default TelaInicial;
