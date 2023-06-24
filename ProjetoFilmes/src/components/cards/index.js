const MAX_WIDTH = Dimensions.get('window').width * 0.85
const MAX_HEIGHT = Dimensions.get('window').height * 0.9
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native";

function Card({ filme }){

    const baseUrl = 'https://api.otaviolube.com'
    return (

        <View style={styles.container}>

            <Image source={{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url }} 
            style={styles.img}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ?
            filme.sinopse.substring(0,200) + '...' :
            filme.sinopse}</Text>
            <TouchableOpacity style={styles.btnText}>
                <Link to={{screen: 'cadastro'}} style={styles.link3}>
                    cadastro
                </Link>
                <Link to={{screen: 'login'}} style={styles.link2}>
                    login
                </Link>
                <Link to={{screen: 'login'}} style={styles.link1}>
                    comprar
                </Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: 'purple',
        margin: 16,
        padding: 19,
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 7
    },

    img: {
        height: '350px',
        width: '200px',
        marginBottom: 8
    },

    button: {
        alignItems: 'center',
        height: 52,
        backgroundColor: 'blue',
        justifyContent: 'center',
        marginTop: 18,
        width: '100%',
        borderColor: 'black',
        borderRadius: '10px',
        borderWidth: '2px'
    },

    btnText: {
        color: 'black',
        fontSize: 18
    },

    sinopse: {
        marginBottom: 8,
        textAlign: 'justify'
    },

    link1: {
        padding: 10,
        borderWidth: '2px',
        backgroundColor: 'orange',
        borderColor: 'black',
        borderRadius: '15px',
        justifyContent: 'center',
        fontSize: 20
    },

    link2: {
        borderWidth: '2px',
        borderRadius: '15px',
        padding: 810,
        backgroundColor: 'orange',
        borderColor: 'black',
        justifyContent: 'center',
        fontSize: 17
    },

    link3: {
        padding: 10,
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: '3px',
        borderRadius: '17px',
        justifyContent: 'center',
        fontSize: 17
    }
})

export default Card;