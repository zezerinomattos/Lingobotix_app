import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: '#083359',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 8,
        padding: 20,
        flexDirection: 'column',
    },
    containerTitulo:{
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BF6415',      
    },
    contText: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center'
    }
});

export default styles;