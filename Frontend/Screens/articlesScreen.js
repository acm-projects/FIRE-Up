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
        title: "How to Live Your Best Life",
        description: "Ever Wondered How to Life Your Life to the Fullest?",
        image: require("../assets/niagara_falls.jpeg"),
        id: 1,
    },
    {
        title: "Here's How to Make That Trip Around The Globe A Reality",
        description:
            "From making the most out of logistics, to frugal tourism. This article says it all!",
        image: require("../assets/rainforest.jpeg"),
        id: 2,
    },
    {
        title: "Drink This Every Day to Extend Your Life!",
        description: "How else would the lizard people live for centuries?",
        image: require("../assets/minutemaid.jpg"),
        id: 3,
    },
    {
        title: "Technology is Increasing at an Alarming Rate",
        description: "Statistics state that the robot uprising is near",
        image: require("../assets/suggestiverobot.jpg"),
        id: 4,
    },
    {
        title: "These are some things that the IRS don't want you to know!",
        description: "Click here to read more",
        image: require("../assets/condomclub.jpg"),
        id: 5,
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
