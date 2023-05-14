import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

// MY IMPORTS
import styles from './styles';

interface FooterProps{
    onPress: () => void;
}

export function Footer({ onPress }: FooterProps){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity >
                <Image source={require('../../images/icone-home.png')} style={{width: 30}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icone-campeao.png')} style={{width: 30}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icon-tesouro.png')} style={{width: 30}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('../../images/icone-worldwide.png')} style={{width: 30}} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../images/exit.png')} style={{width: 30}} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
}