import React, {useContext} from 'react';
import { View, Text, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

import { AuthContext } from '../../context/AuthContext';

export function Header(){
    const { user } = useContext(AuthContext);
    
    return(
        <View style={styles.container}>
            <Image source={require('../../images/iconebandeiraEUA1.png')} style={styles.flagEUA} resizeMode="contain"/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Lingobotix</Text>
                <Text style={styles.texName}>{user.name}</Text>
            </View>
            <Image source={require('../../images/imgResponse.png')} style={styles.logoLingo} resizeMode="contain"/>
        </View>
    );
}