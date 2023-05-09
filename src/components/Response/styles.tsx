import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 14,
        paddingHorizontal: 10
    },
    imgRespnse:{
        marginRight: 10,
        maxWidth: 50,
        maxHeight: 70,
    },
    textResponse: {
        maxWidth: '90%',
        borderWidth: 2,
        borderColor: '#A6A6A6',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexWrap: 'wrap',
        lineHeight: 22,
        backgroundColor: '#023E73',
        color: '#FFF',
    }
});

export default styles;