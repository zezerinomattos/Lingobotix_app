import React from 'react';
import { View, Text, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

export function Header(){
    return(
        <View style={styles.container}>
            <Image source={require('../../images/iconebandeiraEUA1.png')} style={styles.flagEUA} resizeMode="contain"/>
            <Text style={styles.textTitle}>Lingobotix</Text>
            <Image source={require('../../images/imgResponse.png')} style={styles.logoLingo} resizeMode="contain"/>
        </View>
    );
}