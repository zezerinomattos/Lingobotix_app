import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#083359',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    flagEUA:{
        width: 50,
    },
    containerTitle: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle:{
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10
    },
    texName:{
        fontSize: 18,
        color: '#FFF',
        position: 'absolute',
        bottom: 5
    },
    logoLingo:{
        width: 50,
    }
})

export default styles;