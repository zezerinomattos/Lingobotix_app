/*
    COLORS:
    #023E73 #024059 #083359 #BF6415 #D9CCC1 #BF391B #A6A6A6
*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems:'center',
        // justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    content:{
        flex: 1,
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        
    },
    textWelcome:{
        color: '#BF6415',
        fontSize: 60,
        fontWeight: 'bold',
    },
    textPresentation: {
        width: '80%',
        color: '#023E73',
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10
    },
    logoLingo: {
        width: 200,
        height: 250,
        marginTop: 20
    },
    buttonContainer:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 30
    },
    button:{
        width: '85%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#FFF',
        borderWidth: 2,
        marginBottom: 20
    },
    buttonText:{
        color: '#023E73',
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonModal:{
        width: 30, 
        height: 30, 
        marginBottom: 20
    }

    // listLevel:{
    //     paddingHorizontal: 20,
    //     marginTop: 24,
    //     marginBottom: 50
    // },
    // listContent: {
    //     paddingBottom: 30, // Ajuste o valor conforme necessário para evitar o corte do último item
    // },
});

export default styles;