/*
    COLORS:
    #023E73 #024059 #083359 #BF6415 #D9CCC1 #BF391B #A6A6A6
*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        // alignItems:'center',
        // justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    listLevel:{
        paddingHorizontal: 20,
        marginTop: 24,
        marginBottom: 50
    },
    listContent: {
        paddingBottom: 30, // Ajuste o valor conforme necessário para evitar o corte do último item
    },
});

export default styles;