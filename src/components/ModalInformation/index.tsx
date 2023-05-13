import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

// MY IMPORTS
import styles from './styles';

interface ModalInfoProps {
    hendleLevelInformation: string[];
    handleCloseModal: () => void;
}

export function ModalInformation({ handleCloseModal, hendleLevelInformation }: ModalInfoProps){

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={[styles.content, {width: WIDTH - 20, height: HEIGHT / 2}]}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titleText}>{hendleLevelInformation[1]}</Text>
                </View>

                <Text style={styles.contText}>{hendleLevelInformation[0]}</Text>
            </View>
        </TouchableOpacity>
    );
}