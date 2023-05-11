import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

export function Level(){

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Level one - Iniciantes</Text>
                <Image source={require('../../images/book.png')} style={{width: 30}} resizeMode="contain"  />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Saudações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Talking about me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Talking about my family</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Order at the restaurant</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}