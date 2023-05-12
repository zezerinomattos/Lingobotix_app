import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

// MY IMPORTS
import styles from './styles';

interface ModalInfoProps {
    handleCloseModal: () => void;
}

export function ModalInformation({ handleCloseModal }: ModalInfoProps){

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={[styles.content, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                <Text style={styles.titleText}>Modala</Text>
            </View>
        </TouchableOpacity>
    );
}