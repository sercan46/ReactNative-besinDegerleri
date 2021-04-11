import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';

const FoodDetailPage = ({ route, navigation }) => {
    const routeData = route.params.foodDetail
    const renderPage = () => {
        return routeData.map((value) => {
            return (
                <View>
                    <View style={styles.nameCard}>
                        <Text style={styles.textStyle}>{value.name}</Text>
                    </View>
                    <View style={styles.caloriAndSugar}>
                        <View style={styles.calori}>
                            <Text style={styles.textStyle}>Kalori: {value.calories}</Text>

                        </View>
                        <View style={styles.sugar}>
                            <Text style={styles.textStyle}>Şeker(Gr): {value.sugar_g}</Text>

                        </View>
                    </View>
                    <View style={styles.fiberAndServing}>
                        <View style={styles.fiber}>
                            <Text style={styles.textStyle}>Fiber(Gr): {value.fiber_g}</Text>

                        </View>
                        <View style={styles.serving}>
                            <Text style={styles.textStyle}>Ölçü Değeri(Gr): {value.serving_size_g}</Text>

                        </View>
                    </View>
                    <View style={styles.sodyumAndPotasyum}>
                        <View style={styles.sodyum}>
                            <Text style={styles.textStyle}>Sodyum(Mg): {value.sodium_mg}</Text>

                        </View>
                        <View style={styles.potasyum}>
                            <Text style={styles.textStyle}>Potasyum(Mg): {value.potassium_mg}</Text>

                        </View>
                    </View>
                    <View style={styles.saturadAndTotal}>
                        <View style={styles.satura}>
                            <Text style={styles.textStyle}>Doymuş Yağ(Gr): {value.fat_saturated_g}</Text>

                        </View>
                        <View style={styles.total}>
                            <Text style={styles.textStyle}>Toplam Yağ(Gr): {value.fat_total_g}</Text>

                        </View>
                    </View>
                    <View style={styles.colestrolAndProtein}>
                        <View style={styles.colestrol}>
                            <Text style={styles.textStyle}>Kolestrol(Gr): {value.cholesterol_mg}</Text>

                        </View>
                        <View style={styles.protein}>
                            <Text style={styles.textStyle}>Protein(Gr): {value.protein_g}</Text>

                        </View>
                    </View>
                    <View style={styles.carbonHidrat}>
                        <Text style={styles.textStyle}>Karbonhidrat(Gr): {value.carbohydrates_total_g}</Text>
                    </View>
                </View>
            )

        })



    }
    return (
        <SafeAreaView>
            <ScrollView>
                {renderPage()}
            </ScrollView>
        </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    nameCard: {
        display: 'flex',
        padding: 20,
        backgroundColor: 'green',
        margin: 25,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    caloriAndSugar: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    fiberAndServing: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    sodyumAndPotasyum: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    saturadAndTotal: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    colestrolAndProtein: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    carbonHidrat: {
        display: 'flex',
        padding: 20,
        backgroundColor: '#8b8b00',
        margin: 25,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    calori: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'crimson',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    sugar: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    fiber: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    serving: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    sodyum: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#8b4513',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    potasyum: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#1b8bb4',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    satura: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    total: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#7a378b',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    colestrol: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#8b668b',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    protein: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#a40000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 100,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17.5,
        fontWeight: 'bold'
    }
})
export default FoodDetailPage;