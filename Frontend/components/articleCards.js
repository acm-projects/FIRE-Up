import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
const articleCards = ({ info }) => {
    const { title, description, image } = info;
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={image} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{info.title}</Text>
                    <Text style={styles.description}>{info.description}</Text>
                </View>
            </View>
        </View>
    );
};
const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: "#F2EFEA",
        height: 200,
        borderRadius: radius,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: "center",
        alignSelf: "center",
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "800",
    },
    description: {
        fontWeight: "200",
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});
export default articleCards;
