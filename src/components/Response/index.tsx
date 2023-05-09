import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

export function Response(){
    return(
        <View style={styles.container}>
            <Image source={require('../../images/imgResponse.png')} style={styles.imgRespnse} resizeMode='contain'/>
            <Text style={styles.textResponse}>
                Neste exemplo, a possui uma borda com largura de 2 pixels, cor preta e um raio de
            </Text>
        </View>
    );
}