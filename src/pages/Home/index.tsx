import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Level } from '../../components/Level';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <Level />

            <Footer />
        </SafeAreaView>
    );
}
