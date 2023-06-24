import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems:'center',
        padding: 6,
        margin: 2
    },

    descricao:{
        fontSize: 16,
        color: 'black',
        marginBottom: 5
    },

    img:{
        height:'125%',
        width:'100%',
        borderRadius: 18
    },

    viewdata:{
        height: '100%',
        width: '70%',
        pading: 11,
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 2
    },

    viewimg:{
        height: 165,
        width: '20%',
        padding: 7
    },

    btn:{
        padding: 8,
        borderRadius: 18,
        marginBottom: 3,
        width:'65%'
    }, 

    titulo:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 8
    },

});