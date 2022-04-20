import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';

const MainScreen = ({navigation}) => {
    let startingNum = Math.random() * 100000;
    const data = [
        startingNum=startingNum*1.07,
        startingNum=startingNum*0.95,
        startingNum=startingNum*1.1,
        startingNum=startingNum * 1.03,
        startingNum=startingNum*1.07,
        startingNum=startingNum*0.95,
        startingNum=startingNum*1.1,
        startingNum=startingNum * 1.03,
    ]
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <ScrollView>
            <View style={styles.backgroundLayoutView}>
                <Text style={styles.headerMainText}>Current Amount: $<Text style={styles.headerNum}>{startingNum.toFixed(2)}</Text></Text>

                <LineChart
                    data={{
                        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                        datasets: [{
                            data
                        }]
                    }}
                    width={Dimensions.get('window').width*0.9} // from react-native
                    height={250}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#FFB699',
                        backgroundGradientTo: '#DF604F',
                        decimalPlaces: 1, // optional, defaults to 2dp
                        color: (opacity = .1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        alignSelf: "center",
                    }}
                />
                <View style={styles.outerView}>
                <View style={styles.cardViewOne}>
                    <Text style={styles.boldText}>Years to Financial Independence:</Text>
                    <Text style={styles.boldNum} >{15}</Text>

                </View>
                <View style={styles.cardViewTwo}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder={'Annual Take Home Amount'}
                        onChangeText={(userInputValue) => setAnnualTakeHomeAmount(userInputValue)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder={'Annual Spending'}
                        onChangeText={(userInputValue) => setAnnualSpending(userInputValue)}
                    />
                </View>
                </View>
            </View>
            </ScrollView>
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable style={styles.IconBehave} onPressOut={() => navigation.navigate("articlesScreen")}>
                        <Image style={styles.tinyLogo} source={require('../assets/articals_icon.png')} />
                    </Pressable>
                    <Pressable style={styles.IconBehave}>
                        <Image style={styles.CurrTinyLogo} source={require('../assets/homepage_icon.png')} />
                    </Pressable>
                    <Pressable style={styles.IconBehave} onPressOut={() => navigation.navigate("stocksPage")}>
                        <Image style={styles.tinyLogo}
                               source={require('../assets/stocks_page_icon.png')} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;
