import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <Text>Home</Text>
        </SafeAreaView>
    );
}
