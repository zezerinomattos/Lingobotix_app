import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Response } from '../../components/Response';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
}
