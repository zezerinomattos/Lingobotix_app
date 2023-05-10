import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

// MY IMPORTS
import styles from './styles';

export function Footer(){
    return(
        <View style={styles.container}>
            <TouchableOpacity >
                <Image source={require('../../images/icone-home.png')} style={{width: 50}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icone-campeao.png')} style={{width: 50}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icon-tesouro.png')} style={{width: 50}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icone-worldwide.png')} style={{width: 50}} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
}