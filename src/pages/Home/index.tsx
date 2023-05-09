import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Response } from '../../components/Response';
import { useEffect } from 'react';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.response}>
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
            </ScrollView>          
        </SafeAreaView>
    );
}
