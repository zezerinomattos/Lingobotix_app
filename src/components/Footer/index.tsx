import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '../../routes/app.routes';

// MY IMPORTS
import styles from './styles';

interface FooterProps{
    onPress: () => void;
}

export function Footer({ onPress }: FooterProps){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    function hendleNavigatedHome(){
        navigation.navigate('Home');
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity  onPress={hendleNavigatedHome}>
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