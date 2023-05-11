import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#A6A6A6',
        marginVertical: 20,
        borderRadius: 8
    },
    titleContainer: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    textTitle: {
        fontSize: 20,
        color: '#BF6415'
    },
    buttonContainer:{
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: '90%',
        height: 35,
        backgroundColor: '#FFF',
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText:{

    }
});

export default styles;