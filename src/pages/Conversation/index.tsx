import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Response } from '../../components/Response';


export default function Conversation(){

    return(
        <View style={styles.container} >
            {/* <ScrollView style={styles.response} showsVerticalScrollIndicator={false}>
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
            </ScrollView>     */}
        </View>
    );
}