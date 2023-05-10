import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <Text>Home</Text>

            <Footer />
        </SafeAreaView>
    );
}
