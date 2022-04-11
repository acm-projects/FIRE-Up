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
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#FFB699',
                        backgroundGradientTo: '#DF604F',
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
