import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Mapa = () => (
	<View style={{ width: 100, height: 100 }}>
		<MapView initialRegion={{ latitute: -15.793727, longitude: -47.8913067 }}>
			<Marker coordinate={{ latitude: -15.7943906, longitude: -47.8844077 }} />
		</MapView>
	</View>
);

export default Mapa;
