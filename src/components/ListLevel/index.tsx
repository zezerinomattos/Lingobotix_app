import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '../../routes/app.routes';

// MY IMPORTS
import styles from './styles';

interface LevelProps {
    data:{
        id: string;
        title: string;
        style: string;
        buttonOne: string;
        buttonTwo: string;
        buttonThree: string;
        buttonFour: string;
        information: string;
        infoStartChat: string;
    };
    onPress: (information: string, title: string) => void;
}

export function ListLevel({ data, onPress }: LevelProps){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    function hendleLessonOne(){
        navigation.navigate('Conversation', {infoStartChat: data.infoStartChat});
    }

    return(
        <View style={[styles.container, {backgroundColor: data.style}]}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{data.title}</Text>

                <TouchableOpacity onPress={() => onPress(data.information, data.title)}>
                    <Image source={require('../../images/book.png')} style={{width: 30}} resizeMode="contain"  />
                </TouchableOpacity>               
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={hendleLessonOne}>
                    <Text style={styles.buttonText}>{data.buttonOne}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{data.buttonTwo}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{data.buttonThree}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{data.buttonFour}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}