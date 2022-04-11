import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backgroundLayoutView: {
        flex: 1,
        backgroundColor: '#00081E'
    },
    buttonLayoutView: {
        alignItems: 'center',
        backgroundColor: '#00081E',
        top: 100
    },
    logo: {
        width: 200,
        height: 200,
        margin: 50,
        alignSelf: 'center',
        resizeMode:"cover",
    },
    headerText: {
        fontWeight: '800',
        fontSize: 26,
        color: '#F2EFEA',
        marginTop: 5,
        marginLeft: "5%",
        marginBottom: 30
    },
    input: {
        alignSelf: 'center',
        height: 50,
        width: "93%",
        margin: 12,
        color: '#000000',
        borderWidth: 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#fff',
        padding: 10,
        paddingLeft: 20,
        backgroundColor: '#fff',
    },
    AccountCreationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        borderRadius: 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#ACDEAA',
        elevation: 3,
        backgroundColor: '#ACDEAA',
        marginTop: 50,
        alignSelf: 'center'
    },
    SignUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        borderRadius: 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'white',
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 10,
        alignSelf: 'center'
    },
    AccountCreationButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    HelpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        borderColor: '#FFB699',
        elevation: 3,
        // marginTop: 30,
        //marginLeft: 30,
        backgroundColor: '#FFB699',
        alignSelf: 'center',
        //marginLeft: "90%"
    },
    HelpButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: "center",
        bottom: 70,

    },
    NavBar: {
        flexDirection: "row",
        backgroundColor: '#F2EFEA',
        opacity: 0.90,
        width: '75%',
        justifyContent: 'space-evenly',
        borderRadius: 30
    },
    IconBehave: {
        padding: 14,
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
    CurrTinyLogo: {
        width: 25,
        height: 25,
        tintColor: '#DF604F'
    },
    HeaderBar: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        position: 'absolute',
        alignItems: 'center',
        alignSelf: "center",
    },

});

