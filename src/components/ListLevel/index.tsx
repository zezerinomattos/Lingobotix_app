import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

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
    };
    onPress: () => void;
}

export function ListLevel({ data, onPress }: LevelProps){

    return(
        <View style={[styles.container, {backgroundColor: data.style}]}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{data.title}</Text>

                <TouchableOpacity onPress={onPress}>
                    <Image source={require('../../images/book.png')} style={{width: 30}} resizeMode="contain"  />
                </TouchableOpacity>               
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
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