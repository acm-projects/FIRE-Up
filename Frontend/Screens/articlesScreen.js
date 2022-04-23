import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    StatusBar,
    FlatList, Pressable, Image,
} from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles';
import Cards from "../components/articleCards";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
const articleCard = [
    {
        title: "What is FI/RE?",
        description: "By Kenneth Anttila",
        image: require("../assets/niagara_falls.jpeg"),
        id: 1,
    },
    {
        title: "Splurging with Efficiency",
        description:
            "How to spend your money responsibly",
        image: require("../assets/rainforest.jpeg"),
        id: 2,
    },
    {
        title: "Investing 101",
        description: "How to Win Big With The Stock Market!",
        image: require("../assets/minutemaid.jpg"),
        id: 3,
    },
    {
        title: "The Philosophy Behind FI/RE",
        description: "How to become financially free",
        image: require("../assets/suggestiverobot.jpg"),
        id: 4,
    },
];

const ArticlesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.backgroundLayoutView}>
            <View style={styles.backgroundLayoutView}>
                <StatusBar barStyle="dark-content" />
                <FlatList
                    data={articleCard}
                    renderItem={({ item }) => {
                        return <Cards info={item} />;
                    }}
                    keyExtractor={(articleCard) => articleCard.id.toString()}
                />
            </View>
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable style={styles.IconBehave}>
                        <Image style={styles.CurrTinyLogo} source={require('../assets/articals_icon.png')} />
                    </Pressable>
                    <Pressable style={styles.IconBehave} onPressOut={() => navigation.navigate("mainScreen")}>
                        <Image style={styles.tinyLogo}
                               source={require('../assets/homepage_icon.png')} />
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

export default ArticlesScreen;
