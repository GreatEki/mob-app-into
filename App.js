import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	TextView,
	TouchableOpacity,
} from 'react-native';

export default function App() {
	const [people, setPeople] = useState([
		{ name: 'Shaun', id: '1' },
		{ name: 'Samurai', id: '2' },
		{ name: 'Mario', id: '3' },
		{ name: 'Luigi', id: '4' },
		{ name: 'Peach', id: '5' },
		{ name: 'Bowser', id: '6' },
		{ name: 'Doroma', id: '7' },
		{ name: 'Maddison', id: '8' },
	]);

	const onPressHandler = (id) => {
		console.log(id);
		setPeople((prevState) => {
			return prevState.filter((person) => person.id != id);
		});
	};
	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => onPressHandler(item.id)}>
						<Text style={styles.item}> {item.name} </Text>
					</TouchableOpacity>
				)}
			/>
			{/* <ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}> {person.name} </Text>
					</View>
				))}
			</ScrollView> */}
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 10,
		margin: 10,
		width: 200,
	},

	item: {
		backgroundColor: 'pink',
		padding: 30,
		margin: 10,
		fontSize: 24,
		margin: 24,
		// width: 350,
	},
});
