import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#023E73',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    logo:{
        width: 130,
        height: 140
    },
    textTitle: {
        fontSize: 35,
        color: '#BF6415',
        fontWeight: '800',
        marginBottom: 20
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        marginTop: 20,
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#083359'
    },
    button:{
        backgroundColor: '#BF6415',
        width: '95%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textButton:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        color: '#F21616',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '600'
    },
    buttonRegister: {
        backgroundColor: '#FFF',
        width: '95%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    textButtonRegister:{
        color: '#E3371E',
        fontSize: 18,
        fontWeight: 'bold', 
    },

    buttonPasswordReset:{
        width: '95%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    textButtonInformation:{
        color: '#FFF',
        fontSize: 16
    }
});

export default styles;