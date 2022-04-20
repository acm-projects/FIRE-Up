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

const StocksPage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <View style={styles.backgroundLayoutView}>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width*0.9} // from react-native
                    height={Dimensions.get('window').height*0.4}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#ACDEAA',
                        backgroundGradientTo: '#456e44',
                        decimalPlaces: 2, // optional, defaults to 2dp
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
            </View>
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable style={styles.IconBehave} onPressOut={() => navigation.navigate("articlesScreen")}>
                        <Image style={styles.tinyLogo} source={require('../assets/articals_icon.png')} />
                    </Pressable>
                    <Pressable style={styles.IconBehave} onPressOut={() => navigation.navigate("mainScreen")}>
                        <Image style={styles.tinyLogo} source={require('../assets/homepage_icon.png')} />
                    </Pressable>
                    <Pressable style={styles.IconBehave}>
                        <Image style={styles.CurrTinyLogo}
                               source={require('../assets/stocks_page_icon.png')} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default StocksPage;
