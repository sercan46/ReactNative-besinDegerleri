import React, { Component } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TextInput, Button, View, Alert, ScrollView } from 'react-native';
import { CALORIE } from '../src/assets';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

export default class MainPage extends Component {
    constructor() {
        super();

        // need to bind `this` to access props in handler
        this.searchCalori = this.searchCalori.bind(this);
    }

    state = {
        textInput: '',
        respArray: []
    }
    searchCalori = () => {
        const { navigate } = this.props.navigation;

        let config = {
            headers: {
                'X-Api-Key': 'eXUzuSvRE+GtNPhdhBP02Q==FmYJY6SCdzsAQbCQ',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }
        axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${this.state.textInput}`, config).then(x => {
            this.state.respArray = x.data.items
            console.log('test', x.data.items.length)
            if (x.data.items.length > 0) {

                navigate('detailPage', { foodDetail: this.state.respArray, name: this.state.textInput });

            }
            else {
                Alert.alert(
                    "Error",
                    "Enter Valid Product Name",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "Okey", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <SafeAreaView style={{padding:20}}>
                <Image source={CALORIE} style={styles.imageStyle} resizeMode='stretch' />
                <Text style={styles.headerText}>Write the information about the food you want to learn the values ??????of, with its English name in the field below and press the 'Search...' button. </Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(val) => this.state.textInput = val}
                    placeholderTextColor='green'
                    underlineColorAndroid='green'
                    placeholder="Name of the product"
                />
                <View style={styles.buttonStyle}>
                    <Button color='crimson' title='Search...' onPress={() => this.searchCalori()}></Button>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    imageStyle: {
        width:'100%',
        height: '50%',

    },
    headerText: {
        padding: 20,
        fontWeight: 'bold',
        color: 'crimson',
        fontSize: 16
    },
    textInputStyle: {
        color: 'green',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonStyle: {
        marginLeft: 25,
        marginRight: 25,
    }
})