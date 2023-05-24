import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#023E73',

        position: 'relative',
    },
    imgLingo:{
        position: 'absolute',
        left: '10%',
        top: '10%',
        width: 320,
        opacity: 0.2,
    },
    textTitle: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#BF6415',
    },
    informationContainer:{
        width: '100%',
        paddingHorizontal: 10
    },
    textDescription:{
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,

    }
});

export default styles;