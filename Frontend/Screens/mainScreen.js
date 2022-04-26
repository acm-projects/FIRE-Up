import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";




const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const MainScreen = ({navigation}) => {
    // This is the annual spending var after retirement | the default value should be the same as annual spending now from page 3
    const [annualSpending, setAnnualSpending] = React.useState(60000);
    const age = 17;


    const updateData = (response) => {
        try {
            
        }
        catch {

        }
    }








    // axios.get(`http://localhost:3000/money/6260baf00f13e5376d47f9e7`)
    //     .then((response) => {
    //       updateCardData(response);
    //     })
    // These Arrays need to be populated
    const stocksData = [
        100000
    ]
    const bondsData = [
        30000
    ]
    const cashData = [
        50000
    ]
    const netWorthData = [

    ]
    const years = [

    ]

    const spendingBefore = 60000;
    const annualIncome = 100000
    const annualProfit = annualIncome - spendingBefore

    let num;

    let startingYear = 2022;
    for (let i = age + 1; i < 99; i++) {
        years.push(startingYear++);
        num = stocksData[i - age - 1] * (1 + 7 / 100) + annualProfit
        stocksData.push(Math.round((num + Number.EPSILON) * 100) / 100);

        num = bondsData[i - age - 1] * (1 + 2 / 100)
        bondsData.push(Math.round((num + Number.EPSILON) * 100) / 100);

        num = cashData[i - age - 1] * (1 + 0 / 100)
        cashData.push(Math.round((num + Number.EPSILON) * 100) / 100);
    }

    for (let i = age; i < 99; i++) {
        num = stocksData[i - age] + bondsData[i - age] + cashData[i - age]
        netWorthData.push(Math.round((num + Number.EPSILON) * 100) / 100);
    }

    let fiNum = 0

    while (netWorthData[fiNum] < annualSpending * 25) {
        fiNum++;
    }

    let startingNum = netWorthData[0];

    const fetchApi = async() => {

        try {
            const res = await axios.get('http://10.169.174.214:3000/');
            console.log(res.data);
        } catch (error){
            console.log(error.message);
        }
    }

    return(
        <DismissKeyboard>
        <SafeAreaView style={styles.backgroundLayoutView}>
            <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
                style={{flex:1}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.backgroundLayoutView}>
                    <Text style={styles.headerMainText}>Current Amount: $<Text style={styles.headerNum}>{startingNum.toFixed(2)}</Text></Text>
                    <LineChart
                        onDataPointClick={({value, dataset, getColor, legend}) =>
                            Alert.alert(dataset.legend, '$' + value.toFixed(2), [
                                { text: 'OK'},
                            ])
                        }

                        // case 1: fiNum < 10
                        // slice 0, 10

                        // case 2: fiNum >= 10 
                        // slice from fiNum - 10, fiNum
                        data={{
                            labels: years.slice(Math.max(0, fiNum - 10), Math.max(10, fiNum)),
                            datasets: [
                                {
                                    data: stocksData.slice(Math.max(0, fiNum - 10), Math.max(10, fiNum)),
                                    color: () => `rgba(255, 182, 153, 0.75)`,
                                    legend: 'Stocks',
                                    strokeWidth: 5, // optional
                                },
                                {
                                    data: bondsData.slice(Math.max(0, fiNum - 10), Math.max(10, fiNum)),
                                    color: () => `rgba(245, 104, 86, 0.75)`,
                                    strokeWidth: 5, // optional
                                    legend: 'Bonds'

                                },
                                {
                                    data: cashData.slice(Math.max(0, fiNum - 10), Math.max(10, fiNum)),
                                    color: () => `rgba(243, 60, 70, 0.75)`,
                                    strokeWidth: 5, // optional
                                    legend: 'Cash'
                                },
                                {
                                    data: netWorthData.slice(Math.max(0, fiNum - 10), Math.max(10, fiNum)),
                                    color: () => `rgba(0, 161, 82, 0.75)`,
                                    strokeWidth: 5, // optional
                                    legend: 'Net Worth'
                                }
                            ],
                            legend: ['Stocks', 'Bonds', 'Cash', 'Net Worth'],
                        }}
                        width={Dimensions.get('window').width*0.9} // from react-native
                        height={250}
                        withShadow={false}
                        withOuterLines={false}

                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "1",
                                strokeWidth: "2",
                                stroke: "rgba(19,19,19,0.4)"
                            },
                            propsForBackgroundLines: {
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            },

                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            alignSelf: "center",
                        }}
                    />
                    <View style={styles.outerView}>
                        <View style={styles.cardViewOne}>
                            <Text style={styles.boldText}>Years to Financial Independence:</Text>
                            <Text style={styles.boldNum} >{fiNum}</Text>

                        </View>
                        <View style={styles.cardViewTwo}>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.input}
                                placeholder={'Annual Spending After Retirement'}
                                onChangeText={(userInputValue) => setAnnualSpending(userInputValue)}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
            </DismissKeyboard>
    );
}

export default MainScreen;
